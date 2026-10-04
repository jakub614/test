# Facebook Průvodu králů — titulní a profilová fotka

Vizuál je stejný jako hero webu: tmavě modrá `#1C244B`, zlatá `#D3A451` s tmavším
obrysem `#9B6C1B`, koruna, nápis **Průvod králů** písmem *Uncial Antiqua*
a claim **České dějiny kráčí ulicemi** písmem *Spectral SC*.

## Hotové soubory (`vystup/`)

| soubor | rozměr | k čemu |
|---|---|---|
| `fb-titulni-1640x924.png` | 1640 × 924 px (16 : 9) | titulní fotka stránky a titulní obrázek návodů |
| `fb-profil-720.png` | 720 × 720 px | profilová fotka, jen koruna (doporučuji) |
| `fb-profil-s-nazvem-720.png` | 720 × 720 px | profilová fotka s nápisem (varianta) |

## Proč tyto rozměry

- **Titulní fotka 1640 × 924 px.** Facebook ji na mobilu ukáže celou (16 : 9),
  na počítači jen prostřední pás **1640 × ~608 px** (poměr asi 2,7 : 1, řádky
  158–766). Koruna, nápis i claim proto leží uvnitř tohoto pásu
  (`?zona` v šabloně ho ukáže červeně). Dvojnásobná velikost oproti zobrazení
  (820 px) drží písmo ostré na displejích s vysokým rozlišením.
- **Profilová fotka 720 × 720 px.** Facebook ji ořízne do kruhu a ukazuje ji
  i ve velikosti 32–40 px u komentářů. Tam je nápis nečitelný a čitelná zůstane
  jen koruna. Proto doporučuji variantu **bez nápisu**. Název stránky stojí hned vedle.
- Nahrávat jako **PNG**. JPG dělá kolem zlatého písma na modré šum.

## Úprava a nové vykreslení

Šablony jsou `titulni.html` a `profil.html`. Písma leží lokálně v `pisma/`.

1. **Koruna:** `koruna.svg` je zástupná kresba. Nahraďte ji souborem
   `assets/koruna.svg` z webu (stejný název), aby byla koruna totožná s hero.
2. **Varianta s fotkou z hero (volitelné):** zkopírujte `assets/Banner-pruvod.jpg`
   z webu sem jako `hero.jpg`. Skript pak vykreslí i `fb-titulni-foto-1640x924.png`
   se ztmavenou fotkou souboru pod nápisem.
3. Spusťte `node vykreslit.mjs`. Potřebuje Playwright: `npm i -D playwright`
   a `npx playwright install chromium`.
