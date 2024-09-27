// console.log("araba");
// console.clear();
// console.log("araba");
// console.clear();
// document.write("<div>güzel <hr> <br> yazı</div>");
// console.log(window);
// console.log(window.location.href);
// console.timeStamp("araba");
// document.write(
//     '<div style="color:red;">Merhaba arabalı adam</div>Çok güzel bir yazı'
// );
// console.log("olacak bu iş ellem");
// alert("Derin Mavi sitesine hoş geldiniz");
// console.log(localStorage);

// let araba = "a";
// console.log(typeof araba);

// let string = "Yaşınız: ";
// let yaş = 20;
// let dogru = true;
// console.log(string, yaş);
// console.log(string == "Yaşınız: ");
// console.log("doğru", dogru == 0);
// let bos = null;
// console.log(bos);

// let notlar = [10, 20, 30, 40, "merhaba"];
// console.log(notlar);

// ? Alert - Confirm - Prompt

// alert("Merhaba");
// let string = prompt("Ahmetin yaşını gir");
// console.log(string);
// console.log(string === 15);
// confirm("eywAllah");

// ? if else

// let age = Number(prompt("Yaşınızı giriniz :"));
// let money = Number(prompt("Ne kadar paran var ?"));

// if (age >= 18 && money >= 3000) {
//     alert("Ehliyet alabilirsin");
// } else {
//     alert("Ehliyet alamazsın");
// }

// ! Ders ortalaması bulma
let vize1;
let vize2;
let final;
do {
    vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
} while (vize1 < 0 || vize1 > 100);

do {
    vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));
} while (vize2 < 0 || vize2 > 100);

do {
    final = Number(prompt("Final notunuzu giriniz :"));
} while (final < 0 || final > 100);

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

console.log(ortalama);

if (ortalama >= 40) {
    alert("Dersi geçtin tebrikler");
} else {
    alert("Alttan alman lazım maalesef");
}
