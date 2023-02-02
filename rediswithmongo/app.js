let express = require('express');
let redis = require('redis');
let mongodb = require('mongodb').MongoClient;
let mongourl = "mongodb://localhost:27017"
const port = process.env.PORT || 7521;
const app = express();
const client = redis.createClient({
    host: 'localhost',
    port:6379
})



app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})