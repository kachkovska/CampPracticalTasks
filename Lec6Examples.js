let cars2 = ["Saab", "Volvo", "BMW", "VW", "Skoda"];

//Array methods
//length
//console.log(cars2.length);

//join()
console.log(cars2.join());
//console.log(cars2.join(" "));
//console.log(cars2.join(";"));

//push()
cars2.push("Audi");
//console.log(cars2.length);
//console.log(cars2.join());

//pop()
let lastVehicle = cars2.pop();
//console.log(cars2.join());
//console.log(lastVehicle);

//splice()
let cars3 = cars2;
//cars3.splice(1, 3, "Audi");
//console.log(cars3.join());

//concat()
let buses = ["Scania", "Ikarus"];
//console.log(cars3.concat(buses).join());

//slice()
let popular = cars2.slice(1,4);
//console.log(popular.join());

//includes()
//console.log(cars2.join());
//console.log(cars2.includes("Saab"));
//console.log(cars2.includes("saab"));
//console.log(cars2.includes("Saab", 3));

//OBJECTS
let person1 = {
    firstName:"John",
    lastName:"Black",
    age:25,
    eyeColor:"blue",
    fullName: function() {return this.firstName + " " + this.lastName;}
};
person1.firstName = "TOM";
console.log(`First Name: ${person1.firstName}`);
console.log(`Full Name: ${person1.fullName()}`);
//or
/*
let person2 = {
    fullName:{
        firstName:"John",
        lastName:"Black"
    },
    age:25,
    eyeColor:"blue",
    vehicles: ["VW", "BMW"]
};
console.log(`Last Name: ${person2['lastName']}`);
*/

//WHILE LOOPS
let i = 0;
while (i < 3) {
    console.log(`i = ${i}`);
    i++;
};
//DO WHILE
do {
    console.log(`i = ${i}`);
    i++;
} while (i <= 3);
//FOR OF
let vehicles = ["VW", "BMW", "Audi", "MB"];
for (let elem of vehicles) {
    console.log(`Name of vehicle: ${elem}`);
};
//FOR
for (let i = 0; i< vehicles.length; i++) {
    console.log(`Name of vehicle: ${vehicles[i]}`);
};
//FOR IN
for (let n in vehicles) {
    console.log(`Name of vehicle: ${vehicles[n]}`);
};
//Exeptions
