let arr = [1,2,3];
// arr.push(5);
// arr.pop()
// arr.shift();
// arr.unshift(9)
// console.log(arr)

arr2 =[2,6,4,8];

// arr3 = arr.concat(arr2)
// console.log(arr3)


function sumup(arr, arr2){
    let arr3 = arr.concat(arr2);
    return arr3;
}

let val = sumup([13,24,56,78],[1,2,4,5,])
// console.log(val);


/// map
let arrayy = [2,4,5,7,9,45,3,75,44,68,99];

let anotherarr = arrayy.map((ele)=>{

    let num = ele*5;
    // return num;
    // console.log(num)
})

//filter
 let secArr = arrayy.filter((ele)=>{
    if(ele <50){
        console.log(ele)
    }

 })

