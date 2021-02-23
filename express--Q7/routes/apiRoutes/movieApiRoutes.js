const express = require('express');
const { getAllMovies } = require('./../../controllers/movieController');
const apiRouter = express.Router();

apiRouter.route('/').get(getAllMovies);

module.exports = apiRouter;
