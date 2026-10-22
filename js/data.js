/* ===== DATA PRODUK =====
   Edit fail ini untuk tukar harga (pk), pakej, manfaat (ben), cara ambil (hw), soalan lazim (fq).
   Harga di kad produk, halaman produk, butang WhatsApp dan chatbot semua ikut data ini.
   Format pakej: ["nama pakej", harga, "hadiah / promo (kosongkan jika tiada)"]
*/
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
