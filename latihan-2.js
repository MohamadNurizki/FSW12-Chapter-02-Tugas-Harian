// Soal 1
var sentences = "wah javascript itu keren sekali";
var array = sentences.split(" ");

console.log(`Jawaban No.1 :`);
console.log(`Kata Pertama : ${array[0]}`);
console.log(`Kata Kedua : ${array[1]}`);
console.log(`Kata Ketiga : ${array[2]}`);
console.log(`Kata Keempat : ${array[3]}`);
console.log(`Kata Kelima : ${array[4]}`);

// Soal 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";
var alasSegitiga = "6";
var tinggiSegitiga = "7";
console.log(`Jawaban No.2 : `);

//rumus nya (panjang + lebar)*2
console.log(`Keliling Persegi Panjang : ${panjangPersegiPanjang * 2 + lebarPersegiPanjang * 2}`);

//rumus nya (alas + tinggi) / 2
console.log(`Luas Segitiga : ${(alasSegitiga * tinggiSegitiga) / 2}`);
