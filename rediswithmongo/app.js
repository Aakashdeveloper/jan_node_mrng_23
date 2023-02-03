let express = require('express');
let redis = require('redis');
let mongo = require('mongodb').MongoClient;
let mongourl = "mongodb://localhost:27017"
const port = process.env.PORT || 7521;
const app = express();
const client = redis.createClient({
    host: 'localhost',
    port:6379
})

app.get('/health',(req,res) => {
    res.send('ok')
})

//
app.get('/data',(req,res)=>{
    const userInput = req.query.color.trim()
    return client.get(userInput,(err,result) => {
        //if data in redis
        if(result){
            console.log(">>>>>>1")
            const output = JSON.parse(result);
            res.send(output)
        }else{
            // as data is not in redis fetch from mongodb
            mongo.connect(mongourl,(err,dc) => {
                console.log(">>>>>>2")
                if(err){
                    res.send('Error While Connecting')
                } else {
                    console.log(">>>>>>3")
                    let dbObj = dc.db('janmrng')
                    dbObj.collection('products').find({'Color':userInput}).toArray((err,result) => {
                        if(err) throw err
                        //firt save response in redis
                        client.setex(userInput,3600,JSON.stringify({source:'Redis Cache',result}))
                        res.send({source:'Mongodb',result})
                    })
                }
            })
        }
    })
})



app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})