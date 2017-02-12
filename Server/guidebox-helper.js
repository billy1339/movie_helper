var client = require('guidebox');
var config = require('./config.json');
var Guidebox = new client(config.key, "US");

function guideboxHelper() {
  var self = this;


  self.getSources = function(callback) {
  	Guidebox.sources.list()
  		.then(function(response){
  			callback(response); 
  		});
  }

  self.searchMovies = function(query, callback) {
  		Guidebox.search.movies(
  			{
  				field: 'title', 
  				query: query
  			}).then(function(response) {
  				callback(response);
  			});
  }

  self.searchShows = function(query, callback) {
  		Guidebox.search.shows(
  			{
  				field: 'title', 
  				query: query
  			}).then(function(response) {
  				callback(response);
  			});
  }

  self.getShowById = function(id, callback) {
  		console.log(id);
  		Guidebox.shows.retrieve(id)
  			.then(function(response) {
  				callback(response);
  			});
  }

  self.getMovieById = function(id, callback) {
  		Guidebox.movies.retrieve(id)
  			.then(function(response) {
  				callback(response);
  			});
  }

}

// TODO. 
function defaultCallback(response, callback) {
	callback(response);
}

module.exports.guideboxHelper = guideboxHelper;
