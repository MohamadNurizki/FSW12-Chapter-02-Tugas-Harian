// Membuat list chapter 02 latihan 1

var person = {
  nama: "kaizen",
  umur: 20,
  asal: "sukabumi",
};

var body = document.body;
var array = ["ayam", "kucing", "kambing", "sapi", "burung"];

var ul = document.createElement("ul");
var li = document.createElement("li");
li.append(array[0]);
body.append(li);

var ul = document.createElement("ul");
var li = document.createElement("li");
li.append(array[1]);
body.append(li);

var ul = document.createElement("ul");
var li = document.createElement("li");
li.append(array[2]);
body.append(li);

var ul = document.createElement("ul");
var li = document.createElement("li");
li.append(array[3]);
body.append(li);

var ul = document.createElement("ul");
var li = document.createElement("li");
li.append(array[4]);
body.append(li);

body.append(ul);
