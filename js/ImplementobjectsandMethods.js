/*This objective covers how to:
-Implement native objects
-Create custom objects and custom properties for native projects using proto-types and functions
-Implement inheritance
-Implement native methods and create custom methods */

/* In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

All JavaScript values, except primitives, are objects.

You define a function with parameters, you call a function with arguments.*/

//static object in Global namespace
var squareVal = Math.sqrt(144);

//Arrays require an instance to work with them as follows..
//The new keyword tells the runtime to allocate a new object of the type specified.
var listofPrimeNumbers = new Array(1,2,3,5,7,11,13,17,19,23);

//wrapper objects allow you to access Methods on the declared variables..
//String and integer objects wrapper created dynamically by Javascript runtime. 
var txt = "my long string";
//access Methods on txt
var index = txt.indexOf("long, 0");

var num = 5;
//access Methods on num
var exp = num.toExponential(5);

//JavaScript consists of objects. Everything in JavaScript is an object. 
//Each object is based on a prototype. Whenever you create a new instance of an object, 
//that instance is based on the object’s prototype.
//Creating custom objects by the developer..
//You can also give the book object functionality as follows. 
//This object may be used in a click event?
var book = {
    ISBN: "55555555",
    Length: 560,
    genre: "programming",
    covering: "soft",
    author: "john Doe",
    currentPage: 5,
    title: "My Big Book of Wonderful Things",
    //flipTo s the Method alias for the object.
    flipTo: function flipToAPage(pNum){
        this.currentPage = pNum;
    },
    turnPageForward: function turnForward() {
        this.flipTo(this.currentPage++);
    },
    turnPageBackward: function turnBackWard(){
        this.flipTo(this.currentPage--);
    }
}

//Object alias used. If function name used "flipToAPage" will through an exception. 
book.flipTo(15);

/* If you plan to use an object often, consider creating a prototype for it 
so that you can construct one whenever you need it.*/
var books = new Array( book(), book(), book(), book());
//You can now initialise each book object as and when it is needed. 
books[0].Length

function Book(){

    //just creates an empty book. 
}

function Book(title, length, author){

    this.title = title;
    this.Length = length;
    this.author = author;
    
}

Book.prototype = {

    ISBN: "",
    Length: -1,
    genre: "",
    covering: "",
    author: new Author(),
    currentPage: 0,
    title: "",
    //Alias flipTo:
    flipTo: function flipToAPage(pNum) {
        this.currentPage = pNum;
    },
    //Alias turnPageForward
    turnPageForward: function turnForward(){
        this.flipTo(this.currentPage++);
    },
    //Alias turnPageBackward
    turnPageBackward: function turnBackWard(){
        this.flipTo(this.currentPage--);
    }    
};

function Author(){
}

function Author(firstName, lastName, gender)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

Author.prototype = {

    firstName: "",
    lastName: "",
    gender:"",
    BookCount: 0
}

//Now, the book’s Author is a custom object instead of just a string. 
//This provides for more extensibility in the design.
var books = new Array(new Book(), new Book("First Edition", 350, new Author("Stephen", "Pino", "M")));

//Implementing inheritance...
//The Object.prototype is on the top of the prototype inheritance chain:
//Date objects, Array objects, and Person objects inherit from Object.prototype.
//( Extending is another way of thinking about inheritance —
//..an object is extended into another object.) 
//Object.create is a method available from the Object class in the global namespace. 
//Essentially, you define this additional prototype information inline with the object creation. 
//Creating a prototype here...
var popupBook = Object.create(Book.prototype, 
    
	//Alias..
    { hasSound: {value:true},
    showPopUp:{ value: function showPop()
    {

            //do logic to show a popup here..

    }}
    }
);

function PopUpBook(){

    //Makes a method call to Book.call() 
    //This is a call to the constructor of the super class (the class being inherited from). 
    //If the super class has a constructor that takes parameters, 
    //..this method would enable you to pass the parameter values to the super-class constructors 
    //..for object initialization.
    Book.call(this);
}
//Inheritance from a book prototype. 
PopUpBook.prototype = Book.prototype;
PopUpBook.prototype.hasSound = false;
PopUpBook.prototype.showPopUp = function ShowPop() {};

//JavaScript Object Constructor Function example (start with capitals)
// Constructor function for Person objects
//In a constructor function "this" does not have a value... 
//It is a substitute for the new object. 
//The value of "this" will become the new object when a new object is created.
//Also to add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//Objects of the same type are created by calling the constructor function with the new keyword:
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

//JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster.
var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object 

//ES5 New Object Methods
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};
// Change a property
Object.defineProperty(person, "language", {value : "NO"}); 

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)











