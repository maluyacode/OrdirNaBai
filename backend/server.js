const dbConnection = require('./config/dbConnection');
const app = require('./app');
const cloudinary = require('cloudinary');

const dotenv = require('dotenv');
dotenv.config({ path: './config/dev.env' })
const port = process.env.PORT || 8080;

dbConnection();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.listen(port, () => console.log(`Server Started: http://localhost:${port}/`))