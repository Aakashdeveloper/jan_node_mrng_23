let fs = require('fs');

//write file
// fs.writeFile('myText.txt','My Code file',function(){
//     console.log('Task Done')
// })


// fs.appendFile('myFile.txt','This Is NodeJs \n',function(){
//     console.log('Data Appended')
// })

// fs.readFile('myFile.txt','utf-8',function(err, data){
//     if(err) throw err;
//     console.log(data)
// })


// fs.rename('myCode.txt','myCode1.txt',function(err){
//     if(err) throw err;
//     console.log('File Renamed')
// })

fs.unlink('myCode1.txt',function(err){
    if(err) throw err;
    console.log('File deleted')
})


