var IMG={"i1":"assets/images/dinara-bahan.webp","i2":"assets/images/fomom-bahan.webp","i3":"assets/images/fonose-bahan.webp","i4":"assets/images/legaplus-bahan.webp","i5":"assets/images/daun-latar.webp","i6":"assets/images/hero.webp","i8":"assets/images/dinara-podium.webp","i9":"assets/images/dinara-botol.webp","i10":"assets/images/dinara-buah.webp","i11":"assets/images/fomom-podium.webp","i12":"assets/images/fomom-pek.webp","i13":"assets/images/fomom-botol.webp","i14":"assets/images/fonose-podium.webp","i15":"assets/images/fonose-botol.webp","lp1":"assets/images/legaplus-podium.webp","lp2":"assets/images/legaplus-pek-putih.webp","i19":"assets/images/dinara-botol-putih.webp","i20":"assets/images/semua-produk.webp","mono":"assets/images/logo-lazic.webp","b1":"assets/images/lencana-1.webp","b2":"assets/images/lencana-2.webp","b3":"assets/images/lencana-3.webp","b4":"assets/images/lencana-4.webp","av":"assets/images/aisya-cs.webp"};
function wa(t){return"https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
var WH=["i9","i12","i13","i15","lp2","i19"];
function im(k){return'<img class="'+(WH.indexOf(k)>-1?"wh":"")+'" src="'+IMG[k]+'" alt="" loading="lazy">'}
function imw(k){return'<div class="pimg'+(WH.indexOf(k)>-1?" wh":"")+'"><img src="'+IMG[k]+'" alt="" loading="lazy"></div>'}
var K=Object.keys(P);
function rm(v){return"RM"+v}
function ic(n){return'<svg class="i"><use href="#'+n+'"/></svg>'}
function from(p){return"Mula "+rm(p.pk[0][1])}
function bind(){document.querySelectorAll("[data-wa-text]").forEach(function(a){a.textContent="WhatsApp: "+WA_PAPAR});document.querySelectorAll("[data-i]").forEach(function(e){e.src=IMG[e.dataset.i]});document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa("Hi Lazic Group, saya berminat dengan produk anda.")});document.getElementById("hbg").style.backgroundImage="url("+IMG.i6+")";[".band",".fz"].forEach(function(s){document.querySelector(s).style.backgroundImage="url("+IMG.i5+")"});
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
 if(/alamat|email|emel|hubungi|nombor|telefon|customer|cs\b/.test(m))return["WhatsApp: "+WA_PAPAR+"\nEmel: "+MAIL+(ADDR?"\nAlamat: "+ADDR:""),[W,["Hantar emel","mailto:"+MAIL]]];
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
document.getElementById("x").onclick=function(){tg(false)};
document.querySelectorAll("[data-ask]").forEach(function(b){b.onclick=function(){tg(true)}});
function fx(){[[".band .w>div:first-child","l"],[".band ul","r"],[".fz .w>div:first-child","l"],["#fq","r"],[".cta .w>div","l"],[".cta img","r"],[".tc","z"],[".pc","z"]].forEach(function(x){document.querySelectorAll(x[0]).forEach(function(e){e.classList.add(x[1])})});
 var nav=document.querySelector("nav"),hp=document.getElementById("hpar"),still=matchMedia("(prefers-reduced-motion: reduce)").matches;
 function sc(){var y=window.scrollY;nav.classList.toggle("sc",y>20);if(!still&&y<900)hp.style.transform="translate3d(0,"+(y*.22)+"px,0)"}
 addEventListener("scroll",sc,{passive:true});sc()}
var fab=document.getElementById("fab");
function setp(el,x,y){el.style.left=Math.min(Math.max(0,x),innerWidth-el.offsetWidth)+"px";el.style.top=Math.min(Math.max(0,y),innerHeight-el.offsetHeight)+"px";el.style.right="auto";el.style.bottom="auto"}
function place(){if(!fab.dataset.mv||chat.dataset.mv)return;var f=fab.getBoundingClientRect(),w=chat.offsetWidth,h=chat.offsetHeight,y=f.top-h-12;if(y<8)y=f.bottom+12;setp(chat,f.right-w,y)}
function tg(o){chat.classList.toggle("o",o);var op=chat.classList.contains("o");fab.setAttribute("aria-expanded",op);if(op){place();document.getElementById("q").focus()}}
function drag(el,h){var s=null;
 h.addEventListener("pointerdown",function(e){if(e.target.closest("#x")||(e.button&&e.button!==0))return;var r=el.getBoundingClientRect();s={x:e.clientX,y:e.clientY,l:r.left,t:r.top,m:false};el._dm=0;try{h.setPointerCapture(e.pointerId)}catch(_){}});
 h.addEventListener("pointermove",function(e){if(!s)return;var dx=e.clientX-s.x,dy=e.clientY-s.y;if(!s.m&&Math.abs(dx)+Math.abs(dy)<6)return;s.m=true;el._dm=1;el.dataset.mv=1;setp(el,s.l+dx,s.t+dy)});
 h.addEventListener("pointerup",function(){s=null});h.addEventListener("pointercancel",function(){s=null})}
drag(fab,fab);drag(chat,chat.querySelector("header"));
fab.onclick=function(){if(fab._dm){fab._dm=0;return}tg()};
addEventListener("resize",function(){[fab,chat].forEach(function(el){if(el.style.left){var r=el.getBoundingClientRect();setp(el,r.left,r.top)}})});
bind();route();rv();fx();
