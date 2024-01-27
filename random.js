// Get Ndigit
var getNDigit = require("random-in").getNDigit;
console.log(getNDigit(5));
// Get Random Integer in a given range
// Get random number from 2 to 10 both include
var getRandomBetween = require('random-in').getRandomBetween;
console.log(getRandomBetween(2, 10));
// Get Random Floating number in a given range
// getRandomFloatBetween(min, max) 
var getRandomFloatBetween = require('random-in').getRandomFloatBetween;
console.log(getRandomFloatBetween(2, 10));
// Get N Random Number in a given range
// getNRandomBetween(n, min, max) 
var getNRandomBetween = require('random-in').getNRandomBetween;
console.log(getNRandomBetween(3, 2, 10));
// Get an random name
var getName = require('random-in').getName;
console.log(getName());
// Get Random Male Name
var getMaleName = require('random-in').getMaleName;
console.log(getMaleName());
// Get Random Female Name
var getFemaleName = require('random-in').getFemaleName;
console.log(getFemaleName());
// Get Random Male First Name
var getMaleFirstName = require('random-in').getMaleFirstName;
console.log(getMaleFirstName());
// Get Random Female First Name
var getFemaleFirstName = require('random-in').getFemaleFirstName;
console.log(getFemaleFirstName());
// Get Random Last Name
var getLastName = require('random-in').getLastName;
console.log(getLastName());
// Get Random Indian Name
var getIndianName = require('random-in').getIndianName;
console.log(getIndianName());
// Get Random Indian Male Name
var getIndianMaleName = require('random-in').getIndianMaleName;
console.log(getIndianMaleName());
// Get Random Indian Female Name
var getIndianFemaleName = require('random-in').getIndianFemaleName;
console.log(getIndianFemaleName());
// Get Random Date in between two Dates
var getDateBetween = require('random-in').getDateBetween;
console.log(getDateBetween(new Date(1947, 8, 15), new Date()));
// Get Random Date (Future)
var getRandomDateFuture = require('random-in').getRandomDateFuture;
var newdate = getRandomDateFuture(2024);
console.log(newdate);
// Emails
var getRandomEmail = require('random-in').getRandomEmail;
console.log(getRandomEmail());
// Passwords
// Get a random alphanumeric password of n length
var getAlphanumericPassword = require('random-in').getAlphanumericPassword;
console.log(getAlphanumericPassword(8));
// Get Lowercase Password
// Get a random lowercase alphanumeric password of n length
var getLowercasePassword = require('random-in').getLowercasePassword;
console.log(getLowercasePassword(5));
// Get Uppercase Password
var getUppercasePassword = require('random-in').getUppercasePassword;
console.log(getUppercasePassword(5));
// Get Alpha Password
var getAlphaPassword = require('random-in').getAlphaPassword;
console.log(getAlphaPassword(8));
// Get Alpha Lowercase Password
var getAlphaLowercasePassword = require('random-in').getAlphaLowercasePassword;
console.log(getAlphaLowercasePassword(8));
// Get Alpha Uppercase Password
var getAlphaUppercasePassword = require('random-in').getAlphaUppercasePassword;
console.log(getAlphaUppercasePassword(8));
// Get Numeric Password
var getNumericPassword = require('random-in').getNumericPassword;
console.log(getNumericPassword(8));
// Country
var getCountry = require('random-in').getCountry;
console.log(getCountry());
// Color
// Get a random hex color
var getRandomColorHex = require('random-in').getRandomColorHex;
console.log(getRandomColorHex());
// Programming
// Get random programming stuff
var getRandomProgrammingLanguage = require('random-in').getRandomProgrammingLanguage;
console.log(getRandomProgrammingLanguage());
