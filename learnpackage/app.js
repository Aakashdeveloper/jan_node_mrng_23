let express = require('express');
let app = express();
let port = 6600;

app.get('/',(req,res)=>{
    res.send('Hi From Express')
});

app.get('/location',(req,res)=>{
    res.send('Hi From location')
})

app.listen(port,(err) => {
    console.log('Server is running on port 6600')
})