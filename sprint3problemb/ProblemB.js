let u  = require('./Utility');

let input = u.read(u.arg(0));
let output = u.arg(1);
let size = input[0][0];
let array = input[1].slice();
let moves = 0;

function remove(array, index) {
array = array.splice(index, 1);
}

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}


while (array.length != 0) {

if (! isPrime(array[0])) {
array[0]++;
moves++;
}

if (! isPrime(array[1])) {
array[1]++;
moves++;
}

if (isPrime(array[0]) && isPrime(array[1])) {
remove(array, 0);
remove(array, 0);
moves++
}

}

u.write(output, moves);