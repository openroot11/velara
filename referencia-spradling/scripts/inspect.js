const { chromium } = require('playwright-core');
const BRAVE = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';
const BASE = 'https://lat.spradling.group';
const sleep = ms => new Promise(r=>setTimeout(r,ms));

(async () => {
  const browser = await chromium.launch({ executablePath: BRAVE, headless: true, args:['--no-sandbox'] });
  const page = await (await browser.newContext({ viewport:{width:1440,height:900}, locale:'es-CO' })).newPage();
  await page.goto(BASE + '/es-la', { waitUntil:'networkidle', timeout:45000 });
  await sleep(3000);

  const nav = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('header a, nav a').forEach(a => {
      const t = a.textContent.trim().replace(/\s+/g,' ');
      if (t) out.push({ t, href: a.href });
    });
    return out;
  });
  console.log('=== NAV / HEADER LINKS ===');
  console.log(JSON.stringify(nav, null, 1));

  // hover Productos, dump megamenu links
  try {
    await page.locator('header a:has-text("Productos"), nav a:has-text("Productos")').first().hover();
    await sleep(1500);
    const mm = await page.evaluate(() => {
      const vis = [];
      document.querySelectorAll('a').forEach(a => {
        const r = a.getBoundingClientRect();
        if (r.top > 60 && r.top < 600 && r.width > 0 && a.offsetParent) {
          const t = a.textContent.trim().replace(/\s+/g,' ');
          if (t) vis.push({ t, href: a.href });
        }
      });
      return vis;
    });
    console.log('=== MEGAMENU PRODUCTOS ===');
    console.log(JSON.stringify(mm, null, 1));
  } catch(e){ console.log('mm err', e.message); }

  // footer links
  const footer = await page.evaluate(() => {
    const f = document.querySelector('footer');
    if (!f) return [];
    return [...f.querySelectorAll('a')].map(a => ({ t:a.textContent.trim().replace(/\s+/g,' '), href:a.href })).filter(x=>x.t);
  });
  console.log('=== FOOTER ===');
  console.log(JSON.stringify(footer, null, 1));

  // all @font-face rules
  const ff = await page.evaluate(() => {
    const res = [];
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch { continue; }
      if (!rules) continue;
      for (const r of rules) {
        if (r.constructor.name === 'CSSFontFaceRule') {
          res.push(r.cssText);
        }
      }
    }
    return res;
  });
  console.log('=== @font-face ===');
  console.log(ff.join('\n'));

  await browser.close();
})();
