var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var file = require('./data.json');



APP = '/colapi/v1/';

app.listen(port);

app.get(APP+"users",function(req,res){
    res.sendfile('./data.json');

});
app.get(APP+"users/:id",
    function(req,res){
        var idUser = req.params.id;
        res.send(file[idUser - 1]);
});


app.put(APP+"movements",function(req,res){
    res.send("Viva");
});
app.post(APP+"movements",function(req,res){
    res.send("Viva");
});
app.delete(APP+"movements",function(req,res){
    res.send("Viva");
});