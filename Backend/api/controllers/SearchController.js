var database = require('../config/db-connection');

//User Controllers should be implemented here
//DONT FORGET TO USE MODULE exports

// Used to search in Movies or Cinemas with a key word
module.exports.searchByKeyWord = function(req,res,next){
    var searchKeyS = '%' +  req.params.searchKeyWord + '%';        // used in comparison to char columns using LIKE
    var searchKeyN = req.params.searchKeyWord;              // used in comparison to int columns usin =
    var sqlMovie = 'SELECT title,genre,imagePath,year,rating FROM Movies WHERE title LIKE ? OR genre LIKE ? OR cast LIKE ? OR year = ?';
    var sqlCinema = 'SELECT * FROM Cinemas WHERE name LIKE ? OR company LIKE ? OR location LIKE ?';
    var sqlActor = 'SELECT name FROM Actors WHERE name LIKE ?'
    database.query(sqlMovie, [searchKeyS,searchKeyS,searchKeyS,searchKeyN,searchKeyN], function(error, movieResult, fields){
        if(error) return next(error);
        database.query(sqlCinema, [searchKeyS,searchKeyS,searchKeyS], function(error, cinemaResult, fields){
            if(error) return next(error);
            database.query(sqlActor, [searchKeyS] , function(error, actorResult, fields){
                if(error) return next(error);
            return res.send({"Movies": movieResult,"Cinemas": cinemaResult,"Actors": actorResult});
        });
        });
    });   
}

module.exports.viewMovies = function(req,res,next){
    database.query('SELECT * FROM Movies', function (error, results, fields) {
        if(error) return next(error);
        return res.send(results);
      });
}
module.exports.viewCinemas = function(req,res,next){
    database.query('SELECT * FROM Cinemas', function (error, results, fields) {
        if(error) return next(error);
        return res.send(results);
      });
}
module.exports.viewMovies3 = function(req,res,next){
    database.query('SELECT * FROM Movies WHERE feature=3', function (error, results, fields) {
        if(error) return next(error);
        console.log(results);
        return res.send(results);
      });
}
module.exports.viewMovies2 = function(req,res,next){
    database.query('SELECT * FROM Movies WHERE feature=2', function (error, results, fields) {
        if(error) return next(error);
        return res.send(results);
      });
}
module.exports.viewMovies1 = function(req,res,next){
    database.query('SELECT * FROM Movies WHERE feature=1', function (error, results, fields) {
        if(error) return next(error);
        return res.send(results);
      });
}
module.exports.viewMovies0 = function(req,res,next){
    database.query('SELECT * FROM Movies WHERE feature=0', function (error, results, fields) {
        if(error) return next(error);
        return res.send(results);
      });
}
module.exports.getTopMovies = function(req,res,next){
    database.query('SELECT * FROM `movies` WHERE feature = 3 ORDER BY rating DESC LIMIT 6', function (error, results, fields) {
        if(error) return next(error);
        return res.send(results);
      });
}
