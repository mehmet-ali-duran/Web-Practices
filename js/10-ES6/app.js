// function selamVer(isim) {
//     console.log("Selamün Aleyküm Mübarek Kardeşim", isim);
//     return isim;
// }

// let ad = selamVer("Ahmet");
// console.log(ad);
// const okFunc = (isim) => {
//     console.log("Selamün Aleyküm Mübarek Kardeşim", isim);
//     return isim;
// };

// let namse = okFunc("Ali");
// console.log(namse);

// let arrayy = ["a", "si", "5"];
// console.log(typeof arrayy);

// const map1 = new Map();

// map1.set("a", 1);
// map1.set("Mehmet", 15);
// map1.set((adam = { name: "salih", surname: "uçan" }), 1);

// console.log(map1);
// console.log(map1.get(adam));

class Person {
    firstName = "Serhat";

    write() {
        console.log(this.firstName);
    }
}

class Student extends Person {}

const adam = new Person();
adam.write();
const ogr = new Student();
ogr.write();
