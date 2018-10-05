var express = require('express');
var app = express();
var routermongo = require('./route_mongodb')
app.use(routermongo)

app.get('/', (req,res)=>{
    res.send('Express & MongoDB')
})

app.listen(3210, ()=>{
    console.log('Server aktif @port 3210')
});