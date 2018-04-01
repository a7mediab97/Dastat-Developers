var database = require('../config/db-connection');


//User Controllers should be implemented here
//DONT FORGET TO USE MODULE exports


//filter cinemas according to location
module.exports.filterByLocation = function(req, res, next){
    var location = req.params.location;
  database.query('SELECT * FROM cinemas WHERE location LIKE ?',[location], function (error, results, fields) {
    if(error) return next(error);
    return res.send(results);
  });
}


  //filter cinemas according to number of halls
module.exports.filterByHalls = function(req, res, next){
    var hallNumber = req.params.hallNumber;
    database.query('SELECT * FROM cinemas WHERE number_of_halls LIKE ?',[hallNumber], function (error, results, fields) {
      if(error) return next(error);
      return res.send(results);
    });
  }
  



module.exports.ViewCinemas = function(req, res, next){
    database.query('SELECT * FROM cinemas', function (error, results, fields) {
      if(error){
        return next(error);
      }
      return res.send(results);
    });
  }
