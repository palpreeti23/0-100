// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.


let fname = 'preeti pal';
// let str = fname.length;
// let str = fname.indexOf('pal')
// let msg = '  Helllo WorLd World And World       ';
// let str = msg.lastIndexOf('world');
// let str = msg.slice(0,3);
// let str = msg.substring(0,5)
// let str = msg.replace('world','javascript')
// let str = msg.replaceAll('world','javascript')
// let str = msg.split(' ');
// let str = msg.trim();
// let str = msg.toUpperCase();
// let str = msg.toLocaleLowerCase()

// console.log(str);


// functions for this functions

function msg(str, target){
    console.log('the og string is '+ str);
    console.log('the length of string is : '+ str.length);
    console.log('triming the og string is :' + str.trim());
    console.log('the index of string is : '+ str.indexOf(target));
    console.log('the length of string is : '+ str.lastIndexOf(target));
    console.log('the upper case of string is : '+ str.toUpperCase());
   
}

// let val = msg('   preeeti pal pal  ','pal');
// let greet = msg('hii this is preeti pal from pal family', 'pal');

function msg2(str, start, end){
    console.log('the slice of og string is :' + str.slice(start, end));
    console.log('the substring of og string is :' + str.substring(start, end));

}

// let value = msg2('hii this is preeti..preeti pal',0,8);

function msg3(str, target,  replacement){
    console.log('the substring of og string is :' + str.replace(target, replacement));
     console.log('the substring of og string is :' + str.replaceAll(target, replacement));
}

// let ans = msg3('hii this is preeti..preeti pal','preeti','neha');

function msg4(str){
    console.log('splitting the og string :' + str.split(' '));
    console.log('the string in lower case is :'+ str.toLowerCase())
}

let string = msg4('hIi ThiS is PreEti..pReeti paL');