const express = require('express');
const path = require('path');
const bodyParse = require("body-parser");


var __dirname = path.resolve();

// server config
const app = express()
const port = 80

var http = require("http").createServer(app);

app.use(express.json());

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/css', express.static(__dirname + 'public/fonts'));
app.use("/public", express.static(__dirname + '/public'));



// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

var TAB = "\t";

app.get('/', (req, res) => {
    res.render('index.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})



http.listen(port, () => console.log(`app listening on port ${port}!`));
