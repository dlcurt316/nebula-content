// 1.   Create an array that contains two of your favorite things to do

// 2.   Using an array method, add another thing you like to do to that list

// 3.   Reverse the order of the array (remember, if needed use MDN)

//      Use this array for questions 4-11:
    
// 4.   log the length of the array

// 5.   log the 4th element in the array

// 6.   Remove the first element in the array. Log the new array and the element removed from the array

// 7.   Put 'Sunday' back at the beginning of the array and log the new array

// 8.   Remove the last element in the array. Log the new array and log the element removed

// 9.   Add 'Saturday' back to the end of the array and log the new array

//10.   Replace 'Thursday' with 'Friday Junior'

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

//12.   Combine these two arrays
    
//13.   Write a line of code to test if something is an array or not


const favThings = ["Read books" , "Watch TV"]

favThings.push("Hiking")

console.log((favThings.reverse()))

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(daysOfWeek.length)

console.log(daysOfWeek[3])

const removed = daysOfWeek.shift()
console.log(removed)
console.log(daysOfWeek)

daysOfWeek.unshift(removed)

const removedBack = daysOfWeek.pop()

daysOfWeek.push(removedBack)

const string = `My favorite day of the week is ${daysOfWeek[6]}`
console.log(string)

let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
const combined = phone.concat(laptop)
console.log(combined)

const array = [1,2,3]
console.log(Array.isArray(array))
