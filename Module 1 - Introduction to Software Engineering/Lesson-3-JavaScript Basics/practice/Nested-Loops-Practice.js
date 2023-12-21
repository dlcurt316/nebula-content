// 1. Given an array of strings
// // Loop over the array of strings
// // And loop over each string.
// // If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel']
for (let i = 0; i < names.length; i++) {
    let name = names[i]
    for (let j = 0; j < name.length; j++) {
        let letter = name[j]
        if (letter.toLowerCase() === 'a')
            console.log(name)
    }
}



// 2. Given an array of strings
// // Loop over the array
// // And loop over each string.
// // Create a new array of strings where every other letter in each string is capitalized 
// // // Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This', 'is', 'an', 'array', 'of', 'strings']
const capitalLettersArr = []
for (let i = 0; i < stringArray.length; i++) {
    let string = stringArray[i]
    let word = ''
    for (let j = 0; j < string.length; j++) {
        let letter = string[j]
        if (j % 2 === 0) {
            word += letter.toUpperCase()
        }
        else {
            word += letter
        }
    }
    capitalLettersArr.push(word)
}
console.log(capitalLettersArr)


// 3. Given an array of arrays of numbers (nested array)
// // Add all the inner values up and push them into a single array
// // // Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
const finalArr = []
for (let i = 0; i < arrayOfArrays.length; i++) {
    let innerArr = arrayOfArrays[i]
    let total = 0
    for (let j = 0; j < innerArr.length; j++) {
        let num = innerArr[j]
        total += num

    }
    finalArr.push(total)
}
console.log(finalArr)