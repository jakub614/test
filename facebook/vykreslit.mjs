// Vykreslí PNG z šablon: node vykreslit.mjs
// Potřebuje Playwright (npm i -D playwright && npx playwright install chromium).
// Bere koruna.svg a hero-1536.webp z kořene repozitáře (soubory z webu).
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const adr = path.dirname(fileURLToPath(import.meta.url));
const ven = path.join(adr, 'vystup');
mkdirSync(ven, { recursive: true });

const ukoly = [
  ['titulni.html', '',      1640, 924, 'fb-titulni-1640x924.png'],
  ['titulni.html', '?zona', 1640, 924, 'kontrola-titulni-zona.png'],
  ['profil.html',  '',       720, 720, 'fb-profil-720.png'],
  ['profil.html',  '?zona',  720, 720, 'kontrola-profil-zona.png'],
];

const prohlizec = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
for (const [soubor, dotaz, w, h, nazev] of ukoly) {
  const strana = await prohlizec.newPage({ viewport: { width: w, height: h } });
  await strana.goto('file://' + path.join(adr, soubor) + dotaz);
  await strana.evaluate(() => document.fonts.ready);
  await strana.waitForTimeout(300);
  await strana.screenshot({ path: path.join(ven, nazev), clip: { x: 0, y: 0, width: w, height: h } });
  await strana.close();
  console.log('hotovo', nazev);
}
await prohlizec.close();
