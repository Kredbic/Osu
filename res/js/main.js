

// ←----------- Příklad č 1 -----------→


/*
const kulyn = (item) => {
    console.log("Přinesl jsem " + item)

}
const kulynn = (item1, item2) => {
    console.log("Přinesl jsem " + item1 + item2)

}

kulyn("Bríle");
kulyn("Jendu");
kulyn("Boty");
kulynn("Bríle", "Psa");
kulynn("Jendu", "Psa");
kulynn("Boty", "Psa");


//  ←----------- Příklad č 2 -----------→


*/

/*
const sum = (a, b, c, d, e, f) => {
    console.log(a + b + c + d + e + f)

}

sum(1, 2, 3, 4, 5, 6)

const hello = (a, b, c, d) => {
    console.log("Hello " + a + ", Hello " + b + ", Hello " + c + ", Hello " + d)
    console.log(`Hello ${a}, hello ${b}, hello, ${c}, hello ${d}`)
}

hello("Pepa", "Pavel", "Jeníček", "Fukys")
*/


// ←----------- Příklad č 3 -----------→


/*
let firstNumber = 5;
let secondNumber = 6;

const sum = (a, b) => {
    return a+b;
}

let result = sum(firstNumber, secondNumber)
console.log(result);


const sumA = (a, b) => a+b;

let resultA = sum(firstNumber, secondNumber)
console.log(resultA);
*/


// ←----------- Příklad č 4 -----------→


/*
let person = "Marek";
let age = 69;

const createSentence = (a, b) => `Tvoje jm=eno je ${a} a je ti ${b} let`

console.log(createSentence(person, age))
*/


// ←----------- Příklad č 5 -----------→

const start = document.getElementById("start")
const koule = document.getElementById("koule")

start.onclick = () => {
    moveKoule(koule, getRandomNumber(50, 600), getRandomNumber(50,600))
}

const moveKoule = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}

const getRandomNumber =  (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;