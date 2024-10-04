// // JavaScript is a high level(frienly language to write code with) 
// // just-in-time compiled programming language(code is compiled during execution rather than before execution)
// // that conforms to the ECMAScript specification( standard that js adheres to which makes it possible for our js code to run in any browser)

// // nodejs is a JavaScript runtime environment that enables us to run JavaScript outside web browser.
// // js is the most popular language

// // Log a statement using console.log 
// // console.log('hellow people')
// // once const variable is initialized, it can't be re-assigned another value
// // Data Types 
// // primitive - This is writen as actual value like
// // String - sequence of characters that represent text value
// // Number - represents integer
// // Boolean - logical entities that can only be true or false
// // undefined - a variable is declared but not assigned a value. represent values that are not assigned
// // let firstName
// // console.log(firstName)
// // const data = null
// // console.log(data)
// // null - this is used to indicate the absence of any object value. special value that represents empty or unknown value in js
//// let x = null
// // console.log(x)
// // BigInt
// // Symbol

// // Non primitive - this is the collection of values
// // Objects
// // Array 
// // const student = {
// //     firstName: 'Ceejay', //firstName is key and Ceejay is value
// //     lastName: 'Larry',
// //     age: 23
// // }
// // console.log(`my name is ${student.firstName} ${student.lastName}, and i am ${student.age}`)
// // const oddNumber = [1,3,5,7,9]
// // console.log(oddNumber[2])
// // variables
// // const age = 25
// // console.log(age)

// // let result
// // console.log(result)

// // let x = 10
// // let y = 5
// // console.log(x % y) // ++x increment x by 1

// // Prefix (++x): The variable is incremented first, and the new value is used in the expression.
// // Postfix (x++): The current value is used in the expression first, and then the variable is incremented.

// // operators
// // Operators are a special symbol used to perform operations on values and variables. 
// // Assignment Operators // let x = 10
// // Arithmetic Operators // +,-,*,/,%
// // Comparison Operators // returns true or false based on if what you are comparing is true or false. Mostly used in loops
// //console.log(x !== y) //==,===,!==,<,>,<=,>=
// // Logical Operators // used to perform logical operations and return either true or false. they are very helpful when combining 
// // comparison operators results to make a decision. 
// // const isValidNumber = x > 8 || 2 > y // x > 8 is an operand
// // console.log(isValidNumber)
// // String Operators // + performs addition when used with numbers and concatination when used with string
// // console.log('larry '+'ceejay')
// // Other Operators // ternary operator
// // let z = 111
// // const isEven = z % 2 == 0 ? 'Number is even' : 'Number is odd'
// // console.log(isEven)
// // equality
// // === strict equality - this takes not of the data types. if the data types are not the same, it returns false
// // == loose equal - this doesnot care about the data type
// // const firstNum = '1' //numeric string type
// // const secondNum = 1
// // const total = firstNum + secondNum
// // console.log(firstNum === secondNum) // strict equal === 
// // template strings or back-tics
// // console.log(`i love javascript soo much "this is good" and 'am loving it'`) // accepts multiline. 
// // console.log("i love javascripti'm doing good")
// // console.log('i love '+ firstNum +' because it is '+secondNum)
// // // type conversion
// // // implicit - where js automatically convert  the type to be able to run the code 
// // console.log('bruce' / 1) //'bruce'/ 2
// // // explicit - where you manually convert the type 
// // console.log(Number('33.9')) // parseInt, parseFloat
// // console.log(String(500)) //(500).toString()
// // console.log(Boolean(0)) //everything returns true except null,undefined,'',NaN,0

// // let age = 45; // You can change this value to test different ages

// // if (age >= 0 && age <= 12) {
// //     console.log("Child");
// // } else if (age >= 13 && age <= 59) {
// //     console.log("Adult");
// // } else if (age >= 60) {
// //     console.log("Old man");
// // } else {
// //     console.log("Invalid age");
// // }

// // let age = 5; // You can change this value to test different ages

// // switch (true) {
// //     case (age >= 0 && age <= 12): // If this condition is true, execute this case
// //         console.log("Child");
// //         break;
// //     case (age >= 13 && age <= 59): // If this condition is true, execute this case
// //         console.log("Adult");
// //         break;
// //     case (age >= 60): // If this condition is true, execute this case
// //         console.log("Old man");
// //         break;
// //     default: // If none of the cases match, execute this
// //         console.log("Invalid age");
// // }
// // let grade = 'F';

