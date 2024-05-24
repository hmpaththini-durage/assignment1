/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Hiruni Malsha Paththini Durage Student ID: 143446235 Date: 05/24/2024
*
********************************************************************************/ 


const serverVerbs = ["GET","GET","GET","POST","GET","POST"];
const serverPaths = ["/","/about","/contact","/login","/panel","/logout"];
const serverResponses = ["Welcome to WEB700 Assignment 1","This course name is WEB700. This assignment was prepared by [Hiruni Malsha Paththini Durage]",
    "Student Email: [hmpaththini-durage@myseneca.ca]\nStudent Name: [Hiruni Malsha]",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

console.log(httpRequest("GET", "/")); // 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // 200: This course name is WEB700. This assignment was prepared by Hiruni Malsha
console.log(httpRequest("GET", "/contact")); // 200: hmpaththini-durage@myseneca.ca\n Hiruni Malsha
console.log(httpRequest("POST", "/login")); // 200: Hello, User Logged In
console.log(httpRequest("GET", "/panel")); // 200: Main Panel
console.log(httpRequest("POST", "/logout")); // 200: Logout Complete. Goodbye
console.log(httpRequest("PUT", "/")); // 404: Unable to process PUT request for /

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}

automateTests();
