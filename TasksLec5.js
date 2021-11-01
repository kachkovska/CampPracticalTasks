console.log("Task 1");
let a = "Spam, eggs, bacon!";
function includesSymbol(symb, someStr){
    if (someStr.includes(symb)){
        return `String "${someStr}" includes ${symb}`;
    } else {
        return `String "${someStr}" does not include ${symb}`;    
    }
}
console.log(includesSymbol("a", a));
console.log(includesSymbol("z", a));

console.log("\nTask 2");

function isBlank(someString) {
    if (someString.length === 0 || someString.trim() == ""){
        return 'Given string is blank';
    } else {
        return 'Given string is not blank';
    }
}
console.log(isBlank(""));
console.log(isBlank("     "));
console.log(isBlank("Spam, eggs, bacon!"));

console.log("\nTask 4");

let numb1 = Math.floor(Math.random()*200);
let numb2 = Math.floor(Math.random()*200);

function displayLargerNum(a,b) {
    if (a > b) {
        return `The larger of ${a} and ${b} is ${a}`;
    } else if (a < b) {
        return `The larger of ${a} and ${b} is ${b}`;
    } else {
        return `Numbers ${a} and ${b} are equal`;
    }
}
console.log(displayLargerNum(numb1, numb2));

console.log("\nTask 5");

let num1 = Math.floor(Math.random()*200);
let num2 = Math.floor(Math.random()*200);
let num3 = Math.floor(Math.random()*200);

function sortThreeNums(a, b, c){
    if (a <= b && b <= c){
        return `numbers ${a}, ${b}, ${c}, sorted in ascending order: ${a}, ${b}, ${c}`;
    } else if (a <= c && c <= b) {
        return `numbers ${a}, ${b}, ${c}, sorted in ascending order: ${a}, ${c}, ${b}`;
    } else if (b <= a && a <= c) {
        return `numbers ${a}, ${b}, ${c}, sorted in ascending order: ${b}, ${a}, ${c}`;
    } else if (b <= c && c <= a) {
        return `numbers ${a}, ${b}, ${c}, sorted in ascending order: ${b}, ${c}, ${a}`;
    } else if (c <= a && a <= b) {
        return `numbers ${a}, ${b}, ${c}, sorted in ascending order: ${c}, ${a}, ${b}`;
    } else {
        return `numbers ${a}, ${b}, ${c}, sorted in ascending order: ${c}, ${b}, ${a}`;
    }
}

console.log(sortThreeNums(num1, num2, num3));