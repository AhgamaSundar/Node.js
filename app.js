const express=require('express');
const path=require('path');
const app=express();


app.get('/',function (req,res) {
    const htmlFilePath=path.join(__dirname,'views','index.html');
    res.sendFile(htmlFilePath);

    
    
});
app.get('/restaurants.html',function(req,res){
    const htmlFilePath=path.join(__dirname,'views','restaurants.html');
    res.sendFile(htmlFilePath);

})
app.get('/about.html',function(req,res){
    const htmlFilePath=path.join(__dirname,'views','about.html');
    res.sendFile(htmlFilePath);

})
app.get('/confirm.html',function(req,res){
    const htmlFilePath=path.join(__dirname,'views','confirm.html');
    res.sendFile(htmlFilePath);

})
app.get('/index.html',function(req,res){
    const htmlFilePath=path.join(__dirname,'views','index.html');
    res.sendFile(htmlFilePath);

})
app.get('/recommend.html',function(req,res){
    const htmlFilePath=path.join(__dirname,'views','recommend.html');
    res.sendFile(htmlFilePath);

})
app.listen(3000);

