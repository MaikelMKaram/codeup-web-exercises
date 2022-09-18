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

let y = 0;
while(Math.pow(2,y) < Math.pow(2,16)){
    console.log(Math.pow(2,++y));
}

//Do-While Loop

/*An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
*/


let totalCones = Math.floor(Math.random()*100) + 50;
console.log("Total cones to sell: " + totalCones);

do {
    let conesBought = Math.floor(Math.random()*5) + 1;
    if((totalCones - conesBought) < 0){
        console.log("Cannot sell you " + conesBought + " cones. I only have " + totalCones);
    }
    else {
        console.log(conesBought + " cones sold");
        totalCones -= conesBought;
        console.log("Cones left: " + +totalCones);
    }
} while (totalCones > 0);

console.log("I sold all my cones")

