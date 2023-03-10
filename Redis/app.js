let express = require('express');
let axios = require('axios');
let redis = require('redis');
let port = process.env.PORT || 8711;
const app = express();

const client = redis.createClient({
    host: 'localhost',
    port:6379
})

app.get('/data',(req,res)=>{
    let userInput = req.query.country.trim();
    userInput = userInput?userInput:'India'
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`;
    //check data in redis
    return client.get(userInput,function(err,result){
        // if data is in redis
        if(result){
            const output = JSON.parse(result);
            res.send(output)
        }else{
            // as data is not a part of redis call api and get the data
            axios.get(url)
                .then((response) => {
                    // save the response in redis for next time
                    const output = response.data;
                    client.setex(userInput,3600,JSON.stringify({source:'Redis Cache',output}))
                    // for first time return data
                    res.send({source:'API Respone', output})
                })
        }
    })
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})