const { chromium } = require('playwright-core');
const fs = require('fs');
const BRAVE = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';
const OUT = 'capturas';
const BASE = 'https://lat.spradling.group';
const sleep = ms => new Promise(r=>setTimeout(r,ms));
const log = (...a)=>console.log(...a);

async function cookies(page){
  for (const s of ['#onetrust-accept-btn-handler','button:has-text("Aceptar")','button:has-text("ACEPTAR")','button:has-text("Acepto")']) {
    try { const e=page.locator(s).first(); if (await e.isVisible({timeout:700})){ await e.click(); await sleep(400); return; } } catch {}
  }
}
async function goto(page,url){
  try { await page.goto(url,{waitUntil:'networkidle',timeout:45000}); }
  catch { try{ await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000}); }catch(e){ log('  goto fail',e.message);} }
  await sleep(2800);
}
async function shot(page,name){
  try { await page.screenshot({path:`${OUT}/${name}.png`,fullPage:true,timeout:60000}); log('  ✓',name); }
  catch(e){ try{ await page.screenshot({path:`${OUT}/${name}.png`}); log('  ✓vp',name);}catch(e2){log('  ✗',name,e2.message);} }
}

(async () => {
  const browser = await chromium.launch({ executablePath: BRAVE, headless:true, args:['--no-sandbox'] });
  const page = await (await browser.newContext({ viewport:{width:1440,height:900}, locale:'es-CO' })).newPage();

  const list = [
    ['10-nosotros-somos-spradling', '/es-la/acerca-de/somos-spradling'],
    ['11-recursos-biblioteca', '/es-la/biblioteca-documentos'],
    ['13-sostenibilidad-ecosense', '/es-la/acerca-de/ecosense'],
    ['20-mercado-transporte', '/es-la/mercados/transporte'],
    ['21-mercado-contract', '/es-la/mercados/contract'],
    ['22-mercado-marina', '/es-la/mercados/marina'],
    ['23-mercado-proteccion', '/es-la/mercados/proteccion'],
    ['24-productos-biblioteca-docs', '/es-la/productos/biblioteca-documentos'],
    ['25-pqrs', '/es-la/contacto/pqrs'],
    ['26-politica-privacidad', '/es-la/paginas/politica-de-privacidad-lat'],
  ];
  for (const [n,p] of list){ log('PAGE',p); await goto(page,BASE+p); await cookies(page); await sleep(1200); await shot(page,n); }

  // megamenu screenshots para items sin dropdown -> confirmar que son enlaces directos
  // Detalle de colección: entrar a /productos y clic en primera tarjeta
  log('DETALLE coleccion');
  await goto(page, BASE + '/es-la/productos');
  await cookies(page);
  await sleep(2500);
  const before = page.url();
  try {
    const cards = page.locator('main a[href*="/producto"], main a[href*="/coleccion"], a[href*="detalle"], [class*="card"] a, [class*="Card"] a');
    const n = await cards.count();
    log('  tarjetas candidatas:', n);
    let clicked=false;
    for (let i=0;i<Math.min(n,8);i++){
      const c=cards.nth(i);
      const href = await c.getAttribute('href').catch(()=>null);
      if (href && !href.includes('sector=') && !/\/productos\/?$/.test(href)) {
        await c.scrollIntoViewIfNeeded(); await sleep(400);
        await c.click({timeout:6000}); clicked=true; break;
      }
    }
    if (!clicked) { // fallback: primera imagen dentro de un enlace
      await page.locator('main a:has(img)').first().click({timeout:6000});
    }
    await page.waitForLoadState('networkidle',{timeout:20000}).catch(()=>{});
    await sleep(3000);
    log('  url:', page.url());
    await shot(page, '27-detalle-coleccion');
  } catch(e){ log('  ✗ detalle',e.message); }

  // dump enlaces de la pagina de productos para conocer patron de detalle
  await goto(page, BASE + '/es-la/productos');
  await cookies(page); await sleep(2500);
  const plinks = await page.evaluate(()=>[...document.querySelectorAll('main a')].map(a=>a.href).filter((v,i,s)=>s.indexOf(v)===i).slice(0,40));
  fs.writeFileSync(`${OUT}/product-links.json`, JSON.stringify(plinks,null,1));
  log(plinks.join('\n'));

  await browser.close();
  log('LISTO2');
})();
