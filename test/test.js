const {
  tambah,
  kurang,
  kali,
  bagi,
  pangkat,
  faktorial,
  isPrima,
  absolut,
  modulus,
  maksimum,
  minimum,
  bulatkan,
} = require('../solution');

// Variabel untuk menghitung jumlah tes yang benar dan salah
let correctCount = 0; // Jumlah tes yang benar
let errorCount = 0;   // Jumlah tes yang salah

// Variabel untuk menghitung jumlah fungsi yang benar dan salah
let functionCorrectCount = 0; // Jumlah fungsi yang seluruh tesnya benar
let functionErrorCount = 0;   // Jumlah fungsi yang ada tes yang salah

// Fungsi untuk mengecek hasil tes dan menampilkan pesan
function checkTest(condition, message) {
  if (condition) {
    correctCount++;
  } else {
    errorCount++;
    console.error(message);
  }
}

// Fungsi untuk mengecek apakah semua tes dalam suatu fungsi berhasil
function checkFunctionTests(testFunction, functionName) {
  const initialErrorCount = errorCount; // Simpan jumlah error sebelum menjalankan tes fungsi
  testFunction(); // Jalankan tes fungsi
  if (errorCount === initialErrorCount) {
    console.log(`Tes fungsi ${functionName} selesai: Semua benar`);
    functionCorrectCount++; // Tambahkan ke fungsi yang benar
  } else {
    console.log(`Tes fungsi ${functionName} selesai: Ada kesalahan`);
    functionErrorCount++; // Tambahkan ke fungsi yang salah
  }
}

// Definisi tes untuk setiap fungsi
function testTambah() {
  checkTest(tambah(2, 3) === 5, 'Test tambah(2, 3) failed');
  checkTest(tambah(-1, 1) === 0, 'Test tambah(-1, 1) failed');
}

function testKurang() {
  checkTest(kurang(5, 3) === 2, 'Test kurang(5, 3) failed');
  checkTest(kurang(10, 7) === 3, 'Test kurang(10, 7) failed');
}

function testKali() {
  checkTest(kali(2, 3) === 6, 'Test kali(2, 3) failed');
  checkTest(kali(4, 0) === 0, 'Test kali(4, 0) failed');
}

function testBagi() {
  checkTest(bagi(6, 3) === 2, 'Test bagi(6, 3) failed');
  checkTest(bagi(5, 0) === "Pembagian oleh nol tidak diperbolehkan", 'Test bagi(5, 0) failed');
}

function testPangkat() {
  checkTest(pangkat(2, 3) === 8, 'Test pangkat(2, 3) failed');
  checkTest(pangkat(5, 0) === 1, 'Test pangkat(5, 0) failed');
}

function testFaktorial() {
  checkTest(faktorial(0) === 1, 'Test faktorial(0) failed');
  checkTest(faktorial(5) === 120, 'Test faktorial(5) failed');
}

function testIsPrima() {
  checkTest(isPrima(2) === true, 'Test isPrima(2) failed');
  checkTest(isPrima(4) === false, 'Test isPrima(4) failed');
}


function testModulus() {
  checkTest(modulus(10, 3) === 1, 'Test modulus(10, 3) failed');
  checkTest(modulus(5, 2) === 1, 'Test modulus(5, 2) failed');
}


function testAbsolut() {
  checkTest(absolut(-5) === 5, 'Test absolut(-5) failed');
  checkTest(absolut(10) === 10, 'Test absolut(10) failed');
}



function testMaksimum() {
  checkTest(maksimum(10, 20) === 20, 'Test maksimum(10, 20) failed');
  checkTest(maksimum(-5, 5) === 5, 'Test maksimum(-5, 5) failed');
}

function testMinimum() {
  checkTest(minimum(10, 20) === 10, 'Test minimum(10, 20) failed');
  checkTest(minimum(-5, 5) === -5, 'Test minimum(-5, 5) failed');
}

function testBulatkan() {
  checkTest(bulatkan(3.7) === 4, 'Test bulatkan(3.7) failed');
  checkTest(bulatkan(2.3) === 2, 'Test bulatkan(2.3) failed');
}

// Jalankan semua tes dan hitung jumlah fungsi yang benar/salah
checkFunctionTests(testTambah, 'tambah');
checkFunctionTests(testKurang, 'kurang');
checkFunctionTests(testKali, 'kali');
checkFunctionTests(testBagi, 'bagi');
checkFunctionTests(testPangkat, 'pangkat');
checkFunctionTests(testFaktorial, 'faktorial');
checkFunctionTests(testIsPrima, 'isPrima');
checkFunctionTests(testModulus, 'modulus');
checkFunctionTests(testAbsolut, 'absolut');
checkFunctionTests(testMaksimum, 'maksimum');
checkFunctionTests(testMinimum, 'minimum');
checkFunctionTests(testBulatkan, 'bulatkan');

// Tampilkan hasil akhir
console.log('\nHasil akhir:');
console.log(`Jumlah tes yang benar: ${correctCount}`);
console.log(`Jumlah tes yang salah: ${errorCount}`);
console.log(`Jumlah fungsi yang benar (semua tes berhasil): ${functionCorrectCount}`);
console.log(`Jumlah fungsi yang salah (ada tes yang gagal): ${functionErrorCount}`);
console.log('Semua tes selesai.');