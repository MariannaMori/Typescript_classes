const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
const dotenv = require('dotenv');
dotenv.config();

app.use(cors())

const localDb = process.env.LOCAL_DB; /***my local mongodb****/
const atlasDb = process.env.ATLAS_DB; /****from atlas *****/

const mongoose = require('mongoose');
const { reset } = require('nodemon');
const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/blogs', { useNewUrlParser: true, useUnifiedTopology: true }); //***my local */

db.on('connected', function () {
    console.log('Mongoose default connection open');
});

// If the connection throws an error
db.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    hidden: Boolean,
    author: String,
    views: Number
})

const Post = mongoose.model('Post', postSchema); /* first the document second is the schema of the document */

app.get('/', (req, res) => {
    res.send('hello marianna') /*message sent as respond */
})

app.post('/addNewPost', (req, res) => {  /*when there is a new post request,  */
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content
    });

    newPost.save().then(() => console.log('Successfully saved a new Post to MongoDB'))
    res.send('Received post')
})

app.get('/allPost', (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) console.log(err)
        else res.json(posts)
    })
})

app.listen(5000, () => {
    console.log('Listening on port', 5000)
})