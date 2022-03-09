/*
// Soal No 1
 Tulis code function di sini]
 
*/

console.log(`Jawaban No.1 :`);
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}
function kelilingPersegiPanjang(panjang, lebar) {
  return (panjang + lebar) * 2;
}
function volumeBalok(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}
//Soal No 1
var panjang = 12;
var lebar = 4;
var tinggi = 8;
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);
console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

/*
// Soal No 2
 Tulis kode function di sini
*/

console.log(`Jawaban No.2 :`);
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!"

function introduce(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

/*
 Tulis kode function di sini
*/
console.log(`Jawaban No.3 :`);
var dataFilm = [];

function tambahDataFilm(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama,
    duration: durasi,
    genre: genre,
    tahun: tahun,
  });
}
// Soal No 3
tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");
console.log(dataFilm);
console.log(" ");

// No 4
// Code class di sini
// release 0

// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._legs = 4;
//     this._cold_blooded = false;
//   }
//   get name() {
//     return this._name;
//   }
//   get legs() {
//     return this._legs;
//   }
//   get cold_blooded() {
//     return this._cold_blooded;
//   }
//   set legs(value) {
//     this._legs = value;
//   }
// }

// var sheep = new Animal("shaun");
// console.log("Jawaban No.4");
// console.log("----Release 0----");
// console.log(sheep.name);
// console.log(sheep.legs);
// console.log(sheep.cold_blooded);
// sheep.legs = 3;
// console.log(sheep.legs);

// // release 1
// class Ape extends Animal {
//   yell() {
//     console.log("Auooo");
//   }
// }

// class Frog extends Animal {
//   jump() {
//     console.log("hop hop");
//   }
// }
// console.log("----Release 1----");
// var sungokong = new Ape("kera sakti");
// sungokong.yell();
// sungokong.legs = 2;
// console.log(sungokong.name);
// console.log(sungokong.legs);
// console.log(sungokong.cold_blooded);
// var kodok = new Frog("buduk");
// kodok.jump();
// console.log(kodok.name);
// console.log(kodok.legs);
// console.log(kodok.cold_blooded);

// var sheep = new Animal("shaun");
// console.log(sheep.name); // "shaun"
// console.log(sheep.legs); // 4
// console.log(sheep.cold_blooded); // false
// sheep.legs = 3;
// console.log(sheep.legs);

// // Code class Ape dan class Frog di sini
// var sungokong = new Ape("kera sakti");
// sungokong.yell(); // "Auooo"
// sungokong.legs = 2;
// console.log(sungokong.name);
// console.log(sungokong.legs);
// console.log(sungokong.cold_blooded);
// var kodok = new Frog("buduk");
// kodok.jump(); // "hop hop"
// console.log(kodok.name);
// console.log(kodok.legs);
// console.log(kodok.cold_blooded);
