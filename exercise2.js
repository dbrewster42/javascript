//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

// for(let i=0; i<10; i++) {
//     console.log(" the value of i in the loop is : " + i);
// }
let i = 0;
while (i < 10){
     console.log(" the value of i in the loop is : " + i);
     i++;
}






/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a 
// function expression. run all the functions after defining them, and print the answer to the console.

// first  = (30 + 2) * 20
// second = Math.pow(10, 2)
// answer = first / second;
// console.log(answer)

var first = function(a, b, c){
    return (a + b) * c;
}
var second = function(a, b){
    return Math.pow(a, b)
}
var answer = function(a, b){
    return a / b;
}
var f = first(30, 2, 20)
var s = second(10, 2)
//console.log(f, s)
console.log(answer(f, s))

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 
//'truthy' or 'falsy', along with your reasoning why using String interpolation.
values : 
20 
console.log(20, "truthy, because any non 0 value is true")
0 
console.log(0, "falsy, because 0 = false")
"zero"; 
console.log("zero", "truthy, because it is a string")
const zero = 20; 
console.log(zero, "truthy, because it is not 0")
null 
console.log(null, "falsy because null is falsy")
"0"
console.log("0", "truthy because again it is a string")
!"" 
console.log(!"", "Truthy because it is a double negative")
{}
console.log({}, "Ummm, falsy I think since it is an empty expression")
() => {console.log("hello TEKcamp!");}
console.log(() => {console.log("hello TEKcamp!")}, "truthy because an arrow functio returns value by default")
125
console.log(125, "truthy, because any non 0 value is true")
undefined
console.log(undefined, "falsy because its not defined")
""
console.log("", "falsy since it is an empty string")


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

// if(day === "monday") {
//     console.log("we got a long week ahead of us...");
// } else if(day === "tuesday") {
//     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
// } else if (day === "wednesday") {
//     console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//     console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//     console.log("TGIF.  Friday truly is the best day of the week!")
// } else {
//     console.log("It's a weekend!")
//}

switch(day) {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");       
}



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}
console.log(age > 21 ? 'adult' : 'minor')
console.log(age > 12 && age <= 19 ? 'teen' : 'not a teenager')
age > 65 ? console.log("retired") : console.log("still working")

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  
//Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, 
making sure to utilize the 'this' keyword.
*/
var devon = {
    name: 'Devon Brewster',
    age: 32,
    gender: "Male",
    hobbies: ['reading', 'sports', 'playing video games'],
    profession: "Software Developer",
    education: "Coding Boot Camp",
    learn: function(name){
        console.log(this.name);
    },
    listHobbies: function(hobbies){
        for (let i=0; i<this.hobbies.length; i++)
            console.log(this.hobbies[i])
    }
}
console.log(devon)
devon.learn();
devon.listHobbies();


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  
//Try to come up with a realistic set of properties and methods that would accurately describe that object.  
//In at least one of your methods, use the this keyword to refer back to one of the properties you defined on 
//this object literal.  

cowboys = {
    name: "Cowboys",
    city: "Dallas",
    SuperBowls: 5,
    SBappearances: 8,
    owner: "Jerry Jones",
    division: "NFC East",
    info: function(name, city, division){
        console.log("The " + this.city, this.name, "play in the " + this.division)
    },
    SBlosses: function(SuperBowls, SBappearances){
        return this.SBappearances - this.SuperBowls;
    }
}
console.log(cowboys.SBlosses())
cowboys.info();



/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

function dataTypes(){
    console.log("I like Numbers because they can be divided and multiplied and many other operations.");
    console.log("I like Strings because I like my name and my name is a string.");
    console.log("I like Objects most of all because they can hold all sorts of information.")
}



/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function 
// fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the 
// parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message 
// that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a 
// variable for growth rate (r) of 5%. Console log your calculation.

//Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis 
//and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  
function stockGain(basis, yrs){
    var message = " is how much the stock has increased";
    function growthRate(yrs){
        var r = .05;
        var increase = 0;
        for (i=0; i<yrs; i++){
            increase = basis * r + increase
            console.log(increase)
            basis = basis + increase
        }
        console.log (increase)
        return increase + message;
    }
    return growthRate(yrs);
}
var futureValue = stockGain(1000, 5);
console.log(futureValue);
