const { chromium } = require('playwright-core');
const BRAVE = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';
const OUT = 'capturas';
const BASE = 'https://lat.spradling.group';
const sleep = ms => new Promise(r=>setTimeout(r,ms));
const log=(...a)=>console.log(...a);

async function accept(page){
  for (const s of ['#onetrust-accept-btn-handler','button:has-text("Aceptar")','button:has-text("ACEPTAR")']) {
    try { const e=page.locator(s).first(); if (await e.isVisible({timeout:1000})){ await e.click(); await sleep(600); return true; } } catch {}
  }
  return false;
}
async function goto(page,url){
  try{ await page.goto(url,{waitUntil:'networkidle',timeout:45000}); }catch{ try{ await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000}); }catch(e){} }
  await sleep(2500);
}
async function shot(page,n,full=true){
  try{ await page.screenshot({path:`${OUT}/${n}.png`,fullPage:full,timeout:60000}); log('  ✓',n);}catch(e){ try{await page.screenshot({path:`${OUT}/${n}.png`});log('  ✓vp',n);}catch(e2){log('  ✗',n);} }
}

(async()=>{
  const browser = await chromium.launch({executablePath:BRAVE,headless:true,args:['--no-sandbox']});

  // DESKTOP limpio (cookies aceptadas)
  const d = await (await browser.newContext({viewport:{width:1440,height:900},locale:'es-CO'})).newPage();
  await goto(d, BASE+'/es-la'); await accept(d); await sleep(1500);
  await shot(d,'30-home-limpio');
  await goto(d, BASE+'/es-la/productos'); await accept(d); await sleep(1500); await shot(d,'31-catalogo-limpio');
  await goto(d, BASE+'/es-la/productos/batan-cr3'); await accept(d); await sleep(2000); await shot(d,'32-detalle-limpio');
  // acordeon abierto en detalle
  try {
    const acc = d.locator('text=Base textil').first(); await acc.scrollIntoViewIfNeeded(); await acc.click(); await sleep(600);
    const acc2 = d.locator('text=Retardantes al fuego').first(); await acc2.click(); await sleep(600);
    await shot(d,'33-detalle-acordeon-abierto');
  } catch(e){ log('acc',e.message); }
  // filtro abierto en catalogo
  await goto(d, BASE+'/es-la/productos'); await accept(d); await sleep(1500);
  try {
    for (const t of ['Sectores','Color','Composición']) { const b=d.locator(`text=${t}`).first(); await b.click().catch(()=>{}); await sleep(400); }
    await shot(d,'34-catalogo-filtros-abiertos');
  } catch(e){}

  // MOBILE
  const m = await (await browser.newContext({viewport:{width:390,height:844},locale:'es-CO',isMobile:true,hasTouch:true,userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'})).newPage();
  await goto(m, BASE+'/es-la'); await accept(m); await sleep(1500);
  await shot(m,'35-mobile-home', false);
  try {
    const burger = m.locator('header button, header [class*="menu" i], header [class*="burger" i], header [class*="hamburg" i]').first();
    await burger.click({timeout:5000}); await sleep(1200);
    await shot(m,'36-mobile-menu', false);
    // expandir Productos
    const p = m.locator('text=Productos').first(); await p.click().catch(()=>{}); await sleep(800);
    await shot(m,'37-mobile-menu-productos', true);
  } catch(e){ log('mobile menu',e.message); }
  await goto(m, BASE+'/es-la/productos'); await accept(m); await sleep(1500); await shot(m,'38-mobile-catalogo', false);

  await browser.close();
  log('LISTO3');
})();
