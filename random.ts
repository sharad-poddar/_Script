// library formed by using ts 

// Get Ndigit
const { getNDigit } = require("random-in");
console.log(getNDigit(5));

// Get Random Integer in a given range
// Get random number from 2 to 10 both include
const { getRandomBetween } = require('random-in');
console.log(getRandomBetween(2,10));

// Get Random Floating number in a given range
// getRandomFloatBetween(min, max) 
const { getRandomFloatBetween } = require('random-in');
console.log(getRandomFloatBetween(2,10));

// Get N Random Number in a given range
// getNRandomBetween(n, min, max) 
const { getNRandomBetween } = require('random-in');
console.log(getNRandomBetween(3,2,10));

// Get an random name
const { getName } = require('random-in');
console.log(getName());

// Get Random Male Name
const { getMaleName } = require('random-in');
console.log(getMaleName());

// Get Random Female Name
const { getFemaleName } = require('random-in');
console.log(getFemaleName());

// Get Random Male First Name
const { getMaleFirstName } = require('random-in');
console.log(getMaleFirstName());

// Get Random Female First Name
const { getFemaleFirstName } = require('random-in');
console.log(getFemaleFirstName());

// Get Random Last Name
const { getLastName } = require('random-in');
console.log(getLastName());

// Get Random Indian Name
const { getIndianName } = require('random-in');
console.log(getIndianName());

// Get Random Indian Male Name
const { getIndianMaleName } = require('random-in');
console.log(getIndianMaleName());

// Get Random Indian Female Name
const { getIndianFemaleName } = require('random-in');
console.log(getIndianFemaleName());

// Get Random Date in between two Dates
const { getDateBetween } = require('random-in');
console.log(getDateBetween(new Date(1947, 8, 15), new Date()));

// Get Random Date (Future)
const { getRandomDateFuture } = require('random-in');
const newdate = getRandomDateFuture(2024);
console.log(newdate);

// Emails
const { getRandomEmail } = require('random-in');
console.log(getRandomEmail());

// Passwords
// Get a random alphanumeric password of n length
const { getAlphanumericPassword } = require('random-in');
console.log(getAlphanumericPassword(8));

// Get Lowercase Password
// Get a random lowercase alphanumeric password of n length
const { getLowercasePassword } = require('random-in');
console.log(getLowercasePassword(5));

// Get Uppercase Password
const { getUppercasePassword } = require('random-in');
console.log(getUppercasePassword(5));

// Get Alpha Password
const { getAlphaPassword } = require('random-in');
console.log(getAlphaPassword(8));

// Get Alpha Lowercase Password
const { getAlphaLowercasePassword } = require('random-in');
console.log(getAlphaLowercasePassword(8));

// Get Alpha Uppercase Password
const { getAlphaUppercasePassword } = require('random-in');
console.log(getAlphaUppercasePassword(8));

// Get Numeric Password
const { getNumericPassword } = require('random-in');
console.log(getNumericPassword(8));

// Country
const { getCountry } = require('random-in');
console.log(getCountry()); 

// Color
// Get a random hex color
const { getRandomColorHex } = require('random-in');
console.log(getRandomColorHex());

// Programming
// Get random programming stuff
const { getRandomProgrammingLanguage } = require('random-in');
console.log(getRandomProgrammingLanguage());

