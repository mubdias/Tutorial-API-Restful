const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req, res) => {
    res.send("I'm training Node.js");
});

app.get('/posts', (req, res) => {
    res.send("I created a new route");
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
        { useNewUrlParser: true }, () => {
    console.log('Connected to MongoDB!');
})


//How t we start listening to the server
app.listen(3000)

