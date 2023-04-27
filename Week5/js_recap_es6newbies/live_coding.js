//Objects
const car = {
    brand: "Mazda",
    model: "3",
    color: "grey",
    fuel: "Diesel",
    doors: 4,
    year: 2005,
    checkTankAmount: function(){
        console.log(`Hey, you need to drive to the next gas station with your ${htis.brand} ${this.model}.`);

    }
};

car.checkTankAmount();

//object constructor
function Cars(brand, model, color, fuel, doors, year){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
    this.doors = doors;
    this.year = year;
    this.checkTankAmount = function(){
        console.log(`Hey, you need to drive to the next gas station with your ${htis.brand} ${this.model}.`);

    }
};

//create instance
let susanneCar = new Cars("Mazda", "3", "grey", "Diesel", 4, 2005);
console.log(susanneCar);

//class vehicle - car, motorcycle, truck, plane, ship, bicycle
class Vehicle {
    constructor(brand, model, color, year){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Car extends Vehicle {//is a subclass of Vehicle, iheriting principles
    //always has a constructor
    constructor(brand, model, color, fuel, doors, year){
        super(brand, model, color, year);//to add parameters
        this.fuel = fuel;
        this.doors = doors;
    }
    checkTankAmount = function(){
        console.log(`Hey, you need to drive to the next gas station with your ${htis.brand} ${this.model}.`);

    }
};

let mustafaCar = new Car("Ford", "Fiesta", "white", "Petrol", 2, 1990);
console.log(mustafaCar);