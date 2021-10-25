console.log('Task 1');
let a = 36;
let b = 63;
console.log(`${a}+${b}=${a + b}`);

console.log('\nTask 2');
let str1 = 'this addition.';
let str2 = 'Test_' + str1;
console.log(str2);

console.log('\nTask 3');
let firstname = 'Yulia';
let lastname = 'Kachkovska';
let age = 32;
console.log(`Hi! I'm ${firstname} ${lastname}, I'm ${age} years old.`);

console.log('\nTask 4');
let num = Math.floor(Math.random()*200);
if (num > 100) {
    console.log(`${num} is bigger than 100.`);
} else {
    console.log(`${num} is NOT bigger than 100.`)
}

console.log('\nTask 5');
let num1 = Math.floor(Math.random()*200);
let num2 = Math.floor(Math.random()*200);
let num3 = Math.floor(Math.random()*200);
if (num1 > num2 && num1 > num3){
    console.log(`${num1} is bigger than ${num2} and ${num3}.`);
} else {
    console.log(`Sorry, ${num1} is less than ${num2} or ${num3}.`);
}

console.log('\nTask 6');
let numb1 = Math.floor(Math.random()*100);
let numb2 = Math.floor(Math.random()*100);
console.log(`numb1 = ${numb1}`);
console.log(`numb2 = ${numb2}`);
console.log(`numb1 or numb2 or sum equals 50: ${numb1 === 50 || numb2 === 50 || numb1 + numb2 === 50}`);

console.log('\nTask 7');
let numb = Math.floor(Math.random()*100);
if (numb%3 === 0) {
    console.log(`${numb} is multiple of 3`);
} else if (numb%7 === 0){
    console.log(`${numb} is multiple of 7`);
}
 else {
    console.log(`${numb} is neither multiple of 3 nor multiple of 7`);
}