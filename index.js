const readline = require('readline');
const calculator = require('./solution.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidNumber(input) {
    input = input.replace(',', '.');
    return !isNaN(input) && input.trim() !== '';
}

function isValidChoice(input) {
    return /^(0|[1-9]$|^1[0-2])$/.test(input);
}

function askNumber(question, callback) {
    rl.question(question, (num) => {
        num = num.replace(',', '.');
        if (!isValidNumber(num)) {
            console.log("Input tidak valid. Harap masukkan angka yang benar.");
            return askNumber(question, callback);
        }
        callback(parseFloat(num));
    });
}

function showMenu() {
    console.log("\n\tKalkulator CLI");
    console.log("==================================");
    console.log("||\tPilih operasi:\t\t||");
    console.log("||\t1. Tambah\t\t||");
    console.log("||\t2. Kurang\t\t||");
    console.log("||\t3. Kali \t\t||");
    console.log("||\t4. Bagi \t\t||");
    console.log("||\t5. Pangkat\t\t||");
    console.log("||\t6. Modulus\t\t||");
    console.log("||\t7. Absolut\t\t||");
    console.log("||\t8. Faktorial\t\t||");
    console.log("||\t9. Cek Prima\t\t||");
    console.log("||\t10. Maksimum\t\t||");
    console.log("||\t11. Minimum\t\t||");
    console.log("||\t12. Bulatkan\t\t||");
    console.log("||\t0. Keluar\t\t||");
    console.log("==================================");
    askChoice();
}

function askChoice() {
    rl.question("Masukkan pilihan (0-12): ", (choice) => {
        if (!isValidChoice(choice)) {
            console.log("Pilihan tidak valid. Masukkan angka antara 0-12.");
            return askChoice();
        } else if (choice == 0){
            console.log("\n****** Senang Bisa Membantu ******\n");
            rl.close();
            return;
        }
        choice = parseInt(choice);

        if ([1, 2, 3, 4, 5, 6, 10, 11].includes(choice)) {
            askNumber("Masukkan angka pertama: ", (num1) => {
                askNumber("Masukkan angka kedua: ", (num2) => {
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
                    console.log("==================================");
                    console.log(`Hasil: ${result}\n\n`);
                    setTimeout(() => {
                        showMenu();
                    }, 2000); // Jeda 2 detik
                });
            });
        } else {
            askNumber("Masukkan angka: ", (num) => {
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
