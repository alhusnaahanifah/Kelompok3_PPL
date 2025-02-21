/**
 * Mengembalikan hasil penjumlahan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function tambah(a, b) {
    return a + b;
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kurang(a, b) {
    return a - b;
}

/**
 * Mengembalikan hasil perkalian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kali(a, b) {
    return a * b;
}

/**
 * Mengembalikan hasil pembagian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number | string}
 */
function bagi(a, b) {
    if (b === 0)
        return "Pembagian oleh nol tidak diperbolehkan";
    return a / b;
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function pangkat(a, b) {
    return a**b
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 * @param {number} n 
 * @returns {number}
 */
function faktorial(n) {
    if (n < 0)
        return "Tidak ada faktorial untuk angka negatif";
    if (n === 0)
        return 1;
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * @param {number} n 
 * @returns {boolean}
 */
function isPrima(n) {
    if (n === 2)
        return true; // 2 adalah bilangan prima
    if (n < 2 || n % 2 === 0)
        return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}

/**
 * Mengembalikan hasil dari a modulus b.
 * modulus adalah sisa pembagian a dengan b.
 * contoh 10 mod 3 = 1, karena 10 dibagi 3 adalah 3 sisa 1.
 * 10 / 3 = 3 sisa 1. dan 1 adalah jawabannya
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * @param {number} a 
 * @returns {number}
 */
function absolut(a) {
    return a < 0 ? -a : a;
}


/**
 * Mengembalikan nilai terbesar dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function maksimum(a, b) {
    return a > b ? a : b;
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function minimum(a, b) {
    return a < b ? a : b;
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * @param {number} a 
 * @returns {number}
 */

function bulatkan(a) {
    return (a >= 0) ? (a % 1 >= 0.5 ? a - (a % 1) + 1 : a - (a % 1)) 
                    : (a % 1 <= -0.5 ? a - (a % 1) - 1 : a - (a % 1));
}


// Export hasil akhir
module.exports = { tambah, kurang, kali, bagi, pangkat, faktorial, isPrima, modulus, absolut, maksimum, minimum, bulatkan };
