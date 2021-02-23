const fs = require('fs');
const path = require('path');

let movies;
try {
  movies = JSON.parse(
    fs.readFileSync(path.join(__dirname, './../movies.json'))
  );
} catch (error) {
  movies = [];
}
const getAllMovies = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      movies: movies,
    },
  });
};
const checkMovieAvailable = (req, res, next) => {
  const movie = movies.find((item) => item.id === +req.params.id);
  if (!movie) {
    return res.status(400).json({
      status: 'bad request',
      message: 'movie id is not available',
    });
  }
  next();
};
const getMovie = (req, res) => {
  const movie = movies.find((item) => item.id === +req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      movie,
    },
  });
};

const sendMoviePage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/movie.html'));
};

const sendStaticFile = (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, './../public/assets', req.url));
};
module.exports = {
  getAllMovies,
  checkMovieAvailable,
  getMovie,
  sendMoviePage,
  sendStaticFile,
};
