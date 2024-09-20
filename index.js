// Nomor 1
function reverseAlphabets(input) {
    var alphabets = input.replace(/[0-9]/g, '');
    var digits = input.replace(/\D/g, '');
    var reversedAlphabets = alphabets.split('').reverse().join('');
    return reversedAlphabets + digits;
}
var resultReverse = reverseAlphabets("NEGIE1");
console.log('1. Result Reverse Alphabet: ', resultReverse);


// Nomor 2
function longest(sentence) {
    var word = sentence.split(' ');
    var longestWord = word[0];
    for (var i = 1; i < word.length; i++) {
        if (word[i].length > longestWord.length) {
            longestWord = word[i];
        }
    }
    return "".concat("Word: ", longestWord, " => ").concat(longestWord.length, " characters");
}
var sentence = "Saya suka pergi ke coffe shop sendirian";
var resultLongestWord = longest(sentence);
console.log('2. Result Longest Word: ', resultLongestWord);


//Nomor 3
function matchQueryToInput(input, query) {
    return query.map(q => input.filter(word => word === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const resultMatchQueryToInput = matchQueryToInput(INPUT, QUERY);
console.log('3. Result Output: ', resultMatchQueryToInput); 


// Nomor 4
function diagonalMatrix(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonal1 += matrix[i][i]; 
        diagonal2 += matrix[i][matrix.length - 1 - i]; 
    }

    return Math.abs(diagonal1 - diagonal2);
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const resultDiagonalMatrix = diagonalMatrix(matrix);
console.log('4. Result Diagonal Reduction: ', resultDiagonalMatrix);