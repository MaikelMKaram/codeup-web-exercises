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