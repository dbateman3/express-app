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



app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
})