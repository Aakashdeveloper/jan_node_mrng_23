let express = require('express');
let app = express();
let port = 8811;
let categoryRouter = require('./src/routes/categoryRouter');
let productRouter = require('./src/routes/productRouter');

///middleware (supporting lib)
// static files path
app.use(express.static(__dirname+'/public'))
// html file path
app.set('views','./src/views')
//view engine name
app.set('view engine', 'ejs')

//routes
app.get('/',function(req,res){
    //res.send("<h1>Hii From Default Route</h1>")
    res.render('index',{title:'Coming From Code',pageNo:1})
})

app.use('/category',categoryRouter);
app.use('/products',productRouter);

//create server
app.listen(port,function(err){
    if(err) throw err;
    console.log(`listing to port ${port}`)
})