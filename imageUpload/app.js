const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const app = express();
const port = 9987;

//static file path
app.use(express.static(__dirname+ '/public'));
app.set('view engine', 'ejs')

//middleware
app.use(bodyParser.json())
app.use(fileupload());

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})