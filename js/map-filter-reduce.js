const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let userObjects = users.filter(user => user.languages.length >= 3);
console.log(userObjects);

//Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map(x => {
    return x.email
});
console.log(userEmails);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYears = [];
users.forEach(x => totalYears.push(x.yearsOfExperience));
console.log(totalYears);
let userTotalExp = totalYears.reduce((a, b) => {
    return a + b
}, 0);
let averageExperience = userTotalExp / users.length;
console.log(averageExperience);

//Use .reduce to get the longest email from the list of users.
let emails = [];
users.forEach(x => emails.push(x.email));
console.log(emails);
let longestEmail = emails.reduce((a,b) => {
    if (a.length - b.length >= 0){
        return a;
    } else {
        return b;
    }
});
console.log(longestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

