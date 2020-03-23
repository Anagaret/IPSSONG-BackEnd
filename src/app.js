const express = require('express');
const server = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/ipssong');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const cors = require('cors');
server.use(cors());

const songRoute = require('./api/routes/songRoute');
songRoute(server);

const commentRoute = require('./api/routes/commentRoute');
commentRoute(server);

const voteRoute = require('./api/routes/voteRoute');
voteRoute(server);

const userRoute = require('./api/routes/userRoute');
userRoute(server);

server.listen(port, hostname);
