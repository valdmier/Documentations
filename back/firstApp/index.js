let express = require("express");
const app = express();


app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>U R broowsing: ${ subreddit } and its post id is: ${ postId }</h1>`);
    console.log(req.params);
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    //if you dont^ remember that go to the js folder then Objects/Destructuring
    res.send(`<h1>U R BRROWSING ${ subreddit } </h1>`);
});

app.get('/', function (req, res) {
    res.send('u r in the main page')
})

app.get('/cats', function (req, res) {
    res.send('meow from get req')
})




app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    res.send(`Hi! U are searching for ${ q } right?`);
})







app.get('*', function (req, res) {
    res.send('i dont know thAT path- from req')
})

app.listen(8080, () => {
    console.log('RUNNING ON PORT 8080!');
});
