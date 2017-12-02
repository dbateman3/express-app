let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

/* let logger = function(req, res, next){
	console.log(req);
	next();
}; 


app.use(logger); */
//body parser middleware
app.use(bodyParser.json());
app.use(body-parser.urlencoded({extended: false}));



app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
})