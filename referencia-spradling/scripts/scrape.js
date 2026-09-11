const { chromium } = require('playwright-core');
const fs = require('fs');

const BRAVE = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';
const OUT = 'capturas';
const BASE = 'https://lat.spradling.group';

const log = (...a) => console.log(...a);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function dismissCookies(page) {
  const sels = [
    'button:has-text("Aceptar")', 'button:has-text("ACEPTAR")',
    'button:has-text("Acepto")', 'button:has-text("Entendido")',
    '#onetrust-accept-btn-handler', '.cookie-accept', '[aria-label*="acept" i]'
  ];
  for (const s of sels) {
    try {
      const el = page.locator(s).first();
      if (await el.isVisible({ timeout: 800 })) { await el.click(); await sleep(400); log('  cookies cerradas via', s); return; }
    } catch {}
  }
}

async function shot(page, name) {
  const p = `${OUT}/${name}.png`;
  try {
    await page.screenshot({ path: p, fullPage: true, timeout: 60000 });
    log('  ✓', p);
  } catch (e) {
    log('  ✗ fullpage fallo, viewport:', name, e.message);
    try { await page.screenshot({ path: p }); log('  ✓ (viewport)', p); } catch (e2) { log('  ✗✗', e2.message); }
  }
}

async function goto(page, url) {
  try { await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }); }
  catch { try { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 }); } catch (e) { log('  goto fallo', url, e.message); } }
  await sleep(2500);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'es-CO', deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  // 1. HOME
  log('HOME');
  await goto(page, BASE + '/es-la');
  await dismissCookies(page);
  await sleep(1500);
  await shot(page, '01-home');

  // 2. MEGAMENUS - hover each top nav item
  const navItems = ['Productos', 'Nosotros', 'Recursos', 'Proyectos', 'Sostenibilidad', 'Contacto'];
  let idx = 2;
  for (const label of navItems) {
    log('MENU', label);
    await goto(page, BASE + '/es-la');
    await dismissCookies(page);
    await sleep(1000);
    try {
      const link = page.locator(`header a:has-text("${label}"), nav a:has-text("${label}"), header button:has-text("${label}")`).first();
      await link.hover({ timeout: 5000 });
      await sleep(1800);
      await page.screenshot({ path: `${OUT}/${String(idx).padStart(2,'0')}-menu-${label.toLowerCase()}.png` });
      log('  ✓ menu', label);
    } catch (e) { log('  ✗ hover', label, e.message); }
    idx++;
  }

  // 3. Landing pages de cada seccion
  const pages = [
    ['08-productos', '/es-la/productos'],
    ['09-productos-sector36', '/es-la/productos?sector=U2VjdG9yTm9kZTozNg=='],
    ['10-nosotros', '/es-la/nosotros'],
    ['11-recursos', '/es-la/recursos'],
    ['12-proyectos', '/es-la/proyectos'],
    ['13-sostenibilidad', '/es-la/sostenibilidad'],
    ['14-contacto', '/es-la/contacto'],
    ['15-colecciones', '/es-la/colecciones'],
    ['16-donde-comprar', '/es-la/donde-comprar'],
    ['17-biblioteca-documentos', '/es-la/biblioteca-de-documentos'],
  ];
  for (const [name, path] of pages) {
    log('PAGE', path);
    await goto(page, BASE + path);
    await dismissCookies(page);
    await sleep(1500);
    await shot(page, name);
  }

  // 4. Primer producto dentro del sector (detalle)
  log('DETALLE producto');
  await goto(page, BASE + '/es-la/productos?sector=U2VjdG9yTm9kZTozNg==');
  await dismissCookies(page);
  await sleep(2000);
  try {
    const card = page.locator('a[href*="/producto"], a[href*="/coleccion"], .product-card a, main a img').first();
    await card.scrollIntoViewIfNeeded();
    await sleep(500);
    await card.click({ timeout: 8000 });
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(()=>{});
    await sleep(2500);
    await shot(page, '18-detalle-producto');
    log('  url detalle:', page.url());
  } catch (e) { log('  ✗ detalle', e.message); }

  // 5. Footer / search overlay
  log('SEARCH overlay');
  await goto(page, BASE + '/es-la');
  await dismissCookies(page);
  try {
    const s = page.locator('header [class*="search" i], header button[aria-label*="buscar" i], header svg').last();
    await s.click({ timeout: 5000 });
    await sleep(1500);
    await page.screenshot({ path: `${OUT}/19-busqueda.png` });
    log('  ✓ busqueda');
  } catch (e) { log('  ✗ search', e.message); }

  // 6. DESIGN TOKENS
  log('TOKENS');
  await goto(page, BASE + '/es-la');
  await dismissCookies(page);
  const tokens = await page.evaluate(() => {
    const gcs = (el) => el ? getComputedStyle(el) : null;
    const body = gcs(document.body);
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const a = document.querySelector('header a, nav a');
    const btn = [...document.querySelectorAll('a,button')].find(e => /explorar|ver|comprar|descubr/i.test(e.textContent||''));
    const pick = (el) => { const s = gcs(el); return s ? {
      fontFamily: s.fontFamily, fontSize: s.fontSize, fontWeight: s.fontWeight,
      lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, textTransform: s.textTransform,
      color: s.color, background: s.backgroundColor, borderRadius: s.borderRadius, padding: s.padding
    } : null; };
    // recolectar colores usados
    const colors = {};
    document.querySelectorAll('*').forEach(el => {
      const s = getComputedStyle(el);
      [s.color, s.backgroundColor, s.borderColor].forEach(c => {
        if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'rgb(0, 0, 0)') colors[c] = (colors[c]||0)+1;
      });
    });
    const topColors = Object.entries(colors).sort((x,y)=>y[1]-x[1]).slice(0,25);
    const fonts = new Set();
    document.querySelectorAll('h1,h2,h3,h4,p,a,span,li,button').forEach(el => fonts.add(getComputedStyle(el).fontFamily));
    return {
      body: pick(document.body), h1: pick(h1), h2: pick(h2), navLink: pick(a), button: pick(btn),
      buttonText: btn ? btn.textContent.trim() : null,
      topColors, fontFamilies: [...fonts],
      title: document.title,
      metaDesc: (document.querySelector('meta[name=description]')||{}).content,
      fontFaceLinks: [...document.querySelectorAll('link[rel=stylesheet],link[as=font]')].map(l=>l.href).filter(h=>/font|typekit|googleapis/i.test(h))
    };
  });
  fs.writeFileSync(`${OUT}/design-tokens.json`, JSON.stringify(tokens, null, 2));
  log(JSON.stringify(tokens, null, 2));

  await browser.close();
  log('LISTO');
})();
