const express = require('express');

const urlRouter = express.Router();

// Controllers Location
const { urlGetController ,urlPostController } = require('../controllers/urlShortenerController');

urlRouter.get("/:data", urlGetController);

urlRouter.post('/' , urlPostController);

module.exports = { urlRouter }