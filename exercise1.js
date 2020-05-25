//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. 
// Declare a variable for the current temperature then store the Celsius temperature into a variable. 
// Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

		function toCelsius(far){
			var celsius = far - 32;
			celsius = celsius * 5
			celsius = celsius / 9;
			return celsius
		}
		// console.log(toCelsius(90));
		
		function toFahrenheit(cel){
			var fahr = cel / 5 * 9;
			fahr = fahr + 32;
			return fahr;
		}
		// console.log(toFahrenheit(16));






/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and 
// write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"


		function votes(age){
			if (age > 18)
				console.log("yes")			
			else
				console.log("no")			
		}
		// votes(19)
		// votes(12)






/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with 
// "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. 
// (Be sure you separate the string into words, not characters.) After you have finished, use the join() method 
// to change the array back into a string.

		function convArr(str){			
			arrs = str.split(" ");
			console.log(arrs);
			return convStr(arrs);
		}
		// console.log(convArr("There will be hell toupee"));
		function convStr(arr){
			str = arr.join(" ")
			return str
		}


		// console.log(convArr("There will be hell toupee"));
		// console.log(convStr(["Hi", "There", "Neighbor"]))




/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
		function reverseNum(num){
			str = num.toString();
			arrs = str.split("");
			arrs.reverse()
			str = arrs.join("")
			return str;
		}
		console.log(reverseNum(1234567890))




/************************************************************* */
// Problem 5:
// Write a JavaScript function creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

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
		var newCar = new Car("Mitsubishi", "Ecliplse", "blue")
		newCar.year = "2011"
		newCar.getInfo()
		var yourCar = new Car("Honda", "Civic")
		yourCar.getInfo()
		yourCar.year = "1888"
		console.log(yourCar.year)


/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for 
// loop will check if the current number is odd or even and display the output.
		function oddEven(){
			for (i=0; i<16; i++){
				if (i % 2 == 0)
					console.log("even")
				else
					console.log("odd")
			}
		}
		// oddEven();


/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" 
// instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, 
// print "TEKcamp."
		function tekCamp(){
			for (i=1; i<101;i++){
				if (i % 15 == 0)
		    		console.log("TEKcamp");
		    	else if (i % 3 == 0)
		    		console.log("TEK");
		    	else if (i % 5 == 0)
		    		console.log("camp");
		    	else
		    		console.log(i)
			}			
		}
		// tekCamp();
		

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

function thirds(arr){
	for (i=0; i<arr.length; i++){
		if (arr[i] % 3 == 0)
			console.log(arr[i])
	}
}
thirds(nums);



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school. 
// print the school variable to the console.
	// var school = foodArray[6] # has key and value
	var val = foodArray[6]
	var arr = Object.values(val)
	var school = arr[0]
	console.log(school) //only value
	foodArray[6] = 'TEKcamp'

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural. 
// "Potatoes are salty", "Lemon is sour".

function makeSentence(arr, arr2){	
	for (i=0; i<arr.length;i++){
		str = "";
		str += arr[i]
		let a = arr[i].length-1
		// console.log(a, arr[i].charAt(a))
		if (arr[i].charAt(a) == 's')
			str += " are "
		else
			str += " is "
		str += arr2[i]
		console.log(str)
	}
}
makeSentence(foodArray, adjectiveArray)

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array,
// and create a doMath() function that randomly does one of the 4 operations whenever it is run.  
// the doMath() function should print out what mathetmatical function was carried out.  The doMath() function 
// should return the computed value of any operation performed.
const operations = [add = function(num, num2){return num + num2}, subtract = function(num, num2){return num - num2}, multiply = function(num, num2){return num * num2}, divide = function(num, num2){return num / num2}];
function doMath(num, num2, arr) {
	var rando = Math.floor(Math.random() * 4); 
	if (rando == 0){
		console.log("add");
		return add(num, num2);
	}
	if (rando == 1){
		console.log("subtract");
		return subtract(num, num2);
	}
	if (rando == 2){
		console.log("multiply");
		return multiply(num, num2);
	}
	if (rando == 3){
		console.log("divide");
		return divide(num, num2);
	}
};
console.log(doMath(8, 4, operations))
console.log(doMath(8, 4, operations))
console.log(doMath(8, 4, operations))
console.log(doMath(8, 4, operations))


