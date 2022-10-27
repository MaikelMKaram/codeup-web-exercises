
/* Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
 example input: [1,2,3,4,5] expected output: [2,4]*/

// function filter (arr){
//     let result = arr.filter( x => {
//         if (x % 2 === 0){
//             return x;
//         }
//     })
//
//     return result;
// }

/* Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string of each of the objects. Return the new array of objects. Don’t mutate the original array.
  example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
  expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]*/

// function objectAdd (arr,str){
//     let result = [...arr];
//
//     result.forEach(x => {
//         x.continent=str;
//     })
//     return result;
// }

// objectAdd([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia');


// //Write a function named calculateChange that takes in two
// inputs, totalPaid and totalCost. If both inputs are numeric
// br numeric strings, calculateChange should return the change
// after subtracting the cost from the amount paid. The return
// should be in $x.xx format as a string Note: it should return
// with two decial places. If either or both inputs are not
// numeric or numeric strings, calculateChange should return
// false.

// function calculateChange(totalPaid, totalCost){
//     if(isNaN(totalPaid) || isNaN(totalCost) || typeof totalPaid === "boolean" || typeof totalCost === "boolean"){
//         return false;
//     } else{
//         return (Number(totalCost) - Number(totalPaid)).toFixed(2);
//     }
// }
//
// console.log(calculateChange());

//     // $6.00//
//     calculateChange(10, 5)
// 1/ $5.001/
// calculateChange("100", 50)
// 11 $50.00//
// calculateChange(10, true)
// 11 false//
// calculateChange([1, 2, 3], 10)
// 11 false//
// calculateChange ( "Codeup", 100)
// // false//
// calculateChange()
// // false


// re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }
//
// for (let i = 20; i >= 0; i--);

// Add ‘strawberry’ to the beginning, middle, and end of the array.
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
//
//
// fruits.splice(fruits.length/2,0, "strawberry");
// console.log(fruits);


/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */

function freeShipping(obj) {
    let something = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < something.length; i++) {
        sum += something[i]
    } if (sum > 50) {
        return true;
    } else {
        return false;
    }
}


function freeShippingTwo(obj) {
    let arr = [];
    for (let key in obj) {
        // console.log(obj[key])
        arr.push(obj[key])
    }
    let sum = 0
    for (let i = 0; i < arr.length; i ++) {
        sum += arr[i];
    }
    if (sum > 50) {
        return true
    } else {
        return false
    }
}
// console.log(freeShippingTwo(shoppingListThree));
let shoppingList = {
    shampoo: 5.99,
    rubber_duck: 15.99,
}
console.log(freeShipping(shoppingList));
let shoppingListTwo = {
    flatscreen_tv: 399.99,
}
console.log(freeShipping(shoppingListTwo));
let shoppingListThree = {
    monopoly: 11.99,
    secret_hiller: 35.99,
}
console.log(freeShipping(shoppingListThree));
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */
let newArr = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
]
function getBudget(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].budget
    }
    return sum
}
console.log(getBudget(newArr));
/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */
let address = '8626 Sunny Oaks'
function convertAddressToObject(input) {
    let arr = input.split(" ");
    let obj = {
        streetNumber: arr[0],
        streetName: `${arr[1]} ${arr[2]}`
    }
    return obj
}
console.log(convertAddressToObject(address));

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

let yourPets = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]
function totalPets(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].pets
    }
    return sum
}
console.log(totalPets(yourPets));

// 1. Write a function, `filterNumbers()` that takes in an array of mixed data
// types and returns an array of only the numbers type in ascending order.
//
//     Example input: `["fred", true, 5, 3]`
// Example output: `[3, 5]`


let arrOne = ["fred", true, 5, 3]
function filterNumbers(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i])
        }
    }
    return newArr.sort()
}
console.log(filterNumbers(arrOne));

// 1. Write a function, `getOlder()` that takes in array of dog objects and
// increases the value of each object's `age` property by 1.
//
//     Example input:
//
let arrOfObj = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]
function getOlder(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].age++
    }
    return arr
}
console.log(getOlder(arrOfObj));
//
//     Example output
//
//         [
//             {
//                 name: "Chompers",
//                 breed: "Pug",
//                 age: 8
//             },
//             {
//                 name: "Freddy",
//                 breed: "Lab",
//                 age: 5
//             },
//             {
//                 name: "Mr. Pig",
//                 breed: "Mastif",
//                 age: 11
//             }
//         ]
//
// 1. Write a function, `washCars()` that takes in a array of car objects and sets
// the boolean properties of `isDirty` to false.
//
//     Example input:
//
let arrOfObjTwo = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
function washCars(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isDirty === true) {
            arr[i].isDirty = false
        }
    }
    return arr
}
console.log(washCars(arrOfObjTwo));
//
//     Example output
//
//         [
//             {
//                 make: 'Volvo',
//                 color: 'red',
//                 year: 1996,
//                 isDirty: false // changed to false
//             },
//             {
//                 make: 'Toyota',
//                 color: 'black',
//                 year: 2004,
//                 isDirty: false // stays the same
//             },
//             {
//                 make: 'Ford',
//                 color: 'white',
//                 year: 2007,
//                 isDirty: false // changed to false
//             }
//         ]
//
// 1. Write a function, `adminList()` that takes in an array of user objects and
// returns a count of all admins based on the `isAdmin` property. Refactor to
// return an array of admin-only user emails. Refactor again to return an array
// of user objects that are admins.
//
//     Example Input:
//
let arrOfObjThree = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
]
function adminListThree(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isAdmin === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(adminListThree(arrOfObjThree));
​
function adminListTwo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isAdmin === true) {
            newArr.push(arr[i].email);
        }
    }
    return newArr
}
console.log(adminListTwo(arrOfObjThree));
​
function adminList(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isAdmin === true) {
            sum++
        }
    }
    return sum
}
​
console.log(adminList(arrOfObjThree));
//
//     Example Output (before refactor): `2`
//
//     Example Output (after 1st refactor):
//
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//     Example Output (after 2nd refactor):
//
//         [
//             {
//                 isAdmin: true,
//                 email: 'user1@email.com'
//             },
//             {
//                 isAdmin: true,
//                 email: 'user2@email.com'
//             }
//         ]
//
// 1. Create a function, `makeSandwichObjects()` that takes in two array of
// strings, breads and fillings, and returns an array of `sandwichObjects` that
// contain properties for bread and filling and values correspond to the same
// order of the two passed in arrays. Assume the two array inputs are the same
// length.
//
//     Example Input:
//
// ```js
var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
function makeSandwhichObjects(arr1, arr2){
    let arrOfObj = []
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
        console.log(arr2[i])
        arrOfObj.push({
            bread: arr1[i],
            filling: arr2[i]
        })
    }
    return arrOfObj
}
console.log(makeSandwhichObjects(breads, fillings));
//     ```
//
//     Example Output:
//
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]


// ## OBJECTS BONUSES
//
// 1. Create a dog object
//
//     The dog object should have properties for:
//
//     - `breed` (string),
//         - `weightInPounds` (number),
//         - `age` (number),
//         - `color` (string),
//         - `sterilized` (boolean),
//         - `shotRecords` (array of objects with properties for date and `typeOfShot`)
//
//     The dog object should have methods to:
//
// - `bark()` - will console.log "Woof!"
// - `getOlder()` - will increase age by 1
// - `fix()` - will set sterile to true if dog sterilized property is false
// - `vaccinate()` - takes in an argument for the name of the shot and adds a
// new shot with the current date to the shotRecords array
//
// 1. Expanding on the books object exercise:
//
// - Add a property `keywords` that contains an array of possible genres the
// book may be categorized by
// - Add a boolean property `available` and set it to true
// - Add a `dateAvailable` property that has a string of the date/time when the
// book will be available
// - Add a method `lend()` that...
// - changes the `available` property to false if it is not already false
// - sets the `dateAvailable` to a date exactly two weeks from when the
//     `lend()` method is called (to do this, research the JS Date object and
// use methods from it in your code)
// Add a method `receive()` that...
// - changes the `available` property to true
// - changes the `dateAvailable` property to the string `"now"`
//
// 1. Expanding on the books object exercise:
//
// - Create an application to take in user input to build the books array of objects.
// - Allow the user to continue adding books or to finish adding books.
// - Once the books have been added, output the books array in the console.
// - Allow a user to delete a book or a group of books by title or author last name
// - Allow a user to edit a book by index number in the books array
//
//
//
// 1. Define an object called `jackBox`
//
//     Include properties for...
//
//     - `triggered` - whether or not the box has been sprung (should be false by
// default)
// - `intervalId` - set to null
// - `play()` - once called, if triggered is false, console.log one new element
// in the lyrics array every second after the lyrics, stop the interval, set
// the triggered property to true, and alert POP!
//     - `windUp()` - once called will stop the play() method and set triggered to
// false lyrics - an array with the following elements:
//
// "All a-...",
//     "-round the ...",
//     "mulberry...",
//     "bush, The...",
//     "monkey...",
//     "chased the...",
//     "wea-...",
//     "-sel...",
//     "The monkey...",
//     "stopped to...",
//     "pull up his...",
//     "sock,...",
//     "Pop!...",
//     "goes the...",
//     "wea-...",
//     "-sel."
//
//     When running, current lyrics should also be displayed on the page.
//
// 1. Build a Stop Watch
//
//     Define an object called `stopWatch`.
//
//     Include the following properties...
//
//     - `intervalId`
//     - `count`
//
//     Include the following methods...
//
//     `start()` - starts console logging an increasing count every second
//     `pause()` - pauses counter
//     `reset()` - stops counter and resets count to zero


// - Define a function named `allIndexesOf` that takes in two arguments. The first
// argument should be the array to search and the second argument should be the
// value you want to search for. If the item does not exist in the provided
// array, return an empty array.
//
//     Given:
//
// ```js
//     var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//     ```
//
//     - `allIndexesOf(fruits, "apple")` should return the array [0, 3]
// - `allIndexesOf(fruits, "guava")` should return the array []
// - `allIndexesOf(fruits, "pineapple")` should return [4]

function allIndexesOf(arr,value){
    let newArr = [];
    for (let i =0; i = arr.length; i++){
        if(arr[i] === value) {
            newArr.push(i);
        }
    } return newArr
}


// - Define a function named `removeAll(array, value)` that takes in two arguments.
//     The first argument should be an array and the second argument should be a
// value you wish to remove
//
//     Given:
//
// ```js
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

function removeAll(arr, value){
    let newArr = [];
    for (let i=0; i < arr.length; i++){
        if (arr[i] !== value){
            newArr.push(arr[i]);
        }
    } return newArr;
}


//     - `removeAll(bugs, "ant")` should return `["mosquito", "scorpion",
//       "mosquito", "typo", "reference error", "type error"]`
//     - `removeAll(bugs, "mosquito")` should return `["ant", "scorpion", "ant",
//       "ant", "typo", "reference error", "type error"]`
//     - `removeAll(bugs, "roach")` should return the original array b/c "roach"
// has no occurrances.
//
// ---
//
// - Make a function called randomIntBetween(min, max) that returns a random number
// between the min and the max.
// - Make a function called `coinFlip()` that returns either 0 or 1, randomly
// - Make a function called `twoDice()` that returns the sum of rolling two six
// sided dice.
// - Make a function called `twentySidedDie()` that returns a random integer
// between 1 and 20.
// - Make a function called `twelveSidedDie()` that returns a random integer
// between 1 and 12.
// - Make a function called `tetrahedron()` that returns a random integer between 1
// and 4.
//
// ---
//
// - Make a function called `rollDie()` that returns an integer between 1 and 6.
// - Make a function called `listOfRolls(num)` that takes in a number containing
// how many 6-sided dice rolls you want to make. The `listOfRolls` function
// should return an array of that length, where each element of the array is the
// result of the `rollDie` function.
//
// - Make a function called `listOfRollsFromDieFunc(numberOfRolls, diceFunction)`
//
//     This function should take in two arguments:
//
// - The first argument is the number of rolls you want to make.
// - The second argument is a function that contains the function definition
// for the type of die you want to roll.
//
//     For example, if we call `listOfDieRollsFromDieFunc(1, tetrahedron)`, then the
// function will return an array containing one value that is the result of
// calling the `tetrahedron` function.
//
// ---
//
// ```js
//
// /**
//  * JS Array Practice
//  * Intermediate Array practice: array creation, iteration, and manipulation
//  */