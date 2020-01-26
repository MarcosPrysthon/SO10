const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

app.use(cors());
app.use(express.json()); 
app.use(routes);

mongoose.connect('mongodb+srv://marcosprysthon:senhateste@cluster0-2kgca.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => { console.log('Connected') });

server.listen(3333);