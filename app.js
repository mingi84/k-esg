const express = require('express');
const path = require('path');
const bodyParse = require("body-parser");


var __dirname = path.resolve();

// server config
const app = express()
const port = 80

//const maria = require('./model/connect/maria');
//maria.connect();

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

app.get('/homepage', (req, res) => {
    res.render('homepage.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/inforegister', (req, res) => {
    res.render('inforegister.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/infoquiz', (req, res) => {
    res.render('infoquiz.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/enviroquiz', (req, res) => {
    res.render('enviroquiz.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/socialquiz', (req, res) => {
    res.render('socialquiz.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/governquiz', (req, res) => {
    res.render('governquiz.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/resultquiz', (req, res) => {
    res.render('resultquiz.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/contactus', (req, res) => {
    res.render('contactus.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/termsconditions', (req, res) => {
    res.render('termsconditions.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/successpage', (req, res) => {
    res.render('successpage.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})

app.get('/homepage2', (req, res) => {
    res.render('homepage2.ejs');
    console.log(Date() + TAB + req.socket.localAddress + TAB + req.url);
})


http.listen(port, () => console.log(`app listening on port ${port}!`));
