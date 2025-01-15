
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


let fs = require('fs');

// async task
function readingFile(){

    fs.readFile('a.txt', 'utf-8', function(err, data){
        console.log('the countent of the file');
        console.log(data);
        let update_txt = data.replaceAll(/\s+/g, ' ');
        fs.writeFile('a.txt', update_txt, function(err){
            console.log(update_txt)
        })
    })  
}

readingFile()