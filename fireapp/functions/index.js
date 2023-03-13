const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const db = admin.firestore();

exports.addCiti = functions.https.onRequest(async(req,res) => {
    const citiRef = db.collection('jannode23');
    await citiRef.doc('JavaScript').set({
        "name":"Javascript","uses":"Frontend/backend","ranking":2
    })
    res.send('Data Added')
})


exports.getCiti = functions.https.onRequest(async(req,res) => {
    const citiRef = db.collection('jannode23');
    const snapshot = await citiRef.get('data');
    const out = [];
    snapshot.forEach(doc => {
        out.push(doc.data())
    })
    res.send(out)
})