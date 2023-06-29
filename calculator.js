//jshint esversion:6
const express = require("express");
const BodyParser = require("body-parser");
const app = express();
app.use(BodyParser.urlencoded({extended : true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var sum = number1+number2;
    res.send("result of the calculation is: "+sum);
});
app.listen(3000,function(req,res){
    console.log("the server is running on port 3000");
});