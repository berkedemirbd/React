var sayi=10;
var sehir="Ankara";

sayi=11;
sehir="İstanbul";

let il="Ankara";
let il="İzmir";

// let'de var'da değişken atamak için kullanılır. Ancak var ile atanan değişkenleri tekrar var ile atayarak sıfırlayabilirken let buna izin vermez halihazırda atanmış bir değişkenin değeri ancak değişebilir yeni değişken olarak atanamaz

console.log("sayi");
console.log("sehir");

function mesajVer(){
    var isim="Berke";
    console.log(sehir);
    console.log(isim);
}
for(var i=1;i<10;i++){
// let özelliğinden dolayı burada var yerine let kullanamayız çükü halihazırda olan bir değişken tekrar tanımlanamaz.
}
console.log(i);


// Const sabit demektir ve bir sabit bir tanımlama sağlar.
const soyad="Demir"
console.log(soyad)

