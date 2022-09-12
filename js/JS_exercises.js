/* Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world
conditions can be represented with code.*/

/*1. You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?*/

let theLittleMermaid = 3;
let brotherBear = 5;
let Hercules = 1;
let price = 3;

let costTheLittleMermaid = theLittleMermaid * price
let costBrotherBear = brotherBear * price
let costHercules = Hercules * price

let totalCost = costTheLittleMermaid + costBrotherBear + costHercules
console.log(totalCost)


/*2. Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week?
You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/

let google = 400;
let amazon = 380;
let facebook = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let googlePay = google * googleHours
let amazonPay = amazon * amazonHours
let facebookPay = facebook * facebookHours

let totalPay = googlePay + amazonPay + facebookPay
console.log(totalPay)


/*3. A student can be enrolled in a class only if the class is not full
and the class schedule does not conflict with her current schedule.*/

/*Class cap is 30. if result is 'true', student can enroll in course. if 'false', student cannot enroll */
let classAttendance = 29
let classTime = 1100
let studentSchedule = [1400, 1530, 1700]

let scheduleConflict = studentSchedule.indexOf(classTime)
console.log(scheduleConflict)

console.log((classAttendance < 30 && scheduleConflict == -1))

/*4.  A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products.
 */

let itemsMinimum = 2;
let offerCurrent = true;

let itemsBought = 3;
let premiumMembership = false;

console.log((itemsBought > itemsMinimum || premiumMembership == true) && offerCurrent == true);

