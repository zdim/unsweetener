require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();
const searchRoutes = require('./routes/search');
const itemRoutes = require('./routes/item');

app.use(cors());
app.use(bodyParser.json());

app.use('/', searchRoutes);
app.use('/item', itemRoutes);

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Listening on port ${port}`);
});