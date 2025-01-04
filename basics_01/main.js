// write a program to greet a person based on their first and last name

let fname = "preeti";
let lname = "pal";
let greetings = "good morning " + fname + lname;
// console.log(greetings)

// write a program to greet a person based on their gender

let gender = 'male';

if(gender == 'female'){
    console.log("good morning ms. preeti")
}
else{
    console.log("good morning mr. bsdsa")
}

//write a program that counts from 0-1000

let num = 0 ;
for(let i = 0; i<= 1000; i++){
    num = num + i;
  
}
// console.log(num);

// 1. Write a program prints all the even numbers in an array


let arr = [1,2,3,4,5,6,7,8,9,35,67,23];

for(let i =0; i< arr.length; i++){
    if(arr[i]%2 === 0){
        console.log(arr[i])
    }
   
}



// 2. Write a program to print the biggest number in an arrya

let arr2 = [2,3,5,8,46,23,45,6,35,67,24,13,78,53];
let bigNum = 0;
for(let i =0; i<arr2.length ; i++){
    if(arr2[i]> bigNum){
        bigNum = arr2[i];
    }
}

// console.log(bigNum)

// 3. Write a program that prints all the male people’s first name given a complex object

let user = [{
    fname : 'peter',
    gender : 'male'
},
{
    fname : 'piya',
    gender : 'female'
},{
    fname : 'john',
    gender : 'male'
},{
    fname : 'ritika',
    gender : 'female'
},{
    fname : 'odell',
    gender : 'male'
},{
    fname : 'laim',
    gender : 'male'
},
]

for (let i = 0; i < user.length; i++){
    if(user[i].gender === 'male'){
        // console.log(user[i].fname)
    }
}

// 4. Write a program that reverses all the elements of an array

let arr3 = [1,3,5,7,6,34,56,24,56,76];

for(let i = arr3.length-1; i>=0 ; i--){

    // console.log(arr3[i])
}

// let sum = 0;
// for(let i = 0; i<=10000000; i++){
//     sum = sum + i;
// }

// console.log(sum)

// callback

 function sum(a,b,nxtFun){
     let res = a+b;
     nxtFun(res);
    //  return res;
    // findAns(res);
}

function findAns(ans){
   console.log('the ans is '+ ans);
}

function findAnsPassive(ans){
    console.log('ans of data is' + ans);
}

let value = sum(2,4, findAnsPassive);
// console.log(value);


// setTimeout and setInterval

function msg(){
    console.log('hiiii preeeti');
}

setTimeout(msg , 5*1000);

// setInterval(msg, 3 * 1000);

//set a terminaal clock in hh:mm:ss
//the basic terminal clock

let readline = require('readline');
function clock(){
    let time = new Date();
    let hour = String(time.getHours());
    let min = String(time.getMinutes());
    let sec = String(time.getSeconds());
    return `${hour}:${min}:${sec}`;
}

function displayClock(){

    // console.log(clock())
    readline.cursorTo(process.stdout, 0)//prints in the same line
    process.stdout.write(clock())
  
}

setInterval(displayClock, 1000);