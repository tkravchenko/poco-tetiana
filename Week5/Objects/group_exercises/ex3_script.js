let recipe = {
    title: "Soup",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log(recipe.ingredients);
console.log(`Ingredients: ${recipe.ingredients[0]}, ${recipe.ingredients[1]}, ${recipe.ingredients[2]}`);

function Recipe(title, servings, ingredients){
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
}

let xmasSoup = new Recipe("Soup", 2, ["cinnamon", "cumin", "cocoa"]);
//console.log(xmasSoup);
//Object.values(xmasSoup);
//Object.keys(xmasSoup);
//Object.entries(xmasSoup);
//console.log(xmasSoup.title); // dot notation
//console.log(xmasSoup["title"]);

Object.keys(xmasSoup).forEach( key =>{
    //console.log(key)
    //console.log(typeof((key));
    if(typeof(xmasSoup[key]) === "object"){
        console.log(key, xmasSoup[key].toString());
    }else if (typeof(xmasSoup[key]) === "number"){
        console.log("serves", xmasSoup[key])
    }else{
        console.log(xmasSoup[key]);
    }
});
