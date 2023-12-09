const dbConnection = require('./config/dbConnection');
const app = require('./app');

const dotenv = require('dotenv');
dotenv.config({ path: './config/dev.env' })
const port = process.env.PORT || 8080;

dbConnection();

app.listen(port, () => console.log(`Server Started: http://localhost:${port}/`))