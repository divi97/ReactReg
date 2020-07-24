const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const PORT = 1234;

const app = express();

//ROUTES --->
const employee = require('./routes/route');

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/emp', employee);

app.listen(PORT, () => {
    console.log('Server is running on port:' + PORT);
})