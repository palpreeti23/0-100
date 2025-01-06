

// let now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());


// now.setFullYear(2003);
// console.log(now.getDate())
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());

// function calculateSum(){
//     let sum =0;
//     for(let i =0; i<1000000000; i++){
//          sum = sum + i;
//     }
//     return sum;
// }


// let beforeDate = new Date();
// let currentTime = beforeDate.getTime();
// calculateSum()

// let afterDate = new Date();
// let currentAfterTime = afterDate.getTime();

// console.log(currentAfterTime-currentTime)

/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


// function calculateTime(n) {
//     let sum = 0;
//     for(let i =0; i<n; i++){
//         sum = sum + i;
//     }
//  return sum
// }

// let beforeTime = new Date();
// let beforeTimeInMn = beforeTime.getTime();
// calculateTime(100000000);

// let afterTime = new Date();
// let afterTimeInMn = afterTime.getTime();
// console.log(afterTimeInMn-beforeTimeInMn)

// console current time 

function calculateCurrentTime(){
    let currDate = new Date();
    console.log(currDate.getTime())
}

setInterval(calculateCurrentTime, 1000);