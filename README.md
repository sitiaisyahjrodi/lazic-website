# Lazic Group - Website

Website statik (HTML + CSS + JS biasa). Tak perlu install apa-apa untuk jalankan.

## Struktur
```
index.html          halaman utama + halaman produk (guna #/p/dinara dsb)
css/style.css       semua rekaan dan animasi
js/app.js           data produk, harga, pakej, chatbot Aisya
assets/images/      semua gambar
```

## Jalankan di komputer (VS Code / Antigravity)
1. Buka folder ini: File > Open Folder.
2. Pasang extension **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` > **Open with Live Server**.

Alternatif: dwiklik `index.html` terus, atau `npx serve` dalam terminal.

## Apa yang awak perlu edit (semua dalam js/app.js, bahagian atas)
- `WA` : nombor WhatsApp (format 60xxxxxxxxx)
- `MAIL` : emel
- `ADDR` : alamat pejabat (kosong = tak dipaparkan)
- `P` : data produk (harga `pk`, manfaat `ben`, cara ambil `hw`, soalan lazim `fq`)
- `FQ` : soalan lazim umum di homepage

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
