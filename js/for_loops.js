// Exercise 2 - Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(x){
    for (let i = 1; i <= 10; i++){
        console.log(x + " x " + i + " = " + (x * i));
    }
}
showMultiplicationTable(5);

//Exercise 3 - Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

function isEven0rOdd(){
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 200) + 20;
        if (random % 2 === 0) {
            console.log(random + " is even")
        }
        else {
                console.log(random + " is odd")
        }
    }
}

isEven0rOdd();


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

for (i = 0; i < 10; i++){
        console.log((''+i).repeat(i))
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

for (i = 100; i >= 5; i-=5){
    console.log((''+i));
}

