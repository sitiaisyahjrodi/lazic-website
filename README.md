# Lazic Group - Website

Website statik (HTML + CSS + JS biasa). Tak perlu install apa-apa untuk jalankan.

## Struktur
```
index.html          halaman utama + halaman produk (guna #/p/dinara dsb)
css/style.css       semua rekaan dan animasi
js/config.js        nombor WhatsApp, emel, alamat (edit di sini)
js/data.js          produk, harga, pakej, promo, soalan lazim (edit di sini)
js/app.js           logik website + chatbot Aisya (biasanya tak perlu disentuh)
assets/images/      semua gambar
```

## Jalankan di komputer (VS Code / Antigravity)
1. Buka folder ini: File > Open Folder.
2. Pasang extension **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` > **Open with Live Server**.

Alternatif: dwiklik `index.html` terus, atau `npx serve` dalam terminal.

## Apa yang awak perlu edit
- `js/config.js` : `WA` (nombor order), `WA_PAPAR`, `MAIL`, `ADDR`
- `js/data.js`   : harga, pakej, manfaat, cara ambil, soalan lazim

Tukar harga di satu tempat sahaja; kad produk, butang WhatsApp dan chatbot semua ikut data yang sama.

## Deploy
### A) Paling cepat (tanpa GitHub)
1. Pergi ke https://app.netlify.com/drop
2. Seret **folder ini** ke halaman itu. Siap, dapat link `.netlify.app`.

### B) Melalui GitHub + Netlify (auto-update setiap kali push)
```
git init
git add .
git commit -m "Lazic website"
git branch -M main
git remote add origin https://github.com/USERNAME/lazic-website.git
git push -u origin main
```
Kemudian di Netlify: Add new site > Import an existing project > pilih repo.
Build command: **kosongkan**. Publish directory: **.** (titik).

## Selepas update
```
git add .
git commit -m "kemas kini"
git push
```
Netlify akan deploy semula sendiri.

## Buang badge "Powered by Netlify"
Netlify: Project configuration > General > Powered by Netlify badge > matikan.
