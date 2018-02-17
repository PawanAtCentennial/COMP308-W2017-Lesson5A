let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
//create the ganme object
let game = require('../models/games');


/* GET main games page. */
router.get('/', (req, res, next) => {
    // find all games in the games collection
    game.find((err, games) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('content/gamelist', {
          title: 'Games',
          games: games
        });
      }
  
    });
  
  
  
  });
  


module.exports = router;
