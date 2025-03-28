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


//MAP function

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

// FILTER FUNCTION 

//given an input arrays give me back only the even values

const num = [2,3,4,5,6,7,8,13,54,34]
const evenNum = num.filter((val)=>{
    if(val%2 == 0){
        return val
    }
})
console.log(evenNum)

// Filter words that have more than 5 letters.
const word = ["apple", "banana", "cat", "elephant"];
// Expected output: ["banana", "elephant"]
const newWord = word.filter((val)=>{

    return val.length > 5
})
console.log(newWord)

// Filter out negative numbers from an array.
const numbers = [-3, -1, 2, 5, -7, 8];
// Expected output: [2, 5, 8]
const posVal = numbers.filter((val)=>{

    return val > 0
})
console.log(posVal)

// Filter students who passed the exam (score >= 50).
const student = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 40 },
    { name: "Charlie", score: 78 }
];
// Expected output: [{ name: "Alice", score: 85 }, { name: "Charlie", score: 78 }]
const studentWhoPassedTheExam = student.filter((val)=>{
    return val = val.score >=50
})
console.log(studentWhoPassedTheExam)

// Filter valid email addresses (must contain '@').
const emails = ["user@example.com", "hello@", "test.com", "admin@gmail.com"];
// Expected output: ["user@example.com", "admin@gmail.com"]
const validId = emails.filter((val)=>{
    return val = val.includes('@') && val.includes('.com')
})
console.log(validId)