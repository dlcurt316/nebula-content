// Given the following list:
// Change the element at index zero to equal itself times 10 



// Add an additional element to the prior array


// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'


// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false



// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'


// Add that item back


// Given the following array, sort it using an array method



// Now reverse the prior array


  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'



// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']



// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'



// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location



// Create two arrays and, using JavaScript join them together



// Create a multi-dimensional array


let numArr = [1,2,3,4,5];
numArr[0] *= 10
console.log(numArr)

numArr.push(6)
console.log(numArr)

const removedItem = numArr.pop(6)
console.log(removedItem)

const isThere = numArr.indexOf(1)
console.log(isThere)

if (numArr[isThere]){
console.log(true)
}else{
console.log(false)
}

const removedFirstItem = numArr.shift()
console.log(removedFirstItem)
console.log(numArr)

numArr.unshift(removedFirstItem)
console.log(numArr)

let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
const sort = sortThis.sort()
console.log(sort)

const reversed = sort.reverse()
console.log(reversed)

const favFoods = 'My favorite foods are za, pineapple, hawaiian-pizza'
const favFoodsArr = favFoods.split(` `)
console.log(favFoodsArr)

const favFoodsStr = favFoodsArr.join("-")
console.log(favFoodsArr)

const arr1 = [1,2,3,4,5,7,8,9,10]
arr1.splice(5,0,6)
console.log(arr1)

const arr2 = [1,2,3,4,5,7,8,9,10]
const arr3 = [1,2,3,4,5,7,8,9,10]
console.log(arr2.concat(arr3))

const multi = [[1,2,3],[4,5,7]]
console.log(multi)