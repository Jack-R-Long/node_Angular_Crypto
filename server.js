// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
//mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.json());
// MiddleWare: Session and Flash 
var session = require('express-session');
app.use(session({
	secret: 'cam_god',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))
const flash = require('express-flash');
app.use(flash());
// static content
// app.use(express.static(path.join(__dirname, './public/dist')));
app.use(express.static( __dirname + '/public/dist/public' ));


// // Get sockets
// const server = app.listen(8000);
// const io = require('socket.io')(server);
// var counter = 0;

// io.on('connection', function (socket) { //2
// 	  //Insert SOCKETS 
// });

// Mongoose Schema users 
// var TaskSchema = new mongoose.Schema({
// 	title: {type: String, required: [true, "Must have title"], minlength: [2, "Title must be longer than 2 characters"]},
// 	description: {type: String, default:null, minlength: 2},
// 	completed: {type: Boolean, required: [true, "Must indicate status"], default: false }
// }, {timestamps: true})
// mongoose.model('NEWMODEL', TaskSchema); // We are setting this Schema in our Models as 'Task'
// var Task = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'User'

// // ...delete all records of the User Model
// User.deleteMany({}, function(err){
// 	// This code will run when the DB has attempted to remove all matching records to {}
//    })

// root route to render the index.ejs view
//app.get('/')

// this route will be triggered if any of the routes above did not matchcopy
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
//The 404 Route (ALWAYS Keep this as the last route)
//app.get('*', function(request, response){
	//response.send("404")
//});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});