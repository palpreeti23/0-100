
  // ## Create a counter in JavaScript.
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second 
//     let countVal = 0;
//     const counterDiv = document.querySelector('.counter');
//    function count(){
//     if(countVal < 0){
//         counterDiv.textContent = countVal;
//     }
//     else{
//         countVal++;
//         counterDiv.textContent = countVal;
//     }
//    }
// setInterval(count, 1000)



     // ## Counter without setInterval
    // Without using setInterval, try to code a counter in Javascript. 
//    let countVal = 0;
//    const counterDiv = document.querySelector('.counter');
//    function count(){
//     if(countVal < 0){
//         counterDiv.textContent = countVal;
//     }
//     else{
//         countVal++;
//         counterDiv.textContent = countVal;
//         setTimeout(count,1000)
//     }
//    }
//    count()


// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// let fs = require('fs');

// // async task
// function readingFile(){

//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         console.log('the countent of the file');
//         console.log(data)
//     })

//     // expensive operation - sync task
//     console.log('starting of the op')
//     let sum = 0;
//     for(let i = 0; i<1e10; i++){
//         sum += i;
//     }
//     console.log('the expensive op :', sum) 
// }

// readingFile()

// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// let fs = require('fs');

// // async task
// function readingFile(){

//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         console.log('the countent of the file');
//         console.log(data);
//         data = data + "im from jairamnagar";
//         fs.writeFile('a.txt', data, function(err){
//             console.log('done')
//             console.log('data after writing :', data)
//         })
//     })
// }

// readingFile()



// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// let fs = require('fs');

// // async task
// function readingFile(){

//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         console.log('the countent of the file');
//         console.log(data);
//         let update_txt = data.replaceAll(/\s+/g, ' ');
//         fs.writeFile('a.txt', update_txt, function(err){
//             console.log(update_txt)
//         })
//     })  
// }

// readingFile()



// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
let counterDiv = document.querySelector('.counter');
let counterDiv2 = document.querySelector('.counter2');
function currTime(){
    
    let now = new Date();
    let hour = String(now.getHours());
    let minute = String(now.getMinutes());
    let sec = String(now.getSeconds());

// for HH:MM:SS 
    let time = `${hour}:${minute}:${sec}`;
    counterDiv.textContent = `${time}`

// for second formate

      let hour12 = ((now.getHours()+ 11)%12) + 1;
      let amPm = now.getHours() >= 12 ? 'PM' : 'AM'
      counterDiv2.textContent = `${hour12}:${minute}:${sec} ${amPm}`
    
    
}

setInterval(currTime,1000);
currTime();