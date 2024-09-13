const express=require('express');
const uuid=require('uuid');

const path=require('path');
const fs=require('fs');
const { render } = require('ejs');
const app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));


app.get('/',function (req,res) {
    res.render('index');

    
    
});
app.get('/restaurants/:resId',function(req,res){
    const restaurantID=req.params.resId;
    const filePath=path.join(__dirname,'data','restaurants.json');
    const fileData=fs.readFileSync(filePath);
    const storedRestaurants=JSON.parse(fileData);
    for(const rest of storedRestaurants){
        if(rest.id===restaurantID){
            return res.render('restaurants-Details',{restaurant:rest});

        }
    }
    res.render('404.ejs')


});
app.get('/restaurants',function(req,res){
    const filePath=path.join(__dirname,'data','restaurants.json');
    const fileData=fs.readFileSync(filePath);
    const storedRestaurants=JSON.parse(fileData);
    res.render('restaurants',{placeholder:storedRestaurants.length,restaurants:storedRestaurants});
    

});
app.get('/about',function(req,res){
    res.render('about');
});
app.get('/confirm',function(req,res){
    res.render('confirm');

});
app.get('/index',function(req,res){
    res.render('index');
});
app.get('/recommend',function(req,res){
    res.render('recommend');

});
app.post('/recommend',function(req,res){
    const restaurant =req.body;
    restaurant.id =uuid.v4();
    const filePath=path.join(__dirname,'data','restaurants.json');
    const fileData=fs.readFileSync(filePath);
    const storedRestaurants=JSON.parse(fileData);
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants));
    res.redirect('/confirm');
});

app.use(function(error,req,res,next){
    render(500);
});
app.listen(3000);

