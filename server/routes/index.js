let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create the ganme object
let game = require('../models/games');

// Global Route Variables
/* let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString(); */

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home'
   });
});

/* GET about page. */
router.get('/gamelist', (req, res, next) => {
  // find all games in the games collection
  game.find((err, games) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/gamelist', {
        title: 'About',
        games: games
      });
    }

  });



});




/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});

module.exports = router;
