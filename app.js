/**
 * Created by aleksander on 4/16/15.
 */
var express =require('express');
var bodyparser=require('body-parser');

var app=express();
app.use(bodyparser.json());
var logs=[];

app.get('/',function (req, res){
    res.json({
        message:"Succsess"
    });
})
app.post('/',function(req, res){

    logs.push(req.body);

    res.status(201)
        .json(req.body);
});

module.exports=app;