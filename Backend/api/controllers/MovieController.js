var database = require('../config/db-connection');

//Movie Controllers should be implemented here
//DONT FORGET TO USE MODULE exports

module.exports.getMovieInfo = function(req, res, next){

    database.query('SELECT movie_id,title,duration,genre,description,imagePath,cast,year,feature,release_date, rating FROM movies WHERE movies.movie_id = ?', [req.params.movie_id], function (error, results, fields) {
      if(error) return next(error);
      res.status(200).json({
        err : null,   
        msg : "Info succussfully retreived",
        data : results
      });
    });
  }
//DONT FORGET TO ADD IT IN THE ROUTES

//-------VIEW ALL MOVIES------

module.exports.getMovies = function(req,res,next){

    database.query('SELECT * from movies where status ="ACCEPTED" ORDER BY feature desc',
   
function(error,results,fields){
    if(error) return next(error);
    if(results.length ==0){
        return res.send("No Movies found!");
    }
    else{
        return res.send(results);
    }
});
}


//-------------VIEW RATINGS-----------------
//--View Movies by High ratings

module.exports.getMoviesHighRatings = function(req,res,next){
    let genre = req.params.genre;
    if(genre === "No filter"){
        database.query('SELECT * from movies where status ="ACCEPTED"  ORDER BY rating desc',function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
    else {
        database.query('SELECT * from movies where genre = ? AND status ="ACCEPTED"  ORDER BY rating desc',[genre],function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
    }

//--View Movies by Low ratings

module.exports.getMoviesLowRatings = function(req,res,next){
    let genre = req.params.genre;
    if(genre === "No filter"){
        database.query('SELECT * from movies where status ="ACCEPTED"  ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
    else {
        database.query('SELECT * from movies where genre = ? AND status ="ACCEPTED"  ORDER BY rating ASC',[genre],function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
}





//-----------VIEW BY DATE -------------------

//--View Movies ordered by the latest

module.exports.getMoviesLastestDate = function(req,res,next){
    let genre = req.params.genre;
    if(genre === "No filter"){
        database.query('SELECT * from movies where status ="ACCEPTED"  ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
    else {
        database.query('SELECT * from movies where genre = ? AND status ="ACCEPTED"  ORDER BY year DESC',[genre],function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
}

//--View Movies ordered by the Oldest

module.exports.getMoviesOldesttDate = function(req,res,next){
    let genre = req.params.genre;
    if(genre === "No filter"){
        database.query('SELECT * from movies where status ="ACCEPTED"  ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
    else {
        database.query('SELECT * from movies where genre = ? AND status ="ACCEPTED"  ORDER BY year ASC',[genre],function(error,results,fields){
            if(error) return next(error);
            return res.send(results);
    
        });
    }
}

//------------------------VIEW BY GENRE-------------------

//--View Biography Movies
module.exports.getMoviesBiography = function(req,res,next){
    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Biography" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Biography" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Biography" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Biography" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Biography" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    
}

//--View Thriller Movies
module.exports.getMoviesThriller = function(req,res,next){
    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Thriller" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Thriller" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Thriller" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Thriller" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Thriller" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
}

//--View Drama Movies
module.exports.getMoviesDrama = function(req,res,next){
    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Drama" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Drama" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Drama" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Drama" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Drama" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
}
}
//--View Adventure Movies
module.exports.getMoviesAdventure = function(req,res,next){

    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Adventure" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Adventure" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Adventure" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Adventure" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Adventure" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
}
}
//--View Horror Movies
module.exports.getMoviesHorror = function(req,res,next){

    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Horror" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Horror" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Horror" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Horror" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Horror" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
}
}
//--View Action Movies
module.exports.getMoviesAction = function(req,res,next){

    
    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Action" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Action" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Action" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Action" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Action" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
}   
//--View Comedy Movies
module.exports.getMoviesComedy = function(req,res,next){ 
    let sortingFilter = req.params.sortingFilter;
    if(sortingFilter === "Not sorted"){
        database.query('Select * FROM movies where genre="Comedy" AND  status ="ACCEPTED"',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "High Rates")  {
        database.query('Select * FROM movies where genre="Comedy" AND  status ="ACCEPTED" ORDER BY rating DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }  
    else if(sortingFilter === "Low Rates") {
        database.query('Select * FROM movies where genre="Comedy" AND  status ="ACCEPTED" ORDER BY rating ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Latest") {
        database.query('Select * FROM movies where genre="Comedy" AND  status ="ACCEPTED" ORDER BY year DESC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
    else if(sortingFilter === "Oldest") {
        database.query('Select * FROM movies where genre="Comedy" AND  status ="ACCEPTED" ORDER BY year ASC',function(error,results,fields){
            if(error) return next(error);
            else{
            return res.send(results);
            }
        });
    }
}



