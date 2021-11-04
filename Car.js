import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    displayInfo() {
        console.log(`It is car model: ${this.model};
        made in year: ${this.year};
        car max speed: ${this.maxSpeed};`);
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`);
    }
}

export default Car;