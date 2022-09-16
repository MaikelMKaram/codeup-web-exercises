//While Loop
let y = 0;
while(Math.pow(2,y) < Math.pow(2,16)){
    console.log(Math.pow(2,++y));
}

//Do-While Loop
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
    }
} while (totalCones > 0);

console.log("I sold all my cones")

