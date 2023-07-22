const express = require('express');
const app = express();
const router = require('./routes/route');
require('dotenv').config();
require('./db/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json())
app.use('/user', router);

app.listen(3000, () => console.log('Server is running'));
