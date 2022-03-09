// Soal No 1
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali
const { name: nama, brand, year, colors } = phone;
console.log("jawaban No.1:");
console.log(brand + "" + nama + "" + year + "" + colors[2]);

// Soal No 2
let warna = ["biru", "merah", "kuning", "hijau"];
let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};
let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

console.log("jawaban No.2:");

let WarnaSampulBaru = [...buku.warnaSampul, ...warna];
buku.warnaSampul = WarnaSampulBaru;

let Buku1 = { ...buku, ...dataBukuTambahan };
console.log(Buku1);

// Soal No 3
let array = ["John Doe", " laki-laki", "baca buku", "1992"];
console.log("jawaban No.3");
let object = {
  nama: array[0],
  jenisKelamin: array[1],
  hobi: array[2],
  tahunLahir: array[3],
};
console.log(object);

// Soal No 4
// const Nurizki = {
//   name: "Mohamad Nurizki",
//   age: 21,
//   isMarried: false,
//   birthday: "10-05-2001",
// };
// const yourFriend = {
//   name: "Verra",
//   age: 20,
// };
// const month = [
//   // array of month
//   "januari", "februari", "maret", "april","mei","juni", "juli", "agustus", "september", "oktober", "november", "desember"
// ];

// // menentukan usia saya apakah lebih tua dari verra if else
// const agematch = if (Nurizki.age === yourFriend.age) {

// }

// // tulis code disini
// let sentences = "Hello, ";

// // tulis code disini
// console.log(sentences);
// console.log("jawaban No.4:");

// // #
// const intialFloorLevel = 1;
// for (let floorLevel = intialFloorLevel; floorLevel <= 5; floorLevel++) {
//   console.log("Aku lagi di lantai", floorLevel);
//   console.log("Ngepel");
//   console.log("Meres pel");
//   console.log("Ngepel lagi");
// }
// kode diatas ini jangan di rubah atau di hapus sama sekali
/* Tulis kode jawabannya di sini */
