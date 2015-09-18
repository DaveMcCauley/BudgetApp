

// set up =============================

	// create app with express
	var express		= require('express');
	var app			= express();

	// mongoose for mongodb
	var mongoose	= require('mongoose');

	// log requests to the console (express4)
	var morgan		= require('morgan');

	// pull information from HTML POST (express4)
	var bodyParser  = require('body-parser');

	// simulate DELETE and PUT (express4)
	var methodOverride = require('method-override');


// configuration ======================
	// connect to the mongo database
	mongoose.connect('mongodb://McTester:artgum@ds031903.mongolab.com:31903/budgetapp')

	// set the static files location (this is folder that grunt builds into)
	app.use(express.static(__dirname + '/public'));

	// log every request to the console
	app.use(morgan('dev'));

	//parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({'extended':'true'}));

	// parse application/json
    app.use(bodyParser.json());

    // parse application/vnd.api+json as json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    // simulation
    app.use(methodOverride());


// define model for sample ===========
var Todo = mongoose.model('Todo', {
	text: String
});


// routes =============================

	// api ----------------------------

	// get all todos
	app.get('/api/todos', function(req, res) {

		//mongoose gets all the dodos in database
		Todo.find(function(err, todos) {
			// if thre is an error, send the error, nothing executes after
			if (err)
				res.send(err);
			res.json(todos);
		});
	});

	// create todo and send back all the todos after creation
	app.post('/api/todos',function(req, res) {

		// create a todo, info from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if(err)
				res.send(err);

			// get are return all the todos after successful creation
			Todo.find(function(err, todos) {
				if(err)
					res.send(err);
				res.json(todos);
			});
		});
	});

	// delete a todo
	app.delete('/api/todos/:todo_id',function(req,res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err) res.send(err);

			// get and return all of the todos after creating another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err);
				res.json(todos);
			});
		});
	});


	// application --------------------

	app.get('*',function(req, res) {
		// load the single view file, angular takes care of UI
		res.sendfile('./public/index.html')
	});


// listen (start app with node server.js) =====
app.listen(8080);
console.log("App listening on port 8080");
