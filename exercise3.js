//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true,
// otherwise it should return false. 
function ifEmpty(str){
	if (str)
		return false
	else
		return true
}

console.log(ifEmpty(""))
/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output 
//uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

function newStr(str){
	var newStr = ""
	var arrs = str.split(" ")
	for (let i=0; i<arrs.length-1; i++){
		newStr += arrs[i] + " "
	}
	newStr += "cool!"
	return newStr;
}
console.log(newStr("Learning JavaScript is fun!"));

/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared 
// value of each number from the first array. Use an arrow function and one of the built-in array methods. 

hello = () => {
	arr = []
	bigArr = []
	for (let i=1; i<6; i++){
		arr.push(i)
		p = i * i
		bigArr.push(p)
	}
	return [arr, bigArr]
}
console.log(hello())
/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 
//1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the 
//numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

arr = [1, 3, 5, 7, 9, 1, 3, 5]
greater = (arr) => {
	newArr = []
	for (let i=0; i<arr.length; i++){
		if (arr[i] > 3)
			newArr.push(arr[i])
	}
	return newArr
}
console.log(greater(arr))

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program 
//that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

other = [5, 3, 1, 4, 7]
summer = (arr) => {
	let sum = 0;
	for (let i =0; i<arr.length; i++){
		sum += arr[i]
	}
	return sum;
}
console.log(summer(other))

/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired 
//with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with 
// the complementary strand. For example, a string of "GCTA" would return an array of 
// ["C", "G", "A", "T"].  

function pairs(str){
	arr = []
	for (let i=0; i<str.length; i++){
		if (str.charAt(i) == 'G')
			arr.push('C')
		else if (str.charAt(i) == 'C')
			arr.push('G')
		else if (str.charAt(i) == 'A')
			arr.push('T')
		else if (str.charAt(i) == 'T')
			arr.push('A')
	}
	return arr
}
console.log(pairs("GCTA"))

/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical
//values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  
//Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,
"true-dat","nice","one","two","three","3","tea",[]];
//console.log(numbers)
numbers[13] = 1
numbers.pop();
numbers[numbers.length-3] = 3
numbers[numbers.length-4] = 2
numbers[numbers.length-5] = 1
//console.log(numbers)
// function numerize(arr) {
//     for(let i=0; i<arr.length; i++){
//     	if (typeof arr[i] != 'number'){
//     		//console.log(i, arr[i], typeof arr[i])
//     		arr[i] = parseInt(arr[i], 10)
//     		if (!arr[i]){    	
//     			//console.log("yup")		
//     			let j = i
//     			while (j < arr.length){
//     				arr[j] = arr[j+1]
//     				j++
//     			}
//     			arr.pop()
//     			i--    			
//     		}
//     	}
//     }
//     return arr
// }
function numerize2(arr){
	const noS = arr.filter(num => typeof(num) == 'number')
	return noS
}
// const fun = numerize(numbers)
const fun2 = numerize2(numbers)
// console.log(fun)
console.log(fun2)
function maxNumber(arr) {	
	let maxi = Math.max(...arr)	
	return maxi
}	
console.log(maxNumber(fun2))	
// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(arr, desc=false) {
    res = arr.sort(function(a, b){return b-a})
    return res
};
console.log(sortNums(fun2))



/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is
// the name of the data type.
//  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
const arras = [1, 2, 3]
const obj = {company : "TEKsystems"}
mapObj.set('"Stringy strings"' , "string");
mapObj.set(true , "boolean");
mapObj.set(arras , "array");
mapObj.set(42 , "number");
mapObj.set(obj,"object");


console.log(mapObj.has(obj)); 
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  
//Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.
console.log("It was false because the obj was nested", mapObj)
//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array
// methods to do this. 
// Example output : ['string',number','boolean',array','object']
function createArr(map){
	arr = []	
	for ([key, value] of map.entries()) {
		arr.push(value)
	}
	return arr
}
console.log(createArr(mapObj))
/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
function rev(arr){
	newArr = []
	for (let i=arr.length-1; i>-1; i--){
		newArr.push(arr[i])
	}
	return newArr
}
console.log(ones)
console.log(rev(ones))
/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function. 
// It should return the output of the callback function.

function performer(cb) {
   return cb()
}
function cb(){
	return "Chicken"
}
console.log(performer(cb))
/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining 
//what the feature is and why it is useful.
const comment = "ES6 introduced classes to Javascript which makes it able to pretend to be object-oriented which is very useful. Classes are much easier to write now"
//Example
class Car {
	constructor(make, model, color="black"){
		this.make = make;
		this.model = model;
		this._color = color;
		this.year = "2015"
	}			
	set year (year) {
		this._year = year
	}
	get year () {
		return this._year
	}
	getInfo(){
		console.log("This is a " + this._color + " " + this.make + " " + this.model + " made in " + this._year + ".")
	}
}