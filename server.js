const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', (req, res)=>{
    res.sendFile('/index.html');
});
app.get('/api/timestamps/:date_string', (req, res)=>{
    // res.send(req.params.date_string)
    var date_string = req.params.date_string;
    var date = new Date(date_string);
    if(date_string === ""){
        var date = new Date();
    }else{
        if(date === "invalid"){
            res.send({"error": "invalid date"});
        }
        res.send({"unix": date.getTime(), "utc": date.toUTCString() });
    }
});


app.listen(3000, ()=>{
    console.log("listening on port 3000");
});