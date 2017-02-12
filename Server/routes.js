var path = require('path');
var guideboxHelper = require('./guidebox-helper.js').guideboxHelper;

module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/search', function(req, res) {
            // use mongoose to get all nerds in the database
                var queryTerm = req.query.query;
                var isMovie = (req.query.isMovie == 'true');
                var helper = new guideboxHelper();

                if(isMovie) {
                    helper.searchMovies(queryTerm, function(response) {
                        res.json(response);
                    }); 
                } else {
                    helper.searchShows(queryTerm, function(response) {
                        res.json(response);
                    }); 
                }
            
        });

        app.get('/api/getbyid', function(req, res) {
            // use mongoose to get all nerds in the database
                var id = req.query.itemId;
                var isMovie = (req.query.isMovie == 'true');
                var helper = new guideboxHelper();

                if(isMovie) {
                    helper.getMovieById(id, function(response) {
                        res.json(response);
                    }); 
                } else {
                    helper.getShowById(id, function(response) {
                        res.json(response);
                    }); 
                }
            
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
    	   res.sendFile('dist/index.html', {root: __dirname}); // load our public/index.html file
        });

    };