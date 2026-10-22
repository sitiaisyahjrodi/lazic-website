var IMG={"i1":"assets/images/dinara-bahan.webp","i2":"assets/images/fomom-bahan.webp","i3":"assets/images/fonose-bahan.webp","i4":"assets/images/legaplus-bahan.webp","i5":"assets/images/daun-latar.webp","i6":"assets/images/hero.webp","i8":"assets/images/dinara-podium.webp","i9":"assets/images/dinara-botol.webp","i10":"assets/images/dinara-buah.webp","i11":"assets/images/fomom-podium.webp","i12":"assets/images/fomom-pek.webp","i13":"assets/images/fomom-botol.webp","i14":"assets/images/fonose-podium.webp","i15":"assets/images/fonose-botol.webp","lp1":"assets/images/legaplus-podium.webp","lp2":"assets/images/legaplus-pek-putih.webp","i19":"assets/images/dinara-botol-putih.webp","i20":"assets/images/semua-produk.webp","mono":"assets/images/logo-lazic.webp","b1":"assets/images/lencana-1.webp","b2":"assets/images/lencana-2.webp","b3":"assets/images/lencana-3.webp","b4":"assets/images/lencana-4.webp","av":"assets/images/aisya-cs.webp"};
var WA="60163030060",MAIL="lazicgroup.enquiry@gmail.com",ADDR="39, Jalan Eco 1, Hang Tuah Jaya, 75450 Ayer Keroh, Malacca"; /* ADDR: isi alamat pejabat */
function wa(t){return"https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
var WH=["i9","i12","i13","i15","lp2","i19"];
function im(k){return'<img class="'+(WH.indexOf(k)>-1?"wh":"")+'" src="'+IMG[k]+'" alt="" loading="lazy">'}
function imw(k){return'<div class="pimg'+(WH.indexOf(k)>-1?" wh":"")+'"><img src="'+IMG[k]+'" alt="" loading="lazy"></div>'}
var PAY="Bayar bila barang sampai (COD) atau online (FPX). Penghantaran 1–5 hari bekerja, biasanya 1–3 hari. Pesanan disahkan melalui WhatsApp.";
var TR="Halal JAKIM, kilang bertaraf GMP Malaysia dan diuji di makmal (Lab Tested).";
var FQ=[["Bagaimana cara membuat pesanan?","Pilih produk dan pakej, kemudian tekan Beli Sekarang. WhatsApp akan terbuka dengan mesej pesanan siap ditulis."],["Apakah kaedah pembayaran?","COD (bayar bila barang sampai), pembayaran online FPX, kad debit/kredit atau e-wallet. Pesanan disahkan melalui WhatsApp."],["Berapa lama penghantaran?","1–5 hari bekerja bergantung lokasi, biasanya 1–3 hari dah sampai."],["Adakah produk Lazic halal?","Ya, disahkan halal JAKIM, dihasilkan di kilang bertaraf GMP Malaysia dan diuji di makmal."],["Boleh ambil bersama ubat hospital?","Jarakkan 2 jam dengan pengambilan ubat atau produk lain. Sila rujuk doktor jika ragu-ragu."],["Boleh pulangkan atau batalkan pesanan?","Ada 7 Days Free Return dengan kos pemulangan ditanggung HQ. Pesanan juga boleh dibatalkan semasa penghantaran."]];
var FB=["Membantu mencairkan lendir pekat|Lendir dalam sinus senang keluar dan tak tersumbat.","Membantu mengurangkan keradangan|Kecutkan bengkak pada dinding saluran pernafasan.","Mengurangkan simptom alahan|Bersin dan gatal lebih terkawal.","Membantu menguatkan sistem imun pernafasan|Bantu badan lebih bersedia hadapi habuk dan cuaca.","Pernafasan lebih lapang dan lancar|Bangun pagi, masuk aircond, tidur malam: lebih selesa."];
var FH=[["Dos","1 biji sehari"],["Waktu","30 minit sebelum makan atau 2 jam selepas makan malam"],["Ubat lain","Jarakkan 2 jam dengan ubat atau produk lain"],["Umur","3 tahun ke atas (bawah 16 tahun: sekali sehari dengan pantauan)"]];
var P={
dinara:{n:"Dinara",s:"Temulawak Plus Liquid",t:"Jus herba temulawak untuk membantu mengekalkan paras kolesterol sihat.",img:"i8",g:["i8","i10","i9","i19"],im:["i10","i1","i19","i8"],
 sh:"Jus herba tradisional daripada temulawak, halia bara, kunyit, madu, delima, lemon dan bawang putih untuk membantu mengekalkan paras kolesterol sihat.",
 hl:[["leaf","Herba Semula Jadi"],["heart","Bantu Kolesterol Sihat"],["shield","Lulus KKM"],["bolt","1 Botol Cukup Sebulan"]],
 about:"Dinara ialah jus herba tradisional bahan semula jadi yang diformulasi untuk membantu mengekalkan paras kolesterol sihat dan menyokong kesejahteraan badan. Sebotol 500 ml cukup untuk kira-kira sebulan.",
 ck:["Lulus KKM, No. MAL2216185TC","Dijamin halal","100% herba semula jadi","7 Days Free Return"],
 ben:["Membantu paras kolesterol sihat|Sokong badan kekalkan kolesterol pada tahap normal.","Membantu melegakan kebas dan lenguh|Bantu rasa kebas dan tengkuk lenguh berkurang.","Membantu melegakan sakit sendi|Sokongan harian untuk pergerakan lebih selesa.","Menyokong peredaran darah|Halia dan bawang putih menyokong aliran darah.","Pernafasan dan dada lebih selesa|Bantu badan rasa lebih ringan dan lega."],
 hw:[["Dos","2 sudu sehari"],["Waktu","30 minit sebelum makan dan 2 jam selepas makan malam"],["Ubat lain","Jarakkan 2 jam dengan ubat atau produk lain"],["Umur","12 tahun dan ke atas"]],
 nt:"Tidak sesuai untuk ibu mengandung, bayi jaundice (jika menyusu ibu), pesakit hati dan buah pinggang rosak.",
 pk:[["1 botol (500 ml)",90,""],["2 botol (500 ml)",150,"Free Neck Massager"],["3 botol (500 ml)",220,"Free Neck Massager + Mini Dinara 250 ml"]],
 fq:[["Sebotol tahan berapa lama?","Sebotol 500 ml cukup untuk kegunaan kira-kira sebulan."],["Apa bahan dalam Dinara?","Temulawak, halia bara, kunyit, madu, delima, lemon dan bawang putih."],["Siapa yang tidak sesuai?","Ibu mengandung, bayi jaundice (jika menyusu ibu), pesakit hati dan buah pinggang rosak."],["Berapa hari baru nampak kesan?","Mengikut tahap kesihatan masing-masing. Yang paling cepat, seawal 7 hari."],["Bagaimana bayaran dan penghantaran?",PAY]]},
fomom:{n:"Fomom",s:"Milk Booster",t:"Tablet kemam dengan ekstrak halba untuk menyokong penghasilan susu ibu.",img:"i11",g:["i11","i12","i13"],im:["i11","i2","i13","i12"],
 sh:"Chewable tablet milk booster dengan ekstrak halba asli untuk menyokong penghasilan susu ibu. Kemam sahaja macam gula-gula.",
 hl:[["heart","Sokong Susu Ibu"],["leaf","Ekstrak Halba"],["shield","Disahkan KKM"],["bolt","Kemam, Tak Perlu Telan"]],
 about:"Fomom Milk Booster ialah tablet kemam (30 g) dirumus dengan ekstrak halba asli, herba yang dikenali untuk menyokong penghasilan susu ibu. Sesuai untuk ibu yang menyusu dan mengepam.",
 ck:["Ekstrak halba asli","Disahkan KKM","Kemam sahaja, tak perlu telan","Jaminan wang dikembalikan"],
 ben:["Menyokong penghasilan susu|Bantu galakkan pengeluaran susu ibu.","Membantu menambah jumlah susu|Sokong hasil mengepam yang lebih baik.","Membantu meningkatkan kualiti susu|Sokong kesihatan ibu dan anak.","Memudahkan proses mengepam|Bantu susu lebih mudah keluar.","Melengkapkan keperluan nutrien|Sokongan magnesium dan vitamin untuk ibu dan anak."],
 hw:[["Dos","1 biji pagi dan 1 biji malam"],["Cara","Kemam macam gula-gula, tak perlu telan"],["Kesan","Perubahan dirasa seawal 14 hari"],["Umur","12 tahun ke atas"]],
 nt:"Tidak sesuai untuk ibu mengandung. Berhenti jika bayi kuning (jaundice) dan menyusu ibu. Rujuk doktor jika ada keadaan kesihatan tertentu.",
 pk:[["1 botol",75,""],["3 botol (beli 2 free 1)",150,"Pakej jimat, free 1 botol"]],
 fq:[["Apa bahan utama Fomom?","Ekstrak halba asli, herba tradisional yang dikenali untuk menyokong penghasilan susu ibu."],["Bagaimana cara ambil?","Kemam 1 biji waktu pagi dan 1 biji waktu malam."],["Siapa yang tidak sesuai?","Ibu mengandung, dan berhenti jika bayi kuning (jaundice) dan menyusu ibu."],["Berapa hari baru nampak kesan?","Perubahan boleh dirasa seawal 14 hari penggunaan, mengikut individu."],["Bagaimana bayaran dan penghantaran?",PAY+" Penghantaran percuma seluruh Malaysia."]]},
fonose:{n:"Fonose",s:"Lega Resdung & Pernafasan Lancar",t:"Tablet kemam perisa oren, 1 biji sehari untuk pernafasan lega.",img:"i14",g:["i14","i15"],im:["i14","i3","i15","i4"],
 sh:"Tablet kemam perisa oren dengan Cendawan Susu Harimau, NAC dan PureWay-C untuk menyokong pernafasan lega dan mengurangkan gangguan resdung.",
 hl:[["leaf","Kemam Rasa Oren"],["shield","Disemak KKM"],["heart","1 Biji Sehari"],["bolt","Sesuai 3 Tahun Ke Atas"]],
 about:"Fonose ialah tablet kemam perisa oren, 30 tablet sebotol (cukup sebulan). Formulanya menggabungkan Cendawan Susu Harimau, NAC dan PureWay-C untuk membantu mencairkan lendir pekat, mengurangkan keradangan dan mengawal simptom alahan.",
 ck:["Disemak KKM, mematuhi Peraturan Makanan 1985","Halal JAKIM","Kilang GMP dan diuji makmal","Jaminan wang dikembalikan"],
 ben:FB,hw:FH,nt:"Fonose bukan ubat asma. Jika anda ada asma, teruskan rawatan dan inhaler seperti diarahkan doktor.",
 pk:[["1 botol (30 tablet)",90,""],["2 botol",150,"Free 1 Neck Massager"],["3 botol",220,"Free 1 Neck Massager"]],
 fq:[["Apa bahan dalam Fonose?","Serbuk oren, Cendawan Susu Harimau, NAC, Vitamin PureWay-C, magnesium, multivitamin dan multimineral, serta sucralose."],["Bagaimana cara makan?","1 biji sehari, 30 minit sebelum makan atau 2 jam selepas makan malam. Jarakkan 2 jam jika ambil ubat lain."],["Mula umur berapa boleh amalkan?","3 tahun dan ke atas. Bawah 16 tahun digalakkan sekali sehari sahaja dahulu."],["Berapa hari baru nampak kesan?","Mengikut tahap kesihatan masing-masing. Yang paling cepat, seawal 7 hari."],["Bagaimana bayaran dan penghantaran?",PAY+" Penghantaran percuma."]]},
legaplus:{n:"Lega+",s:"Makanan Tambahan",t:"Makanan tambahan perisa peppermint untuk kesegaran nafas dan pernafasan selesa.",img:"lp1",g:["lp1","lp2"],im:["lp1","i4","lp2","i3"],
 sh:"Makanan tambahan perisa Persia peppermint untuk menyokong kesegaran nafas dan keselesaan pernafasan setiap hari.",
 hl:[["leaf","Perisa Peppermint"],["heart","30 Tablet"],["shield","Halal JAKIM"],["bolt","Nafas Lebih Segar"]],
 about:"Lega+ ialah makanan tambahan perisa Persia peppermint (30 tablet, 500 mg setiap tablet) untuk menyokong kesegaran nafas dan keselesaan pernafasan setiap hari.",
 ck:["Halal JAKIM","Kilang bertaraf GMP","Diuji di makmal","COD dan FPX tersedia"],
 ben:FB,hw:FH,nt:"Sila baca label produk. Jika ada ubat atau keadaan kesihatan tertentu, rujuk doktor atau ahli farmasi.",
 pk:[["1 pek",50,""],["2 pek",100,""],["3 pek",150,""],["4 pek + Free 1 pek",250,"Beli 4 free 1"]],
 fq:[["Bagaimana cara ambil Lega+?","1 biji sehari, 30 minit sebelum makan atau 2 jam selepas makan malam."],["Mula umur berapa boleh amalkan?","3 tahun dan ke atas. Bawah 16 tahun sekali sehari dengan pantauan."],["Boleh ambil bersama ubat lain?","Jarakkan 2 jam dengan ubat atau produk lain. Rujuk doktor jika ragu-ragu."],["Berapa banyak tablet dalam satu pek?","Setiap pek mengandungi 30 tablet, 500 mg setiap tablet."],["Bagaimana bayaran dan penghantaran?",PAY]]}};
var K=Object.keys(P);
function rm(v){return"RM"+v}
function ic(n){return'<svg class="i"><use href="#'+n+'"/></svg>'}
function from(p){return"Mula "+rm(p.pk[0][1])}
function bind(){document.querySelectorAll("[data-i]").forEach(function(e){e.src=IMG[e.dataset.i]});document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa("Hi Lazic Group, saya berminat dengan produk anda.")});document.getElementById("hbg").style.backgroundImage="url("+IMG.i6+")";[".band",".fz"].forEach(function(s){document.querySelector(s).style.backgroundImage="url("+IMG.i5+")"});
 var ad=document.getElementById("addr");if(ADDR)ad.textContent=ADDR;else ad.remove()}
document.getElementById("pg").innerHTML=K.map(function(k){var p=P[k];return'<article class="pc"><div class="im"><img src="'+IMG[p.img]+'" alt="'+p.n+'" loading="lazy"></div><h3>'+p.n+'</h3><div class="s">'+p.s+'</div><p class="t">'+p.t+'</p><div class="pr">'+from(p)+'</div><a class="btn dk sm" href="#/p/'+k+'">Lihat Produk '+ic("arr")+'</a></article>'}).join("");
document.getElementById("fq").innerHTML=FQ.map(function(f){return"<details><summary>"+f[0]+"</summary><p>"+f[1]+"</p></details>"}).join("");
var cur,sel=0,tab="ab";
function order(p,i){var k=p.pk[i];return wa("Hi Lazic Group, saya nak order "+p.n+" - "+k[0]+(k[2]?" ("+k[2]+")":"")+" - "+rm(k[1])+".")}
function panel(p){var T=document.getElementById("pn"),h;
 if(tab=="ab")h='<div><h3>Tentang '+p.n+'</h3><p>'+p.about+'</p><ul class="ck">'+p.ck.map(function(c){return"<li>"+ic("ck")+"<span>"+c+"</span></li>"}).join("")+"</ul></div>"+im(p.im[0]);
 else if(tab=="bn")h='<div><h3>Manfaat '+p.n+'</h3><ul class="ck">'+p.ben.map(function(b){var x=b.split("|");return"<li>"+ic("ck")+"<span>"+x[0]+'<br><small style="color:var(--mute)">'+x[1]+"</small></span></li>"}).join("")+"</ul></div>"+im(p.im[1]);
 else if(tab=="hw")h='<div><h3>Cara Pengambilan</h3><div class="st4">'+p.hw.map(function(c){return"<div><b>"+c[0]+"</b>"+c[1]+"</div>"}).join("")+'</div><p class="nt">'+p.nt+"</p></div>"+imw(p.im[2]);
 else h='<div><h3>Soalan Lazim</h3>'+p.fq.map(function(f){return"<details><summary>"+f[0]+"</summary><p>"+f[1]+"</p></details>"}).join("")+"</div>"+imw(p.im[3]);
 T.className=(tab=="hw"||tab=="fq")?"pn dk":"pn";T.innerHTML=h}
var TB=[["ab","Penerangan"],["bn","Manfaat"],["hw","Cara Pengambilan"],["fq","Soalan Lazim"]];
function price(p){var b=document.getElementById("bar"),k=p.pk[sel],u=order(p,sel);document.getElementById("ob").href=u;b.innerHTML='<div><b>'+rm(k[1])+'</b><small>'+k[0]+'</small></div><a class="btn" href="'+u+'" target="_blank" rel="noopener">Beli Sekarang</a>'}
function detail(id){var p=P[id];cur=p;sel=0;tab="ab";var dv=document.getElementById("dv");
 dv.innerHTML='<div class="crumb"><a href="#/">Utama</a> / <a href="#produk">Produk</a> / '+p.n+'</div><div class="dg"><div class="gal"><div class="m"><img id="mi" src="'+IMG[p.g[0]]+'" alt="'+p.n+'"></div><div class="th">'+p.g.map(function(g,i){return'<button data-g="'+g+'" aria-current="'+(i==0)+'" aria-label="Gambar '+(i+1)+'"><img src="'+IMG[g]+'" alt=""></button>'}).join("")+'</div></div><div class="dn"><p class="kick">'+p.n+'</p><h1>'+p.n+'</h1><div class="st">'+p.s+'</div><p class="sh">'+p.sh+'</p><div class="hl">'+p.hl.map(function(h){return'<div><span class="ic">'+ic(h[0])+"</span>"+h[1]+"</div>"}).join("")+'</div><div class="pk" role="radiogroup" aria-label="Pilih pakej">'+p.pk.map(function(k,i){return'<label><input type="radio" name="pk" value="'+i+'"'+(i?"":" checked")+'><span><b>'+k[0]+'</b>'+(k[2]?'<span class="tg2">'+k[2]+"</span>":"<small>COD / FPX</small>")+'</span><span class="pp">'+rm(k[1])+"</span></label>"}).join("")+'</div><div class="buy"><a class="btn" id="ob" href="#" target="_blank" rel="noopener">'+ic("cart")+' Beli Sekarang</a></div><div class="mini"><span>'+ic("ck")+"Halal JAKIM</span><span>"+ic("ck")+"GMP</span><span>"+ic("ck")+"Lab Tested</span><span>"+ic("ck")+"100% Semula Jadi</span></div></div></div>"+
 '<div class="tabs" role="tablist">'+TB.map(function(t,i){return'<button role="tab" data-t="'+t[0]+'" aria-selected="'+(i==0)+'">'+t[1]+"</button>"}).join("")+'</div><div class="pn" id="pn" role="tabpanel"></div><div style="height:64px"></div>';
 panel(p);price(p);
 dv.querySelector(".th").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var mi=document.getElementById("mi");mi.src=IMG[b.dataset.g];mi.classList.remove("sw");void mi.offsetWidth;mi.classList.add("sw");this.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-current",x==b)})});
 dv.querySelectorAll(".pk input").forEach(function(r){r.onchange=function(){sel=+r.value;price(p)}});
 dv.querySelector(".tabs").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;tab=b.dataset.t;this.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-selected",x==b)});panel(p)})}
function route(){var h=location.hash,m=h.match(/^#\/p\/(\w+)/);document.getElementById("lk").classList.remove("o");
 if(m&&P[m[1]]){document.body.classList.add("dt");detail(m[1]);window.scrollTo(0,0);document.title=P[m[1]].n+" | Lazic Group"}
 else{document.body.classList.remove("dt");document.title="Lazic Group | Formula Tradisional Untuk Kesihatan & Vitaliti";var e=h.length>2&&h.charAt(1)!="/"&&document.querySelector(h);if(e)setTimeout(function(){e.scrollIntoView()},30);else if(!h||h=="#/")window.scrollTo(0,0)}}
addEventListener("hashchange",route);
document.getElementById("mb").onclick=function(){var o=document.getElementById("lk").classList.toggle("o");this.setAttribute("aria-expanded",o)};
function rv(){var els=document.querySelectorAll(".pc,.tc,.band .w>*,.fz .w>*,.cta .w>*,#jaminan h2,#jaminan .sub");els.forEach(function(e,i){e.classList.add("rv");e.style.setProperty("--d",(i%4)*.1+"s")});
 if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
 var o=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");o.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){o.observe(e)})}
/* chat */
var chat=document.getElementById("chat"),log=document.getElementById("log"),last=null;
function add(t,c){var m=document.createElement("div");m.className="m "+c;m.textContent=t;log.appendChild(m);log.scrollTop=log.scrollHeight;return m}
function acts(a){if(!a||!a.length)return;var d=document.createElement("div");d.className="ac";d.innerHTML=a.map(function(x){return'<a href="'+x[1]+'"'+(x[2]?' class="wa" target="_blank" rel="noopener"':"")+">"+x[0]+"</a>"}).join("");d.onclick=function(e){if(e.target.closest("a")&&!e.target.closest(".wa"))chat.classList.remove("o")};log.appendChild(d);log.scrollTop=log.scrollHeight}
function find(m){for(var k in P){if(m.indexOf(P[k].n.toLowerCase().replace("+",""))>-1)return k}if(/lega/.test(m))return"legaplus";return null}
function list(p){return p.pk.map(function(k){return"• "+k[0]+": "+rm(k[1])+(k[2]?" ("+k[2]+")":"")}).join("\n")}
function faqm(m,p){var w=m.split(/\W+/).filter(function(x){return x.length>3}),pool=p?p.fq:FQ.concat(K.reduce(function(a,k){return a.concat(P[k].fq)},[])),best=null,bs=0;pool.forEach(function(f){var q=(f[0]+" "+f[1]).toLowerCase(),s=0;w.forEach(function(x){if(q.indexOf(x)>-1)s++});if(s>bs){bs=s;best=f}});return bs>=2?best:null}
function card(p,l){var c=p.hw.filter(function(x){return x[0]==l})[0];return c?c[1]:null}
function ans(s){var m=s.toLowerCase(),fk=find(m),k=fk||(/\b(itu|tu|ni|nya|dia)\b/.test(m)?last:null),p=k&&P[k];if(fk)last=fk;var W=["Hubungi di WhatsApp",wa("Hi Lazic Group, saya ada soalan."),1];
 if(/^(hai|hi|hello|salam|assalam)/.test(m))return["Hai! Saya boleh bantu tentang Dinara, Fomom, Fonose dan Lega+. Apa yang anda nak tahu?"];
 if(/(terima kasih|thank|tq\b|tengkiu)/.test(m)||/^(ok|okay|okey|oke|baik|noted|alright)\b/.test(m))return["Okay, terima kasih kerana menggunakan saya. Jika ada pertanyaan, boleh terus WhatsApp kami. Selamat membeli!",[W]];
 if(/alamat|email|emel|hubungi|nombor|telefon|customer|cs\b/.test(m))return["WhatsApp: +60 16-303 0060\nEmel: "+MAIL+(ADDR?"\nAlamat: "+ADDR:""),[W,["Hantar emel","mailto:"+MAIL]]];
 if(/promo|diskaun|free|percuma|hadiah|offer|live/.test(m)){var g=(p?[k]:K).map(function(x){return P[x].pk.filter(function(y){return y[2]}).map(function(y){return"• "+P[x].n+" "+y[0]+": "+y[2]+" ("+rm(y[1])+")"}).join("\n")}).filter(Boolean).join("\n");return["Promo ikut pakej:\n"+g+"\nUntuk promo live terkini, sila tanya kami di WhatsApp.",[W]]}
 if(/pulang|refund|return|batal/.test(m))return[FQ[5][1],[W]];
 if(/order|beli|bayar|fpx|cod|hantar|pos\b|sampai|postage/.test(m)){var A=p?[["Order "+p.n,order(p,0),1]]:[["Lihat produk","#produk"]];return["Pilih pakej pada halaman produk, kemudian tekan Beli Sekarang. "+PAY,A]}
 if(/harga|pakej|package|berapa|price|murah/.test(m)&&!/hari|lama|tablet/.test(m)){if(!p)return["Harga bermula: Dinara "+rm(90)+", Fomom "+rm(75)+", Fonose "+rm(90)+", Lega+ "+rm(50)+". Produk mana yang anda nak tahu?"];return["Pakej "+p.n+":\n"+list(p),[["Order "+p.n,order(p,0),1],["Lihat "+p.n,"#/p/"+k]]]}
 if(/umur|kanak|anak|budak|tahun/.test(m))return[p?p.n+": "+card(p,"Umur"):"Dinara dan Fomom 12 tahun ke atas. Fonose dan Lega+ 3 tahun ke atas.",[W]];
 if(/ubat|hospital|doktor/.test(m))return[(p&&card(p,"Ubat lain")?p.n+": "+card(p,"Ubat lain")+".":"Jarakkan 2 jam dengan ubat lain.")+" Jika ragu-ragu, sila rujuk doktor atau ahli farmasi.",[W]];
 if(/cara|ambil|makan|minum|guna|dos|sudu|biji/.test(m)){if(!p)return["Produk mana? Dinara, Fomom, Fonose atau Lega+?"];return[p.n+":\n"+p.hw.map(function(c){return"• "+c[0]+": "+c[1]}).join("\n")+"\n"+p.nt,[["Lihat "+p.n,"#/p/"+k]]]}
 if(/halal|sijil|gmp|kkm|lab|jakim|kilang/.test(m))return[(p?p.ck.join("\n• ").replace(/^/,"• "):TR),[["Lihat jaminan","#jaminan"]]];
 if(/kelebihan|manfaat|benefit|bantu|fungsi|khasiat|untuk apa/.test(m)){if(!p)return["Produk mana? Dinara, Fomom, Fonose atau Lega+?"];return[p.n+":\n"+p.ben.map(function(b){return"• "+b.split("|")[0]}).join("\n"),[["Lihat "+p.n,"#/p/"+k]]]}
 var f=faqm(m,p);if(f)return[f[1],p?[["Lihat "+p.n,"#/p/"+k]]:[]];
 if(p)return[p.n+" ("+p.s+"): "+p.t+" "+from(p)+".",[["Lihat "+p.n,"#/p/"+k],["Order",order(p,0),1]]];
 return["Maaf, saya belum pasti tentang itu. Anda boleh tanya harga, promo, cara ambil, manfaat atau halal. Untuk soalan lain, hubungi kami terus.",[W]]}
function send(s){add(s,"u");var ty=add("","b ty");ty.innerHTML="<span></span><span></span><span></span>";setTimeout(function(){var r=ans(s);ty.className="m b";ty.textContent=r[0];acts(r[1]);log.scrollTop=log.scrollHeight},500)}
add("Hai! Saya Aisya, customer service Lazic. Awak boleh tanya tentang harga, pakej, promo, cara ambil, manfaat dan halal.","b");
document.getElementById("ch").innerHTML=["Harga Dinara","Ada promo tak?","Cara ambil Fonose","Cara order?"].map(function(t){return"<button>"+t+"</button>"}).join("");
document.getElementById("ch").onclick=function(e){if(e.target.tagName=="BUTTON")send(e.target.textContent)};
document.getElementById("f").onsubmit=function(e){e.preventDefault();var q=document.getElementById("q"),t=q.value.trim();if(t){send(t);q.value=""}};
function tg(o){chat.classList.toggle("o",o);document.getElementById("fab").setAttribute("aria-expanded",chat.classList.contains("o"));if(chat.classList.contains("o"))document.getElementById("q").focus()}
document.getElementById("fab").onclick=function(){tg()};document.getElementById("x").onclick=function(){tg(false)};
document.querySelectorAll("[data-ask]").forEach(function(b){b.onclick=function(){tg(true)}});
function fx(){[[".band .w>div:first-child","l"],[".band ul","r"],[".fz .w>div:first-child","l"],["#fq","r"],[".cta .w>div","l"],[".cta img","r"],[".tc","z"],[".pc","z"]].forEach(function(x){document.querySelectorAll(x[0]).forEach(function(e){e.classList.add(x[1])})});
 var nav=document.querySelector("nav"),hp=document.getElementById("hpar"),still=matchMedia("(prefers-reduced-motion: reduce)").matches;
 function sc(){var y=window.scrollY;nav.classList.toggle("sc",y>20);if(!still&&y<900)hp.style.transform="translate3d(0,"+(y*.22)+"px,0)"}
 addEventListener("scroll",sc,{passive:true});sc()}
bind();route();rv();fx();
