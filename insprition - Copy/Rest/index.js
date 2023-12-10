const express = require("express");
const app = express();
const path = require('path');
const firstData = require('./data.json');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

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

app.get('/tacos', function (req, res) {
    const { meat, qty } = req.query;
    res.send(`Ok, here is your order ${ meat } quantity: ${ qty }`);

    console.log(req.query);
});

app.post('/tacos', function (req, res) {
    const { meat, qty } = req.body;
    res.send(`Ok, here is your order ${ meat } quantity: ${ qty }`);

    console.log(req.body);
});


let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'funny'
    }, {
        id: uuid(),
        username: 'luc',
        comment: 'yooo wtfff'
    }, {
        id: uuid(),
        username: 'skyler',
        comment: "I'M THE DANGER"
    }, {
        id: uuid(),
        username: 'MESII',
        comment: "hELLO WORLD "
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/main.ejs', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs')
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    console.log(req.body);
    res.redirect("//localhost:3000/comments")
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const arrayComment = comments.find((c) => c.id === id);
    arrayComment.comment = newCommentText;
    res.redirect("/comments");

})

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render('comments/edit.ejs', { comment })
})
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    // go find what element of comments has the same id as the req.params.
    //if any item passed the test make it set to comment
    console.log(req.params);
    res.render('comments/show', { comment })
})
//we could delete it but its a best parctice to just make another version
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter((c) => c.id !== id);
    res.redirect("/comments");

})
app.get('*', function (req, res) {
    res.send('i dont know thAT path- from req')
});
//dont put anything here its not gonna work
app.listen(3000, () => {
    console.log('RUNNING ON PORT 3000!');
});