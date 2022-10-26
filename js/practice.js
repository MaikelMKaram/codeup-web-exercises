
/* Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
 example input: [1,2,3,4,5] expected output: [2,4]*/

function filter (arr){
    let result = arr.filter( x => {
        if (x % 2 === 0){
            return x;
        }
    })

    return result;
}

/* Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string of each of the objects. Return the new array of objects. Don’t mutate the original array.
  example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
  expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]*/

function objectAdd (arr,str){
    let result = [...arr];

    result.forEach(x => {
        x.continent=str;
    })
    return result;
}

objectAdd([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia');


// //Write a function named calculateChange that takes in two
// inputs, totalPaid and totalCost. If both inputs are numeric
// br numeric strings, calculateChange should return the change
// after subtracting the cost from the amount paid. The return
// should be in $x.xx format as a string Note: it should return
// with two decial places. If either or both inputs are not
// numeric or numeric strings, calculateChange should return
// false.

function calculateChange(totalPaid, totalCost){
    if(isNaN(totalPaid) || isNaN(totalCost) || typeof totalPaid === "boolean" || typeof totalCost === "boolean"){
        return false;
    } else{
        return (Number(totalCost) - Number(totalPaid)).toFixed(2);
    }
}

console.log(calculateChange());

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

for (let i = 20; i >= 0; i--);

// Add ‘strawberry’ to the beginning, middle, and end of the array.
var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];


fruits.splice(fruits.length/2,0, "strawberry");
console.log(fruits);


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


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */


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
