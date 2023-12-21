// Reminder: control-c will kill an infinitely running node-process

// 1. Write a while loop that loops over a string until it finds the letter "a"
const string = "This is a string"
let i = 0
while(i < string.length){
if(string[i].toLowerCase() === "a"){
break;
}
i++
}
console.log('we found "A"')

// 2. Write a while loop that logs to the console the 'count' until the 'count' reaches 100
// // Inside the while loop be sure to increase count by some number

let count = 0
while(true){
count +=10
console.log(count)
if(count >= 100){
break;
}
}
