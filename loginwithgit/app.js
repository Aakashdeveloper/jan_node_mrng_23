let express = require('express');
let app = express();
let request = require('request');
let superagent = require('superagent');
let cors = require('cors');
let port = process.env.PORT ||1100;

app.use(cors())




app.listen(port,() => {
    console.log(`Running on thr port ${port}`)
})