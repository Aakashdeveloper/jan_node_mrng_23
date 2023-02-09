let express = require('express');
let app = express();
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let dotenv = require('dotenv');
dotenv.config();
let mongoUrl = process.env.MongoUrl;
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT ||1100;
let db;
let authKey = process.env.authKey

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

function auth(key){
    if(key === authKey){
        return true
    }else{
        return false
    }
}

//get heart beat
app.get('/',(req,res) => {
    res.status(200).send('Health Ok')
})

// List of city
app.get('/location',(req,res) => {
    let key = req.header('x-basic-token')
    if(auth(key)){
        db.collection('location').find().toArray((err,data) => {
            res.status(200).send(data)
        })
    }else{
        res.status(403).send('Not Authenticated Call')
    }
})

// List of restaurants
app.get('/restaurants',(req,res) => {
    let query = {};
    let stateId = Number(req.query.stateId);
    if(stateId){
        query = {state_id:stateId}
    }
    db.collection('restaurants').find(query).toArray((err,data) => {
        res.status(200).send(data)
    })
})

// List of MealTypes
app.get('/mealTypes',(req,res) => {
    db.collection('mealType').find().toArray((err,data) => {
        res.status(200).send(data)
    })
})

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(`Error While Connecting to mongo`);
    db = client.db('internfeb')
    app.listen(port,() => {
        console.log(`Running on thr port ${port}`)
    })
})