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

console.log('test txt1')

function newSum(n){
    let sum = 0;
    for(let i = 0; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

function sumVal(){
       console.log(newSum(100))
}
setTimeout(sumVal, 2000)
console.log('test txt 2');

