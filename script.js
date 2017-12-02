let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

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
	let newUser = {
		first_name: req.body.first_name;
		last_name: req.body.last_name;
	}
	
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
})