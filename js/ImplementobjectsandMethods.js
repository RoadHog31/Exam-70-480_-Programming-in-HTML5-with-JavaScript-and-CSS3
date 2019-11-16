/*This objective covers how to:
-Implement native objects
-Create custom objects and custom properties for native projects using proto-types and functions
-Implement inheritance
-Implement native methods and create custom methods */

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
//(Extending is another way of thinking about inheritance —
//..an object is extended into another object.) 
//Object.create is a method available from the Object class in the global namespace. 
var popupBook = Object.create(Book.prototype, 
    
    { hasSound: {value:true},
    showPopUp:{ value: function showPop()
    {

            //do logic to show a popup here..

    }}
    }
);

function PopUpBook(){

    //Makes a method call to Book.Call() 
    //This is a call to the constructor of the super class (the class being inherited from). 
    //If the super class has a constructor that takes parameters, 
    //..this method would enable you to pass the parameter values to the super-class constructors 
    //..for object initialization.
    Book.call(this);
}
PopUpBook.prototype = Book.prototype;
PopUpBook.prototype.hasSound = false;
PopUpBook.prototype.showPopUp = function ShowPop() {};
