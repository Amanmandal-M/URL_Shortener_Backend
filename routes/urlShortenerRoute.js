const express = require('express');

const urlRouter = express.Router();

// Controllers Location
const { urlGetController ,urlPostController } = require('../controllers/urlShortenerController');

// This endpoint should allow users to view shorted URL.
urlRouter.get("/:data", urlGetController);

// This endpoint should allow users to add the original URL in database and generates a short URL.
urlRouter.post('/' , urlPostController);

module.exports = { urlRouter }