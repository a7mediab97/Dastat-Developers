var express = require('express');
var router = express.Router();

//Schema Controllers
var User = require('./controllers/UserController');
var Movie = require('./controllers/MovieController')

//please add only routers here, if you need to call a function require its class
//DONT IMPLEMENT CONTROLLER FUNCTION HERE!!


//------------------------USERS ROUTES-------------------------------
router.get('/users', User.getUsers);





//------------------------MOVIES ROUTES------------------------------







//exporting routes to the project
module.exports = router;
