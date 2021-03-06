let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let expressValidator = require('express-validator');

let app = express();

/* let logger = function(req, res, next){
	console.log(req);
	next();
}; 


app.use(logger); */

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// global variables
app.use(function(req, res, next) {
	res.locals.errors = null;
	next();
});

// Express validator middleware
app.use(expressValidator({
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.'),
		root = namespace.shift(),
		formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	}
})); 

let users = [
	{
		first_name: 'Dan',
		last_name: 'Bateman',
		age: 30

	}
];



app.get('/', function(req, res) {
	res.render('index', {
		title: 'Hello there buddy',
		users: users
	});
});

app.post('/users/add', function(req, res) {
	
	req.checkBody('first_name', 'first name is required').notEmpty();
	req.checkBody('last_name', 'Last name is required').notEmpty();
	
	let errors = req.validationErrors();
	
	if(errors){
		console.log('Error');
		res.render('index', {
			title: 'Hello there buddy',
			users: users,
			errors: errors,
	});
	} else {
		let newUser = {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
		};

		console.log('success');
	} 
	
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
})