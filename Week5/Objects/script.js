//Task1 Claaasrom project recap
/*
// Arrow function
myArr.forEach((person)=>{
    //code to execute
});

//Function declaration: you can call before, after, inside function declaration
function handleClickLuzern(){
    //code
}

//Assign the function to a variable. Can't be called after
const handleClickLuzern2 = function(){
    //code
}

//Arrow function, most used. Best practice: use for anonyms function
const handleClickLuzer3=()=>{

}

document.getElementById('content').innerHTML+=`
    <div>
`;

//code refectoring

function handleClick(arr){
    document.getElementById(`content`).innerHTML = "";
    arr.forEach((person) => {
        document.getElementById('content').innerHTML+=`
        <div>
        </div>
`;
    })
};


//add event Listeners for click and mouseover
const filterButtons = document.querySelectorAll("button");
filterButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        //console.log(button.getAttribute("id"));
        switch(button.getAttribute("id")){
            case "btn-Luzerner":
                handleClick(luzerner);
                break;
            default:
                handleClick(myArr);
        }
        handleClick();
    })
});

//add event Listeners for mouseover
const images = querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseover", () =>{
        image.classList.add("imgEffect")
    });
    
});
*/

//Task 2
 myArr = [];
 myArr[0] = null; //delate th object set it to null
 delate myArr[0].city // to delate the key:value pair in the

 myArr.forEach(person => {

 });

 function addPerson(name, age, eyeColor, img, city){
    let newObj = {
        name: name,
        age: age,
        eyeColor: eyeColor,
        img: img,
        city: city
    };
    myArr.push(newObj);
 };

 addPerson("Linus", 32, "blue", "", "St. Gallen");

 let tiger = {
    claws: true,
    color: "black and yellow",
    feet: 4,
    type: "mammal",
    foodPreference: "meat",
    giveSound: ()=>{console.log("ROOOAAAR")}
 }

 let cat = {
    claws: true,
    color: "various,
    feet: 4,
    type: "mammal",
    foodPreference: "meat",
    giveSound: ()=>{console.log("miau")}
 }

 let goose = {
    claws: false
    color: "various",
    feet: 2,
    type: "bird",
    foodPreference: "fish",
    giveSound: ()=>{console.log("quack")}
 }

 let fly = {
    claws: false,
    color: "black ,
    feet: 6,
    type: "insect",
    foodPreference: "unknown",
    giveSound: ()=>{console.log("bzzzz")} //to declare a method inside an object
 };

 //object constructor:capitalize best practice; like a function to create as many object as you want
 const Animal = function(name, laws, color, feet, type, foodPreference, sound){
    this.name = name;
    this.claws = claws;
    this.color = color;
    this.feet = feed;
    this.type = type;
    this.foodPreference = foodPreference;
    this.giveSound = () => { console.log(sound)}
 };

 let spider = new Animal(false, "black", 8, "archanid", "flies", "tap tap tap");
 console.log("spider");
 console.log(spider.giveSound());


 function Person(name, age, eyeColor, img, city){
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
    //...
 }