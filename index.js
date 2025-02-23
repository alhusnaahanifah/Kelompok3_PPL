const readline = require('readline');
const calculator = require('./solution.js');

// ANSI Color codes
const colors = {
    reset: '\x1b[0m',
    cyan: '\x1b[36m',        
    white: '\x1b[37m',      
    yellow: '\x1b[33m',      
    red: '\x1b[31m',         
    magenta: '\x1b[35m'      
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clear = () => console.clear();
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function colorize(text, color) {
    return `${colors[color] || ''}${text}${colors.reset}`;
}

function centerText(text, width) {
    const leftPadding = Math.floor((width - text.length) / 2);
    return ' '.repeat(Math.max(0, leftPadding)) + text + ' '.repeat(Math.max(0, width - text.length - leftPadding));
}

function drawMenuItems() {
    const menuItems = [
        ['1', 'Tambah', '+'],
        ['2', 'Kurang', '-'],
        ['3', 'Kali', '*'],
        ['4', 'Bagi', '/'],
        ['5', 'Pangkat', '^'],
        ['6', 'Modulus', '%'],
        ['7', 'Absolut', '|x|'],
        ['8', 'Faktorial', 'n!'],
        ['9', 'Prima', 'p?'],
        ['10', 'Maximum', 'max'],
        ['11', 'Minimum', 'min'],
        ['12', 'Bulatkan', '≈'],
        ['0', 'Keluar', 'x']
    ];

    const boxWidth = 34;

    console.log(colorize('╔' + '═'.repeat(boxWidth) + '╗', 'cyan'));
    console.log(colorize('║' + centerText('KALKULATOR CLI', boxWidth) + '║', 'white'));
    console.log(colorize('╠' + '═'.repeat(boxWidth) + '╣', 'cyan'));

    menuItems.forEach(([num, text, symbol]) => {
        const line = `║ ${num.padStart(2)}  ${text.padEnd(18)} ${symbol.padEnd(9)} ║`;
        console.log(colorize(line, 'cyan'));
    });

    console.log(colorize('╚' + '═'.repeat(boxWidth) + '╝', 'cyan'));
}

async function displayResult(result, operation) {
    const frames = ['◐', '◓', '◑', '◒'];
    let i = 0;
    const loading = setInterval(() => {
        process.stdout.write(`\r${colorize('Menghitung ', 'magenta')}${colorize(frames[i], 'magenta')}`);
        i = (i + 1) % frames.length;
    }, 100);

    await sleep(1000);
    clearInterval(loading);
    console.log('\n');

    const boxWidth = 34;
    const resultText = `Hasil ${operation}: ${result}`;

    console.log(colorize('╔' + '═'.repeat(boxWidth) + '╗', 'cyan'));
    console.log(colorize('║' + centerText(resultText, boxWidth) + '║', 'white'));
    console.log(colorize('╚' + '═'.repeat(boxWidth) + '╝', 'cyan'));

    console.log('\nTekan Enter untuk melanjutkan...');
    await new Promise(resolve => rl.question('', resolve));
    showMenu();
}

function isValidNumber(input) {
    input = input.replace(',', '.');
    return !isNaN(input) && input.trim() !== '';
}

function isValidChoice(input) {
    return /^(0|[1-9]|1[0-2])$/.test(input);
}

async function showMenu() {
    clear();
    drawMenuItems();
    askChoice();
}

function askNumber(question, callback) {
    rl.question(colorize(question, 'yellow'), (num) => {
        num = num.replace(',', '.');
        if (!isValidNumber(num)) {
            console.log(colorize("\n✖ Input tidak valid. Harap masukkan angka yang benar.", 'red'));
            return askNumber(question, callback);
        }
        callback(parseFloat(num));
    });
}

function askChoice() {
    rl.question(colorize('\nMasukkan pilihan (0-12): ', 'yellow'), async (choice) => {
        if (!isValidChoice(choice)) {
            console.log(colorize("\n✖ Pilihan tidak valid. Masukkan angka antara 0-12.", 'red'));
            await sleep(1500);
            return showMenu();
        }

        if (choice === '0') {
            clear();
            const boxWidth = 36; // Lebar kotak yang rapi
        
            console.log(colorize('╔' + '═'.repeat(boxWidth) + '╗', 'cyan'));
            console.log(colorize('║' + centerText('★ Terima Kasih! ★', boxWidth) + '║', 'white'));
            console.log(colorize('╚' + '═'.repeat(boxWidth) + '╝', 'cyan') + '\n');
        
            rl.close();
            return;
        }
        

        const operations = {
            1: ['tambah', 'Penambahan'],
            2: ['kurang', 'Pengurangan'],
            3: ['kali', 'Perkalian'],
            4: ['bagi', 'Pembagian'],
            5: ['pangkat', 'Perpangkatan'],
            6: ['modulus', 'Modulus'],
            7: ['absolut', 'Nilai Absolut'],
            8: ['faktorial', 'Faktorial'],
            9: ['isPrima', 'Cek Bilangan Prima'],
            10: ['maksimum', 'Nilai Maksimum'],
            11: ['minimum', 'Nilai Minimum'],
            12: ['bulatkan', 'Pembulatan']
        };

        choice = parseInt(choice);
        console.log(colorize('\nOperasi: ', 'white') + colorize(operations[choice][1], 'white'));

        if ([1, 2, 3, 4, 5, 6, 10, 11].includes(choice)) {
            askNumber('\nMasukkan angka pertama: ', (num1) => {
                askNumber('Masukkan angka kedua: ', (num2) => {
                    const result = calculator[operations[choice][0]](num1, num2);
                    displayResult(result, operations[choice][1]);
                });
            });
        } else {
            askNumber('\nMasukkan angka: ', (num) => {
                const result = calculator[operations[choice][0]](parseInt(num));
                displayResult(result, operations[choice][1]);
            });
        }
    });
}

// Mulai aplikasi
showMenu();