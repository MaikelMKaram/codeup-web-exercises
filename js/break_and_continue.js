let oddNumb;

for(i = 1;; i++){
    oddNumb = prompt("Please select an odd number between 1 and 50");
    if(Number(oddNumb) % 2 === 1 && oddNumb > 0 && oddNumb < 51){
        break;
    }
}

for(let i = 0; i < 50; i++){
if (i == oddNumb){
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    else if(i % 2 > 0){
        console.log("Here is an odd Number: " + i);
    }
}

