const express = require('express');
const app = express();

const user = [{
    name :'john',
    kidney :[{
        health : false,
    }]
}]

app.use(express.json());

app.get('/', function(req, res){
    const johnKidney = user[0].kidney;
    const numOfKidneys = johnKidney.length;
    let healthyKidneys = 0;
    for(let i = 0; i<johnKidney.length; i++){
        if(johnKidney[i].health){
            healthyKidneys = healthyKidneys + 1;
        }
    }
    const unhealthKidney = numOfKidneys - healthyKidneys;
    res.json({
        numOfKidneys,
        healthyKidneys,
        unhealthKidney
    })
})
app.post('/', function(req, res){
    let isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        health: isHealthy
    })
    res.json({
        msg : 'done'
    })
})
app.listen(8080)
