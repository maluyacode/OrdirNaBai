const express = require('express');
const router = express.Router();
const { PATH } = require('../constants/index');
const upload = require('../utils/multer')

const { register } = require('../controllers/authController');

router.post(PATH.USER_REGISTER, upload.single('avatar'), register);

module.exports = router