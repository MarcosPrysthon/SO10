const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://marcosprysthon:senhateste@cluster0-2kgca.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => { console.log('Connected') });

app.listen(3333);