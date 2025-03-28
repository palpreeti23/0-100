// function sum(a, b){
//     return a+b;
// }

// const res = sum(2, 4);
// console.log(res)

//arrow function
const sum = (c, d)=>{
    return c + d;
}
console.log(sum(4,7))

// given an array , give me an array back in which every value is multiplied by 2.

const arr = [2,3,4,5,6,7,9,8]

// const newarr = arr.map((val)=>{
//     return val*2
// })
// console.log(newarr)

// longer version
function transform(i){
    return i*2
}
const arr2 = arr.map(transform);
console.log(arr2);

// Convert an array of strings to uppercase.
const words = ["hello", "world", "javascript"];
// Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]

const newWords = words.map((val)=>{
    return val.toUpperCase()
})

console.log(newWords);

// Extract the first letter of each word in an array.
const fruits = ["apple", "banana", "cherry"];
// Expected output: ["a", "b", "c"]

const fruitsIn = fruits.map((initials)=>{
    return newIn = initials[0]
})
console.log(fruitsIn)

// Convert an array of temperatures in Celsius to Fahrenheit.
const celsius = [0, 20, 30, 40];
// Expected output: [32, 68, 86, 104]
const temp = celsius.map((val)=>{
     return farTemp = (val*(9/5)) + 32
})
console.log(temp)

// Given an array of objects representing students with their scores, return an array of their names.
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];
// Expected output: ["Alice", "Bob", "Charlie"]
const namesOnly = students.map((val)=>{

    return val.name;
})
console.log(namesOnly);
// Format an array of dates from "YYYY-MM-DD" to "DD/MM/YYYY".
const dates = ["2025-03-28", "2024-11-05", "2023-07-12"];
// Expected output: ["28/03/2025", "05/11/2024", "12/07/2023"]
const newDates = dates.map((val)=>{
   
    const [year, month, day]= val.split("-");
    return `${day}-${month}-${year}`

})
console.log(newDates)