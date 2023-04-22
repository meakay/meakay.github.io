const sorular = [
    {
      soru: "Van Gogh Tutuklular Çemberi Resmi'ni neyden önce veya sonra çizmiştir?",
      a: "İntihar",
      b: "Cinayet",
      c: "Başarısız İntihar Girişimi",
      d: "Evlenme", 
      answer: "a",
    },
    {
      soru: "İnsan vücudunda su dengesi, vücut sıcaklığı ve hormonların salgılanması olaylarını kotnrol eden merkez aşağıdakilerden hangisidir?",
      a: "Talamus",
      b: "Omurilik",
      c: "Hipotalamus",
      d: "Omurilik Soğanı", 
      answer: "c",
    },
    {
      soru: "Hormonlar ile ilgili hangisi yanlıştır?",
      a: "Hedef organlara kan yoluyla taşınır.",
      b: "Büyüme ve gelişmede rol oynar.",
      c: "Homeostoziyi korur",
      d: "Üretimleri ergenlik dönemi ile başlar.", 
      answer: "d",
    },
    {
      soru: "DNA'yı X-ışınları ile görüntülemeyi başaran kadın bilim insanı kimdir?",
      a: "Rosalind Franklin",
      b: "Marie Curie",
      c: "Elizabeth Blackburn",
      d: "Lise Meitner", 
      answer: "a",
    },
    {
      soru: "Türkiye şimdiye kadar kaç tane Nobel Ödülü almıştır?",
      a: "3",
      b: "5",
      c: "1",
      d: "2", 
      answer: "d",
    },
    {
      soru: "Ay'a olan uzaklığımız kaç km'dir?",
      a: "20.632",
      b: "384.112",
      c: "1.523.797",
      d: "426.348", 
      answer: "b",
    },
    {
      soru: "Mikroskop hangi yüzyılda icat edilmiştir?",
      a: "19.yy",
      b: "21.yy",
      c: "17.yy",
      d: "13.yy", 
      answer: "c",
    },
    {
      soru: "Bitki hücresi ile hayvan hücresi arasındaki farklardan birisi aşağıdakilerden hangisidir?",
      a: "Hücre Çekirdeği",
      b: "Hücre Çeperi",
      c: "Hücre Zarı",
      d: "Mitokondri", 
      answer: "b",
    },
    {
      soru: "Üst üste 4 kere mitoz bölünme geçiren bir hücre bu işlemin ardından kaç tane hücreye sahip olur?",
      a: "16",
      b: "8",
      c: "1",
      d: "32", 
      answer: "a",
    },
    {
      soru: "Aşağıdakilerden hangisi beynin bölgelerinden birisi değildir?",
      a: "Frontal Lob",
      b: "Oksipital Lob",
      c: "Temporal Lob",
      d: "Sağ lob", 
      answer: "d",
    },
    {
      soru: "Çalıkuşu romanı hangi yazara aittir?",
      a: "Reşat Nuri Güntekin",
      b: "Halit Ziya Uşaklıgil",
      c: "Şemsettin Sami",
      d: "Yakup Kadri Karaosmanoğlu", 
      answer: "a",
    },
    {
      soru: "Sagu ne demek?",
      a: "Tören",
      b: "Cennet",
      c: "Ağıt",
      d: "Töre", 
      answer: "c",
    },
    {
      soru: "Orhun anıtları aşağıdaki isimlerden hangisinin adına yazılmamıştır?",
      a: "Bilge Kağan",
      b: "Vezir Tonyukuk",
      c: "Mete Han",
      d: "Kül Tigin", 
      answer: "c",
    },
    {
      soru: "Yurtaçan Savaşı olarak bilinen savaşın adı nedir?",
      a: "Otlukbeli Savaşı",
      b: "Malazgirt Savaşı",
      c: "Ankara Savaşı",
      d: "Varna Savaşı", 
      answer: "b",
    },
    {
      soru: "Türkiye'ye çay kimin tarafından ve kimin tarafından getirilmiştir?",
      a: "Comte de Bonneval, 19.yy",
      b: "Baron de Tott, 18.yy",
      c: "İbrahim Müteferrika, Lale Devri",
      d: "Zihni Derin, Cumhuriyet", 
      answer: "d",
    },
    {
      soru: "'Toprağın bol olsun' söylemi kültürümüze hangi dönemden miras kalmıştır?",
      a: "Selçuklu Dönemi",
      b: "İslamiyet Öncesi Türk Dönemi",
      c: "Osmanlı Dönemi",
      d: "Cumhuriyet Dönemi", 
      answer: "b",
    },
    {
      soru: "F klavye kim tarafından bulunmuştur?",
      a: "Sevim Tekeli",
      b: "Cahit Arf",
      c: "İhsan Sıtkı Yener",
      d: "Fuat Sezgin", 
      answer: "c",
    },
    {
      soru: "Penisilin kim tarafından bulunmuştur?",
      a: "Alexander Fleming",
      b: "Aziz Sancar",
      c: "Rosalind Franklin",
      d: "İbn-i Sina", 
      answer: "a",
    },
    {
      soru: "Dünya'da tahmini olarak kaç kişi anime izliyordur?",
      a: "10 milyon",
      b: "640 milyon",
      c: "120 milyon",
      d: "70 milyon", 
      answer: "c",
    },
    {
      soru: "Türkiye'nin yüz ölçümü kaç kilometrekaredir?",
      a: "421.314",
      b: "783.562",
      c: "1.132.876",
      d: "145.453", 
      answer: "b",
    },
    {
      soru: "'Doğmadan Önce' parçası hangi gruba aittir?",
      a: "Duman",
      b: "Pentagram",
      c: "Model",
      d: "maNga", 
      answer: "b",
    },
  ];
alert("Bu uyarıyı kapattıktan sonra süreniz geri saymaya başlar!")
 let randomNumbers = new Set();
 while (randomNumbers.size < 6) {
     let randomNumber = Math.floor(Math.random() * sorular.length);
     randomNumbers.add(randomNumber);
 }
let click = 0;
let sure = 60;
function sureHesap() {
    sure--;
    document.querySelector("#sayac").innerHTML = sure + " s";
}
function sureDoldu(){
  document.querySelector("#time").style.display = "none";
  document.getElementById("btn-sonuc").style.display = "block";
  document.getElementById("soru-panel").style.display = "none";
  document.querySelector("#sayac").innerHTML = "0 s";
  document.getElementById("sayac").style.display = "none";
  document.querySelector(".ac").style.display = "none";
  document.querySelector("#btn-soru").style.display = "block";
  document.querySelector("#reload").style.display = "block";
  dogru = 0;
  yanlis = 0;
  if(userans[0]==undefined && userans[1] == undefined && userans[2] == undefined && userans[3] == undefined && userans[4]== undefined){
    document.querySelector("#dogru").innerHTML = "0 doğru";
    document.querySelector("#yanlis").innerHTML = "0 yanlış";  
    document.querySelector("#sorulanBaslik1").innerHTML = "Hiçbir soruyu cevaplamadınız.";
  }else{
    for (let i = 0; i<5; i++){
      if (answers[i] == userans[i]){
          dogru++;
      } else if (answers[i] != userans[i]){
          yanlis++;
      }
  }
    document.querySelector("#dogru").innerHTML = dogru + " doğru";
    document.querySelector("#yanlis").innerHTML = yanlis + " yanlış";
    document.querySelector("#sorulanBaslik1").innerHTML = sorulansorular[0];
    document.querySelector("#sorulanOpa1").innerHTML = sorulana[0];
    document.querySelector("#sorulanOpb1").innerHTML = sorulanb[0];
    document.querySelector("#sorulanOpc1").innerHTML = sorulanc[0];
    document.querySelector("#sorulanOpd1").innerHTML = soruland[0];
    document.querySelector("#dogrucevap1").innerHTML = answers[0];
    document.querySelector("#kullanicicevap1").innerHTML = userans[0];
  
    document.querySelector("#sorulanBaslik2").innerHTML = sorulansorular[1];
    document.querySelector("#sorulanOpa2").innerHTML = sorulana[1];
    document.querySelector("#sorulanOpb2").innerHTML = sorulanb[1];
    document.querySelector("#sorulanOpc2").innerHTML = sorulanc[1];
    document.querySelector("#sorulanOpd2").innerHTML = soruland[1];
    document.querySelector("#dogrucevap2").innerHTML = answers[1];
    document.querySelector("#kullanicicevap2").innerHTML = userans[1];
  
  
    document.querySelector("#sorulanBaslik3").innerHTML = sorulansorular[2];
    document.querySelector("#sorulanOpa3").innerHTML = sorulana[2];
    document.querySelector("#sorulanOpb3").innerHTML = sorulanb[2];
    document.querySelector("#sorulanOpc3").innerHTML = sorulanc[2];
    document.querySelector("#sorulanOpd3").innerHTML = soruland[2];
    document.querySelector("#dogrucevap3").innerHTML = answers[2];
    document.querySelector("#kullanicicevap3").innerHTML = userans[2];
  
  
    document.querySelector("#sorulanBaslik4").innerHTML = sorulansorular[3];
    document.querySelector("#sorulanOpa4").innerHTML = sorulana[3];
    document.querySelector("#sorulanOpb4").innerHTML = sorulanb[3];
    document.querySelector("#sorulanOpc4").innerHTML = sorulanc[3];
    document.querySelector("#sorulanOpd4").innerHTML = soruland[3];
    document.querySelector("#dogrucevap4").innerHTML = answers[3];
    document.querySelector("#kullanicicevap4").innerHTML = userans[3];
  
  
    document.querySelector("#sorulanBaslik5").innerHTML = sorulansorular[4];
    document.querySelector("#sorulanOpa5").innerHTML = sorulana[4];
    document.querySelector("#sorulanOpb5").innerHTML = sorulanb[4];
    document.querySelector("#sorulanOpc5").innerHTML = sorulanc[4];
    document.querySelector("#sorulanOpd5").innerHTML = soruland[4];
    document.querySelector("#dogrucevap5").innerHTML = answers[4];
    document.querySelector("#kullanicicevap5").innerHTML = userans[4];
  
  }
  
  if (equalTime == undefined){
    document.querySelector("#toplamSure60").style.display = "inline-block";
    document.querySelector("#toplamSure60").innerHTML = "60 saniyede bitirdin";  
  }
}
setInterval(sureHesap, 1000);
setTimeout(sureDoldu, 60000);
let answers = [];
let userans = [];
let sorulansorular = [];
let sorulana = [];
let sorulanb = [];
let sorulanc = [];
let soruland = [];
let dogru = 0;
let yanlis = 0;
let bos = 0;
let ansTimeStart;
let ansTimeEnd;
let ansTime;
let totalTime;
let lastTime;
let equalTime;
let skor = 0;
totalTime = new Date();
function sorugetir(){
    ansTimeStart = new Date();
    document.querySelector('#b').style.display = "inline-block";
    document.querySelector('#c').style.display = "inline-block";
    document.querySelector('#d').style.display = "inline-block";
    document.querySelector('#a').style.display = "inline-block";
    document.querySelector('#fakea').style.display = "none";
    document.querySelector('#fakeb').style.display = "none";
    document.querySelector('#fakec').style.display = "none";
    document.querySelector('#faked').style.display = "none";

    document.querySelector("#skorTable").innerHTML = skor.toFixed(0);
    if (click == 5){
        document.querySelector("#reload").style.display = "block";
        document.querySelector("#body").style.backgroundColor = "#D9ACF5";
        document.querySelector("#time").style.display = "none";
        document.getElementById("sayac").style.display = "none";
        document.getElementById("btn-sonuc").style.display = "block";
        document.getElementById("soru-panel").style.display = "none";
        document.querySelector(".ac").style.display = "none";
        document.querySelector("#btn-soru").style.display = "block";

        lastTime = new Date();
        equalTime = (lastTime - totalTime)/1000;
        document.querySelector("#toplamSure").innerHTML = equalTime + " saniyede bitirdin";

        for (let i = 0; i<5; i++){
            if (answers[i] == userans[i]){
                dogru++;
            } else if (answers[i] != userans[i]){
                yanlis++;
            }
        }
        document.querySelector("#dogru").innerHTML = dogru + " doğru";
        document.querySelector("#yanlis").innerHTML = yanlis + " yanlış";

        document.querySelector("#sorulanBaslik1").innerHTML = sorulansorular[0];
        document.querySelector("#sorulanOpa1").innerHTML = sorulana[0];
        document.querySelector("#sorulanOpb1").innerHTML = sorulanb[0];
        document.querySelector("#sorulanOpc1").innerHTML = sorulanc[0];
        document.querySelector("#sorulanOpd1").innerHTML = soruland[0];
        document.querySelector("#dogrucevap1").innerHTML = answers[0];
        document.querySelector("#kullanicicevap1").innerHTML = userans[0];

        document.querySelector("#sorulanBaslik2").innerHTML = sorulansorular[1];
        document.querySelector("#sorulanOpa2").innerHTML = sorulana[1];
        document.querySelector("#sorulanOpb2").innerHTML = sorulanb[1];
        document.querySelector("#sorulanOpc2").innerHTML = sorulanc[1];
        document.querySelector("#sorulanOpd2").innerHTML = soruland[1];
        document.querySelector("#dogrucevap2").innerHTML = answers[1];
        document.querySelector("#kullanicicevap2").innerHTML = userans[1];


        document.querySelector("#sorulanBaslik3").innerHTML = sorulansorular[2];
        document.querySelector("#sorulanOpa3").innerHTML = sorulana[2];
        document.querySelector("#sorulanOpb3").innerHTML = sorulanb[2];
        document.querySelector("#sorulanOpc3").innerHTML = sorulanc[2];
        document.querySelector("#sorulanOpd3").innerHTML = soruland[2];
        document.querySelector("#dogrucevap3").innerHTML = answers[2];
        document.querySelector("#kullanicicevap3").innerHTML = userans[2];


        document.querySelector("#sorulanBaslik4").innerHTML = sorulansorular[3];
        document.querySelector("#sorulanOpa4").innerHTML = sorulana[3];
        document.querySelector("#sorulanOpb4").innerHTML = sorulanb[3];
        document.querySelector("#sorulanOpc4").innerHTML = sorulanc[3];
        document.querySelector("#sorulanOpd4").innerHTML = soruland[3];
        document.querySelector("#dogrucevap4").innerHTML = answers[3];
        document.querySelector("#kullanicicevap4").innerHTML = userans[3];


        document.querySelector("#sorulanBaslik5").innerHTML = sorulansorular[4];
        document.querySelector("#sorulanOpa5").innerHTML = sorulana[4];
        document.querySelector("#sorulanOpb5").innerHTML = sorulanb[4];
        document.querySelector("#sorulanOpc5").innerHTML = sorulanc[4];
        document.querySelector("#sorulanOpd5").innerHTML = soruland[4];
        document.querySelector("#dogrucevap5").innerHTML = answers[4];
        document.querySelector("#kullanicicevap5").innerHTML = userans[4];


    }
    let cek = sorular[Array.from(randomNumbers)[click]];
    click++;
    document.getElementById("q-counter").innerHTML = click + "/5";
    document.querySelector('#bas').innerHTML = cek.soru;
    document.querySelector('#a').innerHTML = cek.a;
    document.querySelector('#b').innerHTML = cek.b;
    document.querySelector('#c').innerHTML = cek.c;
    document.querySelector('#d').innerHTML = cek.d; 
    document.querySelector('#fakea').innerHTML = cek.a;
    document.querySelector('#fakeb').innerHTML = cek.b;
    document.querySelector('#fakec').innerHTML = cek.c;
    document.querySelector('#faked').innerHTML = cek.d;
    answers.push(cek.answer);
    sorulansorular.push(cek.soru);
    sorulana.push(cek.a);
    sorulanb.push(cek.b);
    sorulanc.push(cek.c);
    soruland.push(cek.d);

}

function a(){
    ansTimeEnd = new Date();
    userans.push("a");
    document.querySelector('#b').style.display = "none";
    document.querySelector('#c').style.display = "none";
    document.querySelector('#d').style.display = "none"; 
    document.querySelector('#a').style.display = "none";
    document.querySelector("#fakea").style.display = "inline-block";
    ansTime = (ansTimeEnd - ansTimeStart)/1000;
    if (ansTime <= 5){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "green";
    } else if (ansTime >= 30){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "red";
    } else {
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "orange";
    }
    if (answers[click-1] == "a"){
      document.querySelector("#body").style.backgroundColor = "green";
      skor += 10*(60-ansTime);
      let suanskor = 0;
      suanskor += 10*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "+"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "green";
    } else {
      document.querySelector("#body").style.backgroundColor = "red";
      skor -= 15*(60-ansTime);
      let suanskor = 0;
      suanskor += 15*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "-"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "red";
    }

  }
function b(){
    ansTimeEnd = new Date();
    userans.push("b");
    document.querySelector('#a').style.display = "none";
    document.querySelector('#c').style.display = "none";
    document.querySelector('#d').style.display = "none"; 
    document.querySelector('#b').style.display = "none"; 
    document.querySelector("#fakeb").style.display = "inline-block";

    ansTime = (ansTimeEnd - ansTimeStart)/1000;
    if (ansTime <= 5){
      document.querySelector("#time").innerHTML = ansTime+ "s";
      document.getElementById("time").style.color = "green";
    } else if (ansTime >= 30){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "red";
    } else {
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "orange";
    }
    if (answers[click-1] == "b"){
      document.querySelector("#body").style.backgroundColor = "green";
      skor += 10*(60-ansTime);
      let suanskor = 0;
      suanskor += 10*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "+"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "green";
    } else {
      document.querySelector("#body").style.backgroundColor = "red";
      skor -= 15*(60-ansTime);
      let suanskor = 0;
      suanskor += 15*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "-"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "red";
    }
}
function c(){
    ansTimeEnd = new Date();
    userans.push("c");
    document.querySelector('#b').style.display = "none";
    document.querySelector('#a').style.display = "none";
    document.querySelector('#d').style.display = "none"; 
    document.querySelector('#c').style.display = "none";
    document.querySelector("#fakec").style.display = "inline-block";
    ansTime = (ansTimeEnd - ansTimeStart)/1000;
    if (ansTime <= 5){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "green";
    } else if (ansTime >= 30){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "red";
    } else {
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "orange";
    }
    if (answers[click-1] == "c"){
      document.querySelector("#body").style.backgroundColor = "green";
      skor += 10*(60-ansTime);
      let suanskor = 0;
      suanskor += 10*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "+"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "green";
    } else {
      document.querySelector("#body").style.backgroundColor = "red";
      skor -= 15*(60-ansTime);
      let suanskor = 0;
      suanskor += 15*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "-"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "red";
    }

}
function d(){
    ansTimeEnd = new Date();
    userans.push("d");
    document.querySelector('#b').style.display = "none";
    document.querySelector('#c').style.display = "none";
    document.querySelector('#a').style.display = "none"; 
    document.querySelector('#d').style.display = "none";
    document.querySelector("#faked").style.display = "inline-block";
    ansTime = (ansTimeEnd - ansTimeStart)/1000;
    if (ansTime <= 5){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "green";
    } else if (ansTime >= 30){
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "red";
    } else {
      document.querySelector("#time").innerHTML = ansTime + "s";
      document.getElementById("time").style.color = "orange";
    }
    if (answers[click-1] == "d"){
      document.querySelector("#body").style.backgroundColor = "green";
      skor += 10*(60-ansTime);
      let suanskor = 0;
      suanskor += 10*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "+"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "green";
    } else {
      document.querySelector("#body").style.backgroundColor = "red";
      skor -= 15*(60-ansTime);
      let suanskor = 0;
      suanskor += 15*(60-ansTime);
      document.querySelector("#howScore").innerHTML = "-"+suanskor.toFixed(0);
      document.querySelector("#howScore").style.color = "red";
    }

}