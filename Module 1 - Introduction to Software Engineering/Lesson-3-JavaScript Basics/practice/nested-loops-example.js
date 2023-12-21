const famousQuote = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
let counter = 0
for(let i = 0; i < famousQuote.length; i++){
const char = famousQuote[i]
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
counter++
}
}
console.log(`I found ${counter} vowels`)


// create a couter variable outside of the loop
// Loop over the entire string from start to end
// a||e||i||o||u
// increment the counter when we find a vowel
// console.log(I found ${vowels})