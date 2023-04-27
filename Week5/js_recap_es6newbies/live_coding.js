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
function Car(brand, model, color, fuel, doors, year){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
    this.doors = doors;
    this.year = year;
    this.checkTankAmount = function(){
        console.log(`Hey, you need to drive to the next gas station with your ${htis.brand} ${this.model}..`);

    }
};

//create instance
let susanneCar = new Car("Mazda", "3", "grey", "Diesel", 4, 2005);
console.log(susanneCar);