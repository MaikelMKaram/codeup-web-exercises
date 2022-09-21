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


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
* name as input. This function should return a message which relates to the
* color stated in the argument of the function. For colors you do not have
* responses written for, return a string stating so
*
* Example:
*  > analyzeColor('blue') // returns "blue is the color of the sky"
*  > analyzeColor('red') // returns "Strawberries are red"
*
*  > analyzeColor('cyan') // returns "I don't know anything about cyan"
*
* You should use an if-else-if-else block to return different messages.
*
* Test your function by passing various string literals to it and
* console.logging the function's return value
*/





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */



/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);

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



//Exercise 3 - Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.


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


/*
Create a file named break_and_continue.js in the js directory.
Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
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





/*An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones*/
