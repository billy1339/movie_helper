// server.js
	var express  = require('express');
	var app      = express();
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
    var methodOverride = require('method-override');

  	app.use(express.static(__dirname + '/dist'));     // set the static files location /public/img will be /img for users

    // app.use(morgan('dev'));                                      // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    require('./Server/routes')(app);
    
    // listen (start app with node server.js) ======================================

    app.listen(8080);
    console.log("App listening on port 8080");






 	