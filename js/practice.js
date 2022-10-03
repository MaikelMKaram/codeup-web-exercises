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


