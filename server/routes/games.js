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
        res.render('games/index', {
          title: 'Games',
          games: games
        });
      }
  
    });
  
  
  
  });
  

  //Get -add page
  router.get('/add', (req, res, next) => {

    res.render('games/details', {
        title:  'ADD a new Game',
        games: ''
    } );
});
// POST add new game to db
router.post('/add',(req,res,next) => {
  game.create({
    "name": req.body.name,
    "cost": req.body.cost,
    "rating": req.body.rating
  }, (error,game) => {
    if(error)
    {
      console.log(error);
      res.end(error);
    }
    else{
      res.redirect('/games');
    }
  });
});


  /* GET edit show current game to edit. */
router.get('/:id', (req, res, next) => {
//ref to id of game to edit
    let id = req.params.id;
    // find by id games in the games collection
    game.findById(id,(err, games) => {
      if (err) {

        //console.error(err);
        return console.error(err);
      }
      else {

        //show the dit view
        res.render('games/details', {
          title: 'Games Details',
          games: games
        });
      }
  
    });
  
  
  
  });
  



/* post from edit page. process */
router.post('/:id', (req, res, next) => {
    //ref to id of game to edit
        let id = req.params.id;
        // find by id games in the games collection

        //create new object to update
       let games = new game({

        _id: id,
        name: req.body.name,
        cost: req.body.cost,
        rating: req.body.rating
       });
      
      game.update({_id: id}, games, (err)=>{

        if(err){

            console.log(err);
            res.end(err);
        }
        else{
//go back to games list
            res.redirect('/games');
        }
      });
      });


      //delete by id
      router.get('/delete/:id',(req,res,next) => {
        let id = req.params.id;
        game.remove({_id:id}, (err) =>{
          if(err){
            console.log(err);
            res.end(err);
          }
          else{
            res.redirect('/games');
          }
        });
      }

      );
module.exports = router;
