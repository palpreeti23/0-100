// const express = require('express')
// const app = express()
// const port = 3000;

// app.get('/', function(req,res){

//     res.send('hello word')
// })

// app.listen(port);


// const express = require('express');
// function sumVal(n){
//     let sum = 0;
//     for(let i= 0; i<n; i++){
//         sum += i;
//     }
//     return sum;
// }

// const app = express();
// app.get('/', function(req, res){
//     const n = req.query.n;
//     const ans = sumVal(n);
//     res.send(ans.toString())
// })

// app.listen(3001);


const express = require('express');
function sumNum(a, b){
    return a + b;
}
const app = express();
app.get('/', function(req, res){
        const a = parseInt(req.query.a);
        const b = parseInt(req.query.b);
        const ans = sumNum(a, b);
        res.send(ans.toString())
    })
    
    app.listen(3002);
