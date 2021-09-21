const prompt = require('prompt-sync')();

const number = Number(prompt('Please enter a number:'));

if (number % 15 == 0){
    console.log("fizzbuzz")
}
else if (number % 3 == 0) {
    console.log("fizz");
}
else if (number % 5 == 0) {
    console.log("buzz")
}
else {
    console.log("error")
}