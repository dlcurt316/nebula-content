
// If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'



// Save your name to a variable called name
// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
// Otherwise log, 'I see you've got enough characters!' to the console. 



// Create the following if statement: 
// If this month (1-12) is after March and before December, log 'Winter is Coming!'



// Create two variables a & b initialized as numbers
// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'

const x = 42
const y = 12
if(x === 42 || y === 42){
console.log('I see you\'ve found the ultimate answer to life, the universe and everything.')
}

const fName  = "David"
if(fName.length < 10){
console.log('you\'ll need more characters!')
}else{
console.log('I see you\'ve got enough characters!')
}

const month = Math.ceil(Math.random() * 12)
console.log(month)

if(month > 3 && month < 12){
    console.log('Winter is Coming!')
}else{
console.log('Its winter')
}

const a = 10
const b = 20

if(a > b){
console.log('a is greater than b')
}else if(a < b){
console.log('a is less than b')
}else{
console.log('a is equal to b')
}

