const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotnev/config');

//Middlewares
app.use(cors());

app.use(bodyParser.json());


//Import Routes
const postRoute = require('./routes/posts');
app.use('/posts', postsRoute);



//ROUTES
app.get('/', (req, res) => {
    res.send('Hello world')
});



//Połączenie z bazą danych
mongoose.connect(
    process.env.DB_CONNECTION, { userNewUrlParser: true },
    () => console.log('połączono z bazą danych')
);


app.listen(3000);