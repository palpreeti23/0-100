let user ={
    name : 'preeti',
    gender : 'female',
    age : 20
}

let newUser = JSON.stringify(user);
console.log(newUser)
console.log(newUser.gender);//undefined

let user2 = '{"name":"preeeti","age":20,"gender":"female"}'
let newUser2 = JSON.parse(user2);
// console.log(newUser2.age);