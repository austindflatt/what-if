const prompt = require('prompt-sync')();

const earthWeight = Number(prompt('Please enter your earth weight:'));
const planetNumber = Number(prompt('Please enter the number for the planet you want to fight on:'));
const venus = 0.78;
const mars = 0.39;
const jupiter = 2.65;
const saturn = 1.17;
const uranus = 1.05;
const neptune = 1.23;

if (planetNumber === 1) {
    const weight = earthWeight * venus;
    console.log('Your weight on this venus is', weight)
}
else if (planetNumber === 2) {
    const weight = earthWeight * mars;
    console.log('Your weight on this mars is', weight)
}
else if (planetNumber === 3) {
    const weight = earthWeight * jupiter;
    console.log('Your weight on this jupiter is', weight)
}
else if (planetNumber === 4) {
    const weight = earthWeight * saturn;
    console.log('Your weight on this saturn is', weight)
}
else if (planetNumber === 5) {
    const weight = earthWeight * uranus;
    console.log('Your weight on this uranus is', weight)
}
else if (planetNumber === 6) {
    const weight = earthWeight * neptune;
    console.log('Your weight on this neptune is', weight)
}
else {
    console.log("error, not a planet")
}