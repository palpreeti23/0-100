// const express = require('express')
// const app = express()
// const port = 3000;

// app.get('/', function(req,res){

//     res.send('hello word')
// })

// app.listen(port);


const express = require('express');
function sumVal(n){
    let sum = 0;
    for(let i= 0; i<n; i++){
        sum += i;
    }
    return sum;
}

const app = express();
app.get('/', function(req, res){
    const n = req.query.n;
    const ans = sumVal(n);
    res.send(ans.toString())
})

app.listen(3001)