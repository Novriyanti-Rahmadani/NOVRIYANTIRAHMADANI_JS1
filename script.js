// if,else,nested if

var nilai = prompt("Masukkan nilai Anda:", 0);

if (nilai >= 0 && nilai <= 100) {
  if (nilai >= 70) {
    console.log("Selamat! Anda lulus.");
  } else {
    console.log("Maaf, Anda tidak lulus.");
  }
} else {
  console.log("Nilai tidak valid.");
}


// switch case
var nomorRuangan = 444; 

switch (nomorRuangan) {
  case 111:
    console.log("Ini adalah kelas Java.");
    break;
  case 222:
    console.log("Ini adalah kelas HTML.");
    break;
  case 333:
    console.log("Ini adalah kelas CSS.");
    break;
  case 444:
    console.log("Ini adalah kelas PHP.");
    break;
  default:
    console.log("Nomor ruangan tidak dikenali.");
    break;
}

//for statement
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//while,do-while
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

//function

function gabungKata(kata1, kata2) {
  return kata1 + ' ' + kata2;
}

let kataPertama = "Halo";
let kataKedua = "world";
let hasilGabungan = gabungKata(kataPertama, kataKedua);

console.log(`hasil gabungan: ${hasilGabungan}`);






