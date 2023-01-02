const express=require("express");
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})
app.get('/index2.html',function(req,res){
    res.sendFile(__dirname + '/index2.html')
})

app.listen(3000);
console.log("Connected")