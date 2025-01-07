let user = {
    name : 'preeti',
    age : 20,
    gender : 'female'
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

let obj = Object.hasOwnProperty('clg');
console.log(obj);

let obj2 = Object.assign({}, user, {"clg": "chaouksey"});
console.log(obj2)