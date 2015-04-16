/**
 * Created by aleksander on 4/16/15.
 */
var app=require('./app');

var server=app.listen(3000,function(){

    console.log('Server started at %d',server.address().port);
})