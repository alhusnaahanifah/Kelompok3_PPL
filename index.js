const readline = require('readline');
const calculator = require('./solution.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidNumber(input) {
    input = input.replace(',', '.'); // Mengganti koma dengan titik
    return !isNaN(input) && input.trim() !== '';
}

function isValidChoice(input) {
    return /^[1-9]$|^1[0-2]$/.test(input); // Hanya menerima angka bulat 1-12
}

function showMenu() {
    console.log("\nKalkulator Sederhana");
    console.log("Pilih operasi:");
    console.log("1. Tambah");
    console.log("2. Kurang");
    console.log("3. Kali");
    console.log("4. Bagi");
    console.log("5. Pangkat");
    console.log("6. Modulus");
    console.log("7. Absolut");
    console.log("8. Faktorial");
    console.log("9. Cek Prima");
    console.log("10. Maksimum");
    console.log("11. Minimum");
    console.log("12. Bulatkan");
    askChoice();
}

function askChoice() {
    rl.question("Masukkan pilihan (1-12): ", (choice) => {
        if (!isValidChoice(choice)) {
            console.log("Pilihan tidak valid. Masukkan angka antara 1-12.");
            return showMenu();
        }

        choice = parseInt(choice);

        if ([1, 2, 3, 4, 5, 6, 10, 11].includes(choice)) {
            rl.question("Masukkan angka pertama: ", (num1) => {
                num1 = num1.replace(',', '.');
                if (!isValidNumber(num1)) {
                    console.log("Input tidak valid. Harap masukkan angka yang benar.");
                    return showMenu();
                }
                
                rl.question("Masukkan angka kedua: ", (num2) => {
                    num2 = num2.replace(',', '.');
                    if (!isValidNumber(num2)) {
                        console.log("Input tidak valid. Harap masukkan angka yang benar.");
                        return showMenu();
                    }
                    
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    let result;

                    switch (choice) {
                        case 1: result = calculator.tambah(num1, num2); break;
                        case 2: result = calculator.kurang(num1, num2); break;
                        case 3: result = calculator.kali(num1, num2); break;
                        case 4: result = calculator.bagi(num1, num2); break;
                        case 5: result = calculator.pangkat(num1, num2); break;
                        case 6: result = calculator.modulus(num1, num2); break;
                        case 10: result = calculator.maksimum(num1, num2); break;
                        case 11: result = calculator.minimum(num1, num2); break;
                        default: result = "Operasi tidak valid";
                    }

                    console.log(`Hasil: ${result}`);
                    showMenu();
                });
            });
        } else if ([7, 8, 9, 12].includes(choice)) {
            rl.question("Masukkan angka: ", (num) => {
                num = num.replace(',', '.');
                if (!isValidNumber(num)) {
                    console.log("Input tidak valid. Harap masukkan angka yang benar.");
                    return showMenu();
                }
                
                num = parseFloat(num);
                let result;

                switch (choice) {
                    case 7: result = calculator.absolut(num); break;
                    case 8: result = calculator.faktorial(parseInt(num)); break;
                    case 9: result = calculator.isPrima(parseInt(num)); break;
                    case 12: result = calculator.bulatkan(num); break;
                    default: result = "Operasi tidak valid";
                }

                console.log(`Hasil: ${result}`);
                showMenu();
            });
        }
    });
}

showMenu();