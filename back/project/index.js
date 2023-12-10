const express = require("express");
const app = express();
const path = require('path');
const firstData = require('./data.json');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(express.static('public'));



app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/cats', (req, res) => {
    const cats = [
        "blue", "nigro", "monty", "winston"
    ]
    res.render("cats", { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = firstData[subreddit];
    if (data) {
        res.render('sub', { ...data })
    } else {
        res.send('no subriddit like this')
    }
});


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/tacos', function (req, res) {
    res.send("/tacos from get");

    console.log(req.body);
});

app.post('/tacos', function (req, res) {
    res.send("/tacos from post");
    console.log(req.body);
});




app.get('*', function (req, res) {
    res.send('i dont know thAT path- from req')
});
//dont put anything here its not gonna work
app.listen(3000, () => {
    console.log('RUNNING ON PORT 3000!');
});