// // switch (grade) {
// //     case 'A': console.log('Excellent');
// //         break;
// //     case 'B': console.log('Good');
// //         break;
// //     case 'C': console.log('Credit');
// //         break;
// //     case 'D': console.log('Weak Pass');
// //         break;
// //     case 'F': console.log('Fail');
// //         break;
// //     default: console.log('Invalid Grade');
// // }

// // let grade = 'A'
// // if (grade === 'A') {
// //     console.log('Excellent')
// // } else if (grade === 'B') {
// //     console.log('Good')
// // }else if (grade === 'C'){
// //         console.log('Credit')
// // } else {
// //     console.log('Invalid Score')
// // }
// // In JavaScript (and most programming languages),
// //  a function is a reusable block of code designed to perform a specific task. 
// //  You can think of it as a way to group a series of statements together that 
// //  you can call and execute whenever needed.

// // Defining a Function
// // A function is defined using the function keyword, followed by:

// // Function name: A name to refer to the function.
// // Parameters (optional): Variables that accept input when the function is called.
// // Function body: The code that runs when the function is called.
// // function greet() {
// //     console.log('Goodmorning')
// // }
// // greet()

// // function greetPerson(person) {
// //     console.log('Goodmorning to ' + person)
// // }
// // greetPerson('fred')
// // greetPerson('mac')

// // A function can also return a value using the return keyword.
// // function productOfNum(num1, num2, num3) {
// //     return num1 * num2 * num3
// // }
// // let result = productOfNum(5, 4, 5)
// // console.log(result)

// // const sumOfNum = (a, b) => a + b
// // console.log(sumOfNum(2,4))

// // Data structure 
// What Are Data Structures?
// A data structure is a way to organize, store, and manage data in a computer so that 
// it can be accessed and modified efficiently. Data structures are essential because 
// they provide a structured way to store data for various algorithms to operate on it effectively.

// In programming, choosing the right data structure is important to optimize performance
// and simplify the implementation of algorithms. Each data structure is designed for specific 
// types of operations, like searching, inserting, deleting, or iterating over the data.

// // Array - An array is a special variable, which can hold more than one value
// const student = ['fred','mac','jacob','joy'] //Array literal method for readability,
// // simplicity and execution speed or new Array()
// // An array is a special type of object 
// console.log(typeof(student))
// // you can access an array element by referring to the index number 
// console.log(student[0]) // school.at(0)
// student[0] = 'convenant' // changing an array element
// // array methods
// // length,at,pop,push,join,includes,shift,unshift,concat,copyWithin,flat,splice,slice,indexOf
// console.log(student[student.length - 1]) // or student.at(-1) print the last element in the array
// console.log(student.length)
// student.push('Kingsley') // student.pop() removes the last element from an array
// console.log(student) // to convert to string use student.toString(). Join also converts 
// to string but specifies the seperator. e.g student.join(" * ")
// console.log(Array.isArray(student)) // how to chech for an array

// // unshift - adds a new element(s) to an array (at the beginning) // student.unshift('mike','james')
// // shift - removes the first array element // student.shift()
// concat() - creates new array by merging existing arrays
// const boys = ['mike','obi']
// const girls = ['mary','grace']
// const man = ['john','peter']
// const everyOne = boys.concat(girls,man)
// console.log(everyOne)

// // splice - removes/add an element starting from a given index to how many elements you want to remove and element you want to replace it with 
// const fruits = ['Banana','Orange','Mango','Pawpaw']
// fruits.splice(2,1,'Apple') // removes one element starting from index 2. 
// console.log(fruits)

// // includes() - This is used to determine if an element is included in an array or not 
// const pickedFruit = 'pear'
// if (fruits.includes(pickedFruit)) {
//     console.log('Included')
// } else {
//     console.log('Not included')
// }

// The slice() method is used to extract a section of an array
// (or string) and return it as a new array (or string), without 
// modifying the original one. It works by selecting elements based on their index.

// let fruit = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// // let slicedFruits = fruit.slice(2,4); // fruit.slice(2) Slices from index 2 to the end.
// // fruit.slice(2,4) slices from index 2 to index 3, excluding index 4
// console.log(slicedFruits); // Output: ["Orange", "Mango", "Grapes"]


// let fruit = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// let slicedFruits = fruit.slice(1, 3); // Slices from index 1 to index 3 (exclusive)
// console.log(slicedFruits); // Output: ["Banana", "Orange"]


// reverse() - reverse the array from last to first 

// const fruit = ['mango','pawpaw',['orange','cashew',['pear']]] // Nested array
// console.log(fruit.flat(2))




// // An array of objects is a collection where each element is an object, and each object can have its own set of properties and values.
// let people = [
//     {
//       name: "John",
//       age: 25,
//       city: "New York"
//     },
//     {
//       name: "Jane",
//       age: 30,
//       city: "Los Angeles"
//     },
//     {
//       name: "Mike",
//       age: 35,
//       city: "Chicago"
//     },
//     {
//       name: "Sara",
//       age: 28,
//       city: "Houston"
//     }
//   ];
  
//   // Accessing the array of objects
//   console.log(people[0].name);  // Output: "John"
//   console.log(people[2].age);   // Output: 35

//   let students = {
//     student1: {
//       name: "John",
//       age: 18,
//       hobbies: ["Football", "Reading", "Coding"]
//     },
//     student2: {
//       name: "Jane",
//       age: 20,
//       hobbies: ["Dancing", "Drawing", "Cooking"]
//     },
//     student3: {
//       name: "Mike",
//       age: 19,
//       hobbies: ["Gaming", "Swimming", "Music"]
//     },
//     student4: {
//       name: "Sara",
//       age: 22,
//       hobbies: ["Photography", "Running", "Traveling"]
//     }
//   };
  
//   // Accessing the object of arrays
//   console.log(students.student1.name);     // Output: "John"
//   console.log(students.student2.age);      // Output: 20
//   console.log(students.student3.hobbies[2]);  // Output: ["Gaming", "Swimming", "Music"]
  
// function myPersonalDetails(name,age,state){
//     return 'my name is ' + name + ' i am ' + age + ' years old and my state is ' + state 
// }
// console.log(myPersonalDetails('ceejay',100,'Enugu'))

// string methods - .length, toUpperCase, toLowerCase, charAt(3),slice(2,6) or slice(2,-5),concat("naveen".concat("james")),
// split,includes,replace,replaceAll,trim()(removes whitespaces in start and end),
// startsWith('j'),endsWith('k')(returns true or false based on if a character starts or ends with j or k respectively),repeat(2)
// const str = 'Javascript'
// console.log(str.replace('v','g'))

// const strs = "javascript is very good"
// const result = strs.split(' ')
// console.log(result[2])

// const ages = [22,3,33,12,13,14,35,20,21,19,18]
// ages.forEach(function(age){
//     console.log(age)
// })

// // const canDrinkBear = []
// // for(let i = 0; i < ages.length; i++){
// //     if(ages[i] >= 18){
// //         canDrinkBear.push(ages[i])
// //     }
// // }
// // console.log(canDrinkBear)

// const canDrinkBear = ages.filter((age) => age >= 18)
// console.log(canDrinkBear.reverse())

// MATHS METODS
// 1. Math.abs(x)
// Description: Returns the absolute value of a number (i.e., it removes any negative sign).
// Example:
// javascript
// Copy code
// console.log(Math.abs(-10));  // Output: 10
// 2. Math.round(x)
// Description: Rounds a number to the nearest integer.
// Example:
// javascript
// Copy code
// console.log(Math.round(4.7));  // Output: 5
// console.log(Math.round(4.4));  // Output: 4
// 3. Math.ceil(x)
// Description: Rounds a number up to the nearest integer.
// Example:
// javascript
// Copy code
// console.log(Math.ceil(4.1));  // Output: 5
// 4. Math.floor(x)
// Description: Rounds a number down to the nearest integer.
// Example:
// javascript
// Copy code
// console.log(Math.floor(4.9));  // Output: 4
// 5. Math.max(x, y, ...)
// Description: Returns the largest of zero or more numbers.
// Example:
// javascript
// Copy code
// console.log(Math.max(1, 3, 2));  // Output: 3
// 6. Math.min(x, y, ...)
// Description: Returns the smallest of zero or more numbers.
// Example:
// javascript
// Copy code
// console.log(Math.min(1, 3, 2));  // Output: 1
// 7. Math.pow(base, exponent)
// Description: Returns the value of a number raised to the power of another number (exponentiation).
// Example:
// javascript
// Copy code
// console.log(Math.pow(2, 3));  // Output: 8 (2^3)
// 8. Math.sqrt(x)
// Description: Returns the square root of a number.
// Example:
// javascript
// Copy code
// console.log(Math.sqrt(16));  // Output: 4
// 9. Math.random()
// Description: Returns a random number between 0 (inclusive) and 1 (exclusive).
// let randomNum = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
// console.log(randomNum);
// let randomNumber = Math.floor(Math.random() * 10000000000);  // Random 10-digit number
// console.log(randomNumber);
// 10. Math.trunc(x)
// Description: Returns the integer part of a number by removing any fractional digits.
// Example:
// javascript
// Copy code
// console.log(Math.trunc(4.9));  // Output: 4
// 11. Math.sign(x)
// Description: Returns the sign of a number. It returns:
// 1 if the number is positive,
// -1 if the number is negative,
// 0 if the number is zero.
// Example:
// javascript
// Copy code
// console.log(Math.sign(10));   // Output: 1
// console.log(Math.sign(-10));  // Output: -1
// console.log(Math.sign(0));    // Output: 0
// 12. Math.PI
// Description: Returns the value of Pi (approximately 3.14159).
// Example:
// javascript
// Copy code
// console.log(Math.PI);  // Output: 3.141592653589793
// 13. Math.E
// Description: Returns Euler's number (approximately 2.718), the base of natural logarithms.
// Example:
// javascript
// Copy code
// console.log(Math.E);  // Output: 2.718281828459045
// 14. Math.log(x)
// Description: Returns the natural logarithm (base e) of a number.
// Example:
// javascript
// Copy code
// console.log(Math.log(Math.E));  // Output: 1
// 15. Math.exp(x)
// Description: Returns e^x, the exponential function.
// Example:
// javascript
// Copy code
// console.log(Math.exp(1));  // Output: 2.718281828459045 (e^1)
// 16. Math.sin(x), Math.cos(x), Math.tan(x)
// Description: Trigonometric functions that return the sine, cosine, and tangent of an angle (in radians).


// LOOP

// loops are used to repeatedly execute a block of code as long as a certain condition is true.
// for loop 
// Use Case: When you know in advance how many times the loop should run.
// Structure:

// Initialization: Typically used to initialize the loop counter.
// Condition: Checked before each iteration. If false, the loop stops.
// Increment/Decrement: Usually updates the counter after each iteration.

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }
// print even numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// for(let i = 2; i <= 20; i+=2){
//     console.log(i)
// }
// const ages = [22,3,33,12,13,14,35,20,21,19,18]
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] % 2 !== 0){
//         console.log(ages[i])
//     }
// }
// const results = ages.filter(function(x){
//     return x % 2 === 0
// })
// console.log(results)

// for(let i = 2; i<=10; i+=2){
//     console.log(i)
// }
// for(let i = 1; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


// while loop 
// Use Case: When you don’t know how many iterations are required, but you want to keep looping as long as a condition is true.

// Structure:

// The condition is checked before each iteration.
// If the condition is false, the loop will not run.
// let i = 1
// while (i < 10) {
//     console.log(i)
//     ++i
// }


// do...while loop will execute the code first before checking if the condition is true or false 
// Use Case: When you need the code block to run at least once, regardless of the condition.

// Structure:

// The condition is checked after each iteration, meaning the loop will always run at least once.
// let i = 14
// do{
//     console.log(i)
//     i++
// } while (i <= 10)


// HIGHER ORDER ARRAY METHODS
const numbers = [5,3,7,6,-33,4,9,8]

const companies = [
    {
        name: "Tech Innovations",
        yearFounded: 2005,
        location: "San Francisco, USA",
        owner: "Alice Johnson",
        revenue: 8000000
    },
    {
        name: "Global Solutions",
        yearFounded: 1998,
        location: "London, UK",
        owner: "Michael Thompson",
        revenue: 5000000
    },
    {
        name: "Eco Energy",
        yearFounded: 2010,
        location: "Berlin, Germany",
        owner: "Alice Johnson",
        revenue: 3000000
    },
    {
        name: "HealthPlus",
        yearFounded: 2015,
        location: "London, UK",
        owner: "David Smith",
        revenue: 1000000
    },
    {
        name: "FinTech World",
        yearFounded: 2012,
        location: "New York, USA",
        owner: "Alice Johnson",
        revenue: 800000
    },
    {
        name: "Smart Solutions",
        yearFounded: 2000,
        location: "London, UK",
        owner: "Hiroshi Tanaka",
        revenue: 2000000
    },
    {
        name: "AgriTech Corp",
        yearFounded: 2007,
        location: "Nairobi, Kenya",
        owner: "Amina Ngugi",
        revenue: 4000000
    },
    {
        name: "Digital Dreams",
        yearFounded: 2018,
        location: "Sydney, Australia",
        owner: "Emily Brown",
        revenue: 6000000
    },
    {
        name: "Green Ventures",
        yearFounded: 2011,
        location: "Stockholm, Sweden",
        owner: "Lars Johansson",
        revenue: 5000000
    },
    {
        name: "Urban Logistics",
        yearFounded: 1995,
        location: "London, UK",
        owner: "Jean-Luc Dupont",
        revenue: 8000000
    }
];


// This array method is used to Do something for every item in the list.
// Example: Imagine you have a list of numbers, and you want to print each one.

// const result = numbers.forEach(function(x,index){
//     console.log(index+1 +" : "+ x)
// })


// A callback function in JavaScript is a function that is passed as an argument to another
// function and is executed after some operation has been completed. Callbacks are often used 
// in asynchronous programming, where operations like reading files, making HTTP requests, or 
// waiting for timers take some time to complete.


//This array method Make a new list by changing every item in the original list."
//Example: If you have a list of numbers, you can create a new list where every number is doubled.

// const result = function double(x){
//     return x * 2
// }
// console.log(numbers.map(result)) or
// const result = numbers.map(function(x){
//     return x * 2
// })
// console.log(result)

// This method Create a new list, but only keep the items that meet a condition."
// Example: If you have a list of ages, you can get a new list of people who are older than 18.

// const result = numbers.filter(function(x){
//     if(x > 4){
//         console.log(x)
//     }
// }) 
// or 
// const recentCompanies = companies.filter(function(company){
//     return company.yearFounded > 2010
// })
// console.log(recentCompanies)

// // This array method Take all the items and combine them into one value.
// // Example: If you have a list of prices, you can add them up to get the total.
// const totalRevenue = companies.reduce(function(total, company) { //accumulator and current value
//     return total + company.revenue;
// }, 0);

// console.log(`Total Revenue: $${totalRevenue}`);

// Output:
// Total Revenue: $57500000


// const result = numbers.sort((a,b) => a-b)
// console.log(result)

// const result = numbers.find((x) => x === 4) //findIndex
// console.log(result)

// const result = numbers.some((x) => x > 4) // this returns true or false if one or some of the array 
// // elements satisfies or doesn't satisfy the condition respectively.
// console.log(result)
// or
// const hasUSCompany = companies.some(function(company) {
//     return company.location.includes("USA");
// });

// console.log(hasUSCompany);

// // const result = numbers.every((x) => x > 4) // every array element must satisfy the condition for it to be true
// // console.log(result) or

// const allFoundedAfter1990 = companies.every(function(company) {
//     return company.yearFounded > 1990;
// });

// console.log(allFoundedAfter1990);

// Output: true

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].owner === 'Alice Johnson'){
//         console.log(companies[i])
//     }
// }


// Document Object Model manupulation

// What is DOM?
// DOM (Document Object Model) manipulation in JavaScript allows you to dynamically modify the content, structure, 
// and style of a web page. The DOM represents the HTML document as a tree of nodes, where each node represents an element, 
// attribute, or text within the document.

// What is nodes and type of nodes
// In the Document Object Model (DOM), a node represents a single point in the DOM tree.

// Document Node: The entire document.
// Element Nodes: <html>, <head>, <title>, <body>, <div>.
// Text Nodes: "DOM Example", "Hello, World!".
// Attribute Nodes: id="myDiv" (associated with <div>).

// Selecting elements using DOM 

// getElementById - This method returns an element object that represents an HTML element 
// const element = document.getElementById("text")
// console.log(element)

// getElementByName - works well with name input
// const element = document.getElementsByName('msg')
// console.log(element)

// getElementsByTagName - This method accepts a tag name and returns a live HTMLCollection of element.
// It selects all elements with a specific tag name (like div, p, a).
// const elements = document.getElementsByTagName('h1');
// console.log(elements)

// getElementsByClassName - This method selects all elements that have a specific class name. 
// It returns an HTMLCollection (array-like object).

// const elements = document.getElementsByClassName('text');
// console.log(elements)
// const container = document.getElementById('container')
// const elements = container.getElementsByClassName('text')
// console.log(elements)

// querySelector - This method selects the first element that matches a CSS selector.
// const elements = document.querySelector('.text');
// console.log(elements)

// querySelectorAll - This method selects all elements that match a CSS selector. It returns a NodeList (array-like object).
// const elements = document.querySelectorAll('.text');
// console.log(elements)


// Traversing elements

// Getting parent node/element from child node/element

// const elements = document.querySelector('.text')
// console.log(elements.parentNode)

// Getting child node/element from parent node/element
// const elements = document.querySelector('#container')
// console.log(elements.lastElementChild) //.children gets all the child elements, .firstElementChild gets the first element, .lastElementChild gets the last element

// Getting previous and next sibling
// const elements = document.querySelector('.text')
// console.log(elements.nextElementSibling) //.previousElementSibling gets the previous element of the sibling, .nextElementSibling gets the next element of the same sibling

// appendChild - used to add a node to the end of the list of child nodes of a specified parent node 

// const element = document.createElement('div')
// element.innerHTML = "<p id='text'>hello</p>"
// element.id = 'title'
// document.body.appendChild(element)
// console.log(element)

// Manipulating HTML elements
// Modifying Content

// innerHTML - Modifies the HTML content of an element.

// const element = document.getElementById('main-text');
// element.innerHTML = "<h2>New Content</h2>";

// textContent - Modifies only the text content of an element, ignoring any HTML tags.

// const element = document.getElementById('main-text');
// element.textContent = "<h1>New Content</h1>";

// ADDING AND REMOVING CLASSES
// const removeElement = document.getElementById('container')
// removeElement.removeChild(removeElement.firstElementChild) //remove gets rid of all the child elements while removeChild specifies the child element to be removed

// const addElement = document.getElementById('container')
// const result = document.createElement('h2')
// result.textContent = "Hellow world 5"
// addElement.insertBefore(result, addElement.firstElementChild)

// Attribute methods

// const element = document.getElementById("sport")
// console.log(element.getAttribute('type'))

// const element = document.getElementById("sport")
// element.setAttribute('class','sub')
// console.log(element)

// hasAttribute returns true or false based on if the attribute exists or not
// const element = document.getElementById("sport")
// console.log(element.hasAttribute('type'))

// const element = document.getElementById("sport")
// element.removeAttribute('value')
// console.log(element)


// MANIPULATING ELEMENT'S STYLES
// You can change the CSS styles of an element by modifying the style property.

// const element = document.getElementById('main-text')
// console.log(element.style)

// const element = document.getElementById("main-text")
// element.style.backgroundColor = "purple"

// const element = document.getElementById("main-text")
// element.style.cssText += "padding: 20px; height: 100px"//.cssText always over rides the existing inline style, use += to concatinate bothe css

// CLASS NAME/LIST 
// const element = document.getElementById('main-text')
// console.log(element.className)

// const element = document.getElementById('main-text')
// element.className += ' new'
// console.log(element)

// const element = document.getElementById('main-text')
// element.classList.toggle('main') //add,remove,replace,contains(checks if a class i available and returns true or false),
// // toggle(if a class name is available, it removes it but if not available, it adds it)
// console.log(element)

// const sayHello = () => {
//     const inputValue = document.getElementById('greet').value

//     alert('hello '+ inputValue)
// }

// function toggleBackground(){
//     document.body.classList.toggle('dark-mode')
// }


// JavaScript Events



// Summary of Key DOM Manipulation Techniques:
// Selecting elements: Use methods like getElementById(), querySelector(), etc.
// Modifying content: Use innerHTML, textContent, etc.
// Changing attributes: Use setAttribute() or access properties directly.
// Changing styles: Modify the style property.
// Adding/removing classes: Use classList.
// Creating and inserting elements: Use createElement() and appendChild().
// Removing elements: Use remove() or removeChild().
// Handling events: Use addEventListener() to respond to user actions.


