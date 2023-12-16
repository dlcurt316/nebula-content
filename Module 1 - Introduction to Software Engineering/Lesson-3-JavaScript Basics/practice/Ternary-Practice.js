// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number


// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)


// Initialize a variable called userId, set it equal to a fake user ID


// Initialize a variable called password, set it equal to a fake password


// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password


// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'


const creditCardNum = 1234-567-890
const last4SS = 4321
const userId = "johnsmith104"
const password = "password123"

const inputId = "johnsmith104"
const inputPass = "password123"

const output = userId === inputId && password ===inputPass ? 'Your credit card number is ${credicCardNum} and your last four social security numbers are ${last4SS}' : "incorrect username or id "
console.log(output)