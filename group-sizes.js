const prompt = require('prompt-sync')();

const classSize = Number(prompt('What is your class size?'));

const groupsOfThree = Math.floor(classSize / 3);

const groupsOfTwo = classSize % 3 / 2;

console.log("Groups of 3 is", groupsOfThree, "Groups of two is", groupsOfTwo);