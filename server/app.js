require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/search');
const itemRoutes = require('./routes/item');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//app.use('/', searchRoutes);
//app.use('/item', itemRoutes);

app.use('/.netlify/functions/app', searchRoutes);
app.use('/.netlify/functions/app/item', itemRoutes);

module.exports = app;
module.exports.handler = serverless(app);