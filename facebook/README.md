# Facebook Průvodu králů — titulní a profilová fotka

Nejde o nový vizuál. Obě grafiky přebírají přímo prvky webu:

- **Titulní fotka = hero úvodní stránky.** Fotka souboru před portálem
  (`../hero-1536.webp`), koruna (`../koruna.svg`), nápis **Průvod Králů**
  v Uncial Antiqua barvou `#E7AC44` s obrysem `#9B6C1B` a claim
  **České dějiny kráčí ulicemi** ve Spectral SC.
- **Profilová fotka = favicon webu.** Zlatá koruna na tmavě modré `#1C244B`.

## Hotové soubory (`vystup/`)

| soubor | rozměr | k čemu |
|---|---|---|
| `fb-titulni-1640x924.png` | 1640 × 924 px (16 : 9) | titulní fotka stránky a titulní obrázek návodů |
| `fb-profil-720.png` | 720 × 720 px | profilová fotka |

## Proč tyto rozměry

- **Titulní fotka 1640 × 924 px (16 : 9).** Má stejný poměr jako fotka hero,
  takže se nic nedokresluje. Mobil ukáže celou fotku. Počítač ukáže jen
  prostřední pás 1640 × ~608 px (řádky 158–766, poměr ~2,7 : 1).
  Koruna, nápis i claim leží v tomto pásu (`?zona` ho v šabloně ukáže červeně).
- **Profilová fotka 720 × 720 px.** Facebook ji ořízne do kruhu a koruna má
  od okraje dost místa.
- Nahrávat jako **PNG**, aby zlaté písmo nemělo šum kolem okrajů.

## Nové vykreslení

`node vykreslit.mjs`. Skript potřebuje Playwright (`npm i -D playwright`,
`npx playwright install chromium`). Písma leží lokálně v `pisma/`.
Fotka hero má šířku 1536 px a na plátno se zvětší o 7 %. S originálem
v šířce 1920 px a víc bude titulka ostřejší: stačí ho uložit pod stejným názvem.
