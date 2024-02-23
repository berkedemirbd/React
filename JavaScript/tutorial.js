var x="Berke Demir"
if(x=="Berke Demir"){
    alert("Şahıs:"+" abla sus biliyosun slay")
}

else{
    alert("Defol diye ben")
}



if(x=="Berke Demir" || x=="Anonim"){
    alert("Ne olursan ol yine gel.")
}

else{
    alert("Feratlar ve Küpekler giremez.")
}


// Fonksiyon kurabilmek için "prompt" komutu kullanılır.
prompt()


// Konsola 'Hello' yazdrırır
console.log('Hello')


// SelamVer adı altında bir fonksiyon oluşturur ve çağırıldığında ekrana 'Merhaba' yazdırır.
function selamVer(){
        console.log("Merhaba")
}

selamVer()

// Numbers adında bir dizi oluşturur ve bunun 1. elemanını çağırır
var numbers=[1,3,5,7,9,11,"A","B","C","D","E"]
numbers[0]


// dizilere gelen .pop eklentisi dizinin son elemanını ekrana yazdırır
var sehirler = ["İstanbul", "Ankara", "İzmir"]
sehirler.pop()

// yine benzer şekilde ilk elemanı gösterir ancak bu iki komutta da ekrana yazdırılan parametre diziden çıkar
sehirler.shift()


// Diziye değer eklemesi yapmak için .push komutu kullanılır
sehirler.push("Bursa")

// Dizi içine direkt dizi eklemek için
sehirler.concat(["Van", "Muş"])

// Alfabetik sıralama için 'sort' komutu kullanılır.
sehirler.sort()

// Dizideki eleman sırasını gösteren komut 'length'dir ve fonksiyon olmadığından dolayı parantez ile kullanılmaz.
sehirler.length

// For döngüsü
for(i=1 ; i<=10 ; i++) {
    console.log(i)
}
console.log("Bitti.")

// While Döngüsü
do {} while(i > 10);
{
    console.log(i);
}


// Çok kullanıcılı bir websitesinin authorize kontrolü için

var email=prompt("E-Mail?")
var email=prompt("Şifre?")

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar.sifre==sifre){
            return true;
        }
    }
        return false;
}

function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tweetler)
    }else{
        console.log("Kullanıcı Adı veya Şifresi Hatalı")
    }
    }



// İlgili HTML dosyasındaki tag, id ve verilere erişip DOM ile manipüle etmek için,

document.getElementById("").innerHTML
document.getElementsByClassName("").innerHTML
document.getElementsByTagName("").innerHTML



// Event atama

var degisken = document.getElementsByID("ID").addEventListener("click",rengiDegistir);

function rengiDegistir(){
    document.getElementsByClassName("classIsmi").style.color="red";

}//Burada ID sahibi olan kesimi degisken adındaki bir değişkene aktarır ve sonrasında atanan fonksiyon ile birlikte classIsmi adındaki class'a sahip olan değerin yazı rengini kırmızı yapar

