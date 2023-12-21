//Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.
function multiplyBy10(number){
return number * 10
}
console.log(multiplyBy10(5))
console.log(multiplyBy10(10))

//Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.
function sayGoodbye(name){
return `See you later, ${name}`  
}
console.log(sayGoodbye(`David`))

//Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to check whether a number is even or not).
function evenNumbers(nums){
const newArray = []
for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        newArray.push(nums[i])

    }
    
}
return newArray
}
console.log(evenNumbers([1,2,3,4,5,6]))

//Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.

