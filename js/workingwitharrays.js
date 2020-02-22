QUnit.test("A Hello World", 1, function () {

    equal(greeting, "Hello World", "Expectyed Greeting of Hello World");
});

let arrayTest = ["pepporani", "Bacon", "Cheese"];
arrayTest[1] = "Pop!";
console.log(arrayTest);

let arrayTest2 = arrayTest[4]
console.log(arrayTest2);

let pizzaParts = ["pepper", "salt", "Pizza"];
for (var i = 0; i < pizzaParts.length; i++) {
    console.log(pizzaParts[i]);
};

let itWorked = pizzaParts.pop();
console.log(itWorked);


const addtopizzaParts = pizzaParts.push('Ale');
console.log(addtopizzaParts);

let pizzaMeats = ["Pepporami", "ham", "bacon", "meatball", "prosciutto"];
let mySlice = pizzaMeats.splice(1, 2, "spam");

let pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
let meatParts = pizzaMeatParts.toString();

let pizzaMeatParts2 = ['pepperoni', 'ham', 'bacon'];
let newLength = pizzaMeatParts2.unshift('prosciutto');
console.log(mySlice + " " + pizzaMeats + " " + meatParts + " " + newLength);

let various = ["1", 2, "Pumpkin", 0.2, ["Another", "Array"], 355, 5, 10, "Pie!", "#", true];
console.log(various);