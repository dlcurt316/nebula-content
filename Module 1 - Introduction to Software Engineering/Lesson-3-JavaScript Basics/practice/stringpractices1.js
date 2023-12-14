const noCaps = 'This Should Not Have Capital Letters!'
console.log(noCaps.toLowerCase)
const loud = "i'm very loud!";
console.log(loud.toUpperCase)
const concatenatedString = noCaps + loud
console.log(concatenatedString)

const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
stringOfNames.split(" ");
console.log(stringOfNames.split)

let noun = "cats"
const savedTemplateLiteral = `Good vacations are worth their weight in ${noun}`;
console.log(savedTemplateLiteral)

const myName = "Tony Stark";
const initials = myName[0] + myName[5]
console.log(initials)

const allStar = "Hey now, you're an all-star!";
console.log(allStar.slice(19,28))

const string1 = "How are you?";
const lastChar = string1[string1.length-1];
console.log(lastChar)

const ten = "10";
const five = "5";
const sum = parseInt(ten) + parseInt(five)
console.log(sum)

const sentence = "Welcome to the jungle!";
sentence.split(" ")
console.log(sentence.split)