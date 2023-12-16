const express = require('express');
const app = express();
const cors = require('cors');

const auth = require('./routes/auth')

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(auth);

module.exports = app;