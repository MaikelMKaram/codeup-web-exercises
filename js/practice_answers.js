/* Which Generation Are You?
 * Try finding your ancestors and offspring with code.
 *
 * Create a function named generation that takes a number x and a character y ("m" for male, "f" for female), and returns the
 * name of an ancestor (m/f) or descendant (m/f).
 *
 * If the number is negative, return the related ancestor.
 * If positive, return the related descendant.
 * You are generation 0. In the case of 0 (male or female), return "me!".
 * Examples
 * >> generation(2, "f") ➞ "granddaughter"
 * >> generation(-3, "m") ➞ "great grandfather"
 * >> generation(1, "f") ➞ "daughter"
 *
 * Generation	Male	Female
 * -3	great grandfather	great grandmother
 * -2	grandfather	grandmother
 * -1	father	mother
 * 0	me!	me!
 * 1	son	daughter
 * 2	grandson	granddaughter
 * 3	great grandson	great granddaughter
 */


/* Say "Hello" Say "Bye"
 * Write a function named sayHelloBye that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
 *
 * Examples
 * >> sayHelloBye("alon", 1) ➞ "Hello Alon"
 * >> sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
 * >> sayHelloBye("jose", 0) ➞ "Bye Jose"
 *
 * Notes
 * The name you return must be capitalized.
 */

function sayHelloBye(name,num){
    if(num == 0){
        console.log(`Hello ${name}`)
    } else if(num == 1){
        console.log(`Bye ${name}`)
    } else {
        console.log(`Please enter a value of 0 or 1`)
    }
}

sayHelloBye("John", 1)

/* Tile Teamwork Tactics
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 *
 * Given you and your friend's tile number, create a function named possibleBonus that returns if it's possible to earn a bonus when you roll the dice.
 *
 * Examples
 * >> possibleBonus(3, 7) ➞ true
 * >> possibleBonus(1, 9) ➞ false
 * >> possibleBonus(5, 3) ➞ false
 *
 * Notes
 * You cannot move backward (which is why example #3 doesn't work).
 * If you are already on the same tile, return false, as you would be advancing away.
 * Expect only positive integer inputs.
 */




/* Integer in Range?
 * Create a function named intWithinBounds that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
 *
 * Examples
 * >> intWithinBounds(3, 1, 9) ➞ true
 * >> intWithinBounds(6, 1, 6) ➞ false
 *
 * >> intWithinBounds(4.5, 3, 8) ➞ false
 *
 * Notes
 * The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
 * Bounds will be always given as integers.
 */




/* Perimeters with a Catch
 * Write a function named perimeter that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
 *
 * Use the following formulas:
 *
 * Perimeter of a square: 4 * side.
 * Perimeter of a circle: 6.28 * radius.
 *
 * The catch is you can only use arithmetic or comparison operators, which means:
 *
 * No if... else statements.
 * No objects.
 * No arrays.
 * No formatting methods, etc.
 * The goal is to write a short, branch-free piece of code.
 *
 * Examples
 * >> perimeter("s", 7) ➞ 28
 * >> perimeter("c", 4) ➞ 25.12
 * >> perimeter("c", 9) ➞ 56.52
 */


function perimeter(l,num){
    if(l.toLowerCase() == "s"){
        console.log(`The perimeter of a square with a side of ${num} is ` + (num * 4));

    } else if(l.toLowerCase() == "c") {
        console.log(`The perimeter of a circle with a radius of ${num} is ` + (num * 6.28));

    } else {
        console.log(`Please enter a value of "s" for square or "c" for circle`);
    }
}

perimeter("o",3);







/**
 * TODO:
 * Add up the Numbers from a Single Number
 * Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 *
 * Examples
 *
 * >> addUp(4) ➞ 10
 * >> addUp(13) ➞ 91
 * >> addUp(600) ➞ 180300
 *
 * Notes
 * Expect any positive number between 1 and 1000.
 */


function addUp(num){
    let count = 0;
    for(let i = 1; i <= num; i++){
        count += i;
    } console.log(count);
}

addUp(7);



/**
 * TODO:
 * Count Instances of a Character in a String
 * Create a function named charCount that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
 *
 * Examples
 * >> charCount("a", "edabit") ➞ 1
 * >> charCount("c", "Chamber of secrets") ➞ 1
 * >> charCount("b", "big fat bubble") ➞ 4
 *
 * Notes
 * Your output must be case-sensitive (see second example).
 */

function charCount(x,y){
    return y.split("").filter(function (i){
        return i == x;
    }).length;
}

console.log(charCount("x","Xxxyy"));

/**
 * TODO:
 * Return the Index of the First Vowel
 * Create a function named firstVowel that returns the index of the first vowel in a string.
 *
 * Examples
 * >> firstVowel("apple") ➞ 0
 * >> firstVowel("hello") ➞ 1
 * >> firstVowel("STRAWBERRY") ➞ 3
 * >> firstVowel("pInEaPPLe") ➞ 1
 *
 * Notes
 * Input will be single words.
 * Characters in words will be upper or lower case.
 * "y" is not considered a vowel.
 * Input always contains a vowel.
 */

function firstVowel(str){
 let test = str.search(/[aeiouAEIOU]/g);
 console.log(test);
}

firstVowel("pants");


/**
 * TODO:
 * Integer Digits Count
 * Create a function named count that counts the integer's number of digits.
 *
 * Examples
 *
 * >> count(318) ➞ 3
 * >> count(-92563) ➞ 5
 * >> count(4666) ➞ 4
 * >> count(-314890) ➞ 6
 * >> count(654321) ➞ 6
 * count(638476) ➞ 6
 *
 * Notes
 * For an added challenge, try to solve this without using strings.
 */

function digitCount(n){
    let count = 0;
    if (n >= 1) ++count;

    while (n/ 10 >= 1){
        n /= 10;
        ++count;
    }
    return count;
}

console.log(digitCount(123123));


/**
 * TODO:
 * Remove the Letters ABC
 * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
 *
 * Examples
 * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
 * >> removeABC("hello world!") ➞ null
 * >> removeABC("") ➞ null
 *
 * Notes
 * If the given string does not contain "a", "b", or "c", return null.
 */



function removeABC(str){
    let letters = str.replace(/[abc]/g,"");
    let letterDiff = str.length - letters.length;
    if (letterDiff !== 0){
        return letters;
    } else {
        return null;
    }
}

console.log(removeABC("Pants-off Danceoff"));


/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */

function reverseOdd(str){
    let wordSplit = str.split(" ").map(word => {
        if (word.length % 2 > 0){
            return word.split("").reverse().join("");
        } else {
            return word;
        }
    })
    console.log(wordSplit.join(" "));
}

reverseOdd("what would a woodchuck do");

/**
 * TODO:
 * Convert a Number to Base-2
 * Create a function named binary that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
 *
 * Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
 *
 * Examples
 * >> binary(1) ➞ "1"   // 1*1 = 1
 * >> binary(5) ➞ "101"   // 1*1 + 1*4 = 5
 * >> binary(10) ➞ "1010"   // 1*2 + 1*8 = 10
 *
 * Notes
 * Numbers will always be below 1024 (not including 1024).
 * The && operator could be useful.
 * The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
 * If a binary conversion for 0 is attempted, return "0".
 */

function binary(num){
    return num.toString(2);
}

console.log(binary(0));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


// Do-while loop will do the instruction before checking the while condition
//while loop checks the while condition before doing the instruction

// Exercise 2 - Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + num*i)
    }
}

showMultiplicationTable(2);

//Exercise 3 - Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.


for (let i = 1; i <= 10; i++){
    let randomNumber = Math.floor(Math.random() * 100 ) + 20;
    if(randomNumber % 2 == 0){
        console.log(`${randomNumber} is even`)
    } else {
        console.log(`${randomNumber} is odd`)
    }
}

//Exercise 4 - Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (i = 1; i <= 9; i++){
    console.log((``+i).repeat(i));
}


//Exercise 5 - Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i >= 5; i -= 5){
    console.log(i);
}

/*Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
Your output should look like this:

Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
Here is an odd number: 13
Here is an odd number: 15
Here is an odd number: 17
Here is an odd number: 19
Here is an odd number: 21
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
Here is an odd number: 33
Here is an odd number: 35
Here is an odd number: 37
Here is an odd number: 39
Here is an odd number: 41
Here is an odd number: 43
Here is an odd number: 45
Here is an odd number: 47
Here is an odd number: 49
*/

let oddNumber;
do {
    oddNumber = prompt("Please select and odd number between 1 and 50")
} while (oddNumber % 2 == 0 || oddNumber < 1 || oddNumber > 50);


for(let i = 0; i < 50; i++){
    if (i === +oddNumber){
        console.log("Yikes! Skipping number: " + i);
    }
    else if(i % 2 > 0){
        console.log("Here is an odd Number: " + i);
    }
}

/* While Loop
* Create a file named while.js in the js directory.

Create a while loop that uses console.log() to create the output shown below.

2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/

let j = 1;

while (j < 65536){
    console.log(j *= 2);
}


