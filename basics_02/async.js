// sync function - where operation happens one after another sequentially. 

// console.log('hiii')
// console.log('this is preeti');
// console.log('and something');

// function sum(a,b){
//     let num = a + b;
//     return num;
// }

// console.log(sum(2,4))
// console.log('hiiii');


// async function - opposite of sync and multiple thing are context switching with each other.
// example - setTimeout and file read

// console.log('test txt1')

// function newSum(n){
//     let sum = 0;
//     for(let i = 0; i<=n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// function sumVal(){
//        console.log(newSum(100))
// }
// setTimeout(sumVal, 2000)
// console.log('test txt 2');


// reading from a file

// console.log('data before read')
//  const fs = require('fs');

//    fs.readFile('a.txt', 'utf-8', function(err,data){
//         console.log('data after read');
//         console.log(data)
//      })
  
// console.log('data after after read')

// const { promises } = require('dns');


//callback - callback is a function passed as an argument to another function.

// function square(n){
//    return n*n;
// }

// function cube(n){
//      return n*n*n;
// }

// function sumOfNum(a,b,fn){
//     let val1 = fn(a);
//     let val2 = fn(b);
//     let sum = val1+val2;

//     console.log(sum)
// }

// sumOfNum(2, 3, cube)


// promises - JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states:
// Pending: The task is in initial state.
// Fulfilled: The task completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

// const fs = require('fs');

// function readingFile(){
//     return new Promise(function(resolve){
//         fs.readFile('a.txt', 'utf-8', function(err,data){
//             resolve(data)
//         })
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// // readingFile().then(onDone);


// let d = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve('heyyy')
//     }, 1000)
   
// }
// )

// function callback(){
//     console.log(d)
// }

// console.log(d)
// d.then(callback);



// async await - used for handling promises more easily.

// function someVal(){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("i'm preeti");
//         }, 1000)
//     })
//     return p;
// }

//  async function main(data){
//     let val = await someVal()
//     console.log(val)
// }

// someVal().then(main)
