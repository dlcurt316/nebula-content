// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'

const string = "This is a string"
for(let i = 0; i < string.length; i++){
    if (string[i].toLowerCase() === "a"){
        console.log(string[i])
        break;
        }
}


// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'

const array = ['a','b','c', 100,'e']
for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === 'number'){
        console.log(`at index ${i} there is the number ${array[i]}`)
        break;
    }
}


// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

const arr = ['apple',34,'c', 100,'car']
const newArr = []
for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) === 'number'){
        continue
    }
    newArr.push(arr[i])
}
console.log(newArr)

