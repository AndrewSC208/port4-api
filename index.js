const config = require('./config/config');

const express  = require('express');
const mongoose = require('mongoose');

const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const routes = require('./routes');

const port = config.server.port;
const app  = express();

require('./libraries/promisify-all')(['mongoose']);

mongoose.connect(config.mongo.url);

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://mighty-journey-67013.herokuapp.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', routes);

app.listen(port, () => { console.log(`Magic happens on port ${port}`); });

module.exports = app;
