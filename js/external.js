"use strict";
//welcome log
console.log("Hello from external Javascript");

//welcome alert
let welcomeMessage = "Welcome to my website";
alert(welcomeMessage);

//prompt for favorite color
let whatIsYourFavoriteColor = prompt("What's your favorite color Holmes?");
alert("Noice! " + whatIsYourFavoriteColor + " is my favorite color too.");

//********exercise 3 from JS_Exercises document**********

//Movie rentals
let theLittleMermaid = prompt("For how many days would you like to rent The Little Mermaid?");
let brotherBear = prompt("For how many days would you like to rent Brother Bear?");
let Hercules = prompt("For how many days would you like to rent Hercules?");
let price = 3;

let costTheLittleMermaid = theLittleMermaid * price;
let costBrotherBear = brotherBear * price;
let costHercules = Hercules * price;

let totalCost = costTheLittleMermaid + costBrotherBear + costHercules;

alert("Thank You! Your total cost is $" + totalCost +".");


//Contractor pay
let google = 400;
let amazon = 380;
let facebook = 350;

let googleHours = prompt("How many hours  did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon");
let facebookHours = prompt("How may hours did you work for Facebook?");

let googlePay = google * googleHours;
let amazonPay = amazon * amazonHours;
let facebookPay = facebook * facebookHours;

let totalPay = googlePay + amazonPay + facebookPay;
alert("Your total pay is $" + totalPay);

//Class registration
let classAttendance = 29
let classTime = prompt("What time is the course you are trying to register for? Please use military time and enter it using #### format. Example: 1300")
let studentSchedule = ["1400", "1530", "1700"]

let scheduleConflict = studentSchedule.indexOf(classTime);
let registrationEligibility = ((classAttendance < 30 && scheduleConflict == -1));
alert("It is " + registrationEligibility + " that you can register for this course");

//Hat shop
let itemsMinimum = 2;
let offerCurrent = true;

let itemsBought = prompt("How many items are you purchasing today?");
let premiumMembership = confirm("Are you a Premium member? Please press 'OK' for Yes, 'cancel' for No");

let offerEligibility = ((itemsBought > itemsMinimum || premiumMembership == true) && offerCurrent == true);
alert("Does this purchase qualify for offer: " + offerEligibility);
