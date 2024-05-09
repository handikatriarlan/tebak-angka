var randomNumber = Math.floor(Math.random() * 50) + 1;
var attempts = 0;
console.log(randomNumber)

alert("Selamat Datang di Permainan Tebak Angka!");

function checkGuess() {
    var userGuess = parseInt(prompt("Masukkan angka tebakan Anda (antara 1 dan 100): "));
    attempts++;
    if (userGuess === randomNumber) {
        alert('Selamat! Anda menebak angka yang benar dalam ' + attempts + ' percobaan!');
    } else if (userGuess > randomNumber) {
        alert('Tebakan terlalu besar!');
        checkGuess();
    } else if (userGuess < randomNumber) {
        alert('Tebakan terlalu kecil!');
        checkGuess();
    }
}

checkGuess();
