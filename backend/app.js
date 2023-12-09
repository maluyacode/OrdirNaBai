const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));



module.exports = app;