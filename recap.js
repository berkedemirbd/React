var kullanicilar = [
    {email:"berkedemirbd@hotmail.com", sifre:"12345"},
    {email:"berke.demir@aistudio.com.tr",sifre:"12345"}
]

var tweetler = [
    {email:"berkedemirbd@hotmail.com", tweet:"Working hard"},
    {email:"berke.demir@aistudio.com.tr", tweet:"As you can see"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre) ||
    (email==kullanicilar[1].email && sifre==kullanicilar[1].sifre))
        {console.log(tivitler)}
    else{
        console.log("Kullanıcı Adı veya Şifresi Hatalı!")
    }
}

giris(email,sifre)