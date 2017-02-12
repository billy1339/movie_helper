angular.module('SearchCtrl', []).controller('SearchCtrl', SearchController);

function SearchController($scope, $http, SearchSvc) {

	const vm = this; 
	vm.searchResults = {};
	vm.searchTerm = "";
	vm.isMovie = "";
	vm.getSearchTypeAhead = getSearchTypeAhead;
	vm.getSearchReslts = getSearchReslts;
	vm.searchById = searchById;
	vm.searchButtonText = "Search";
	vm.pickedMovieOrShow = {};

	function getSearchTypeAhead(term) {
		if (term.length < 3) {
			return;
		}
	}

	function getSearchReslts(term, isMovie) {
		vm.pickedMovieOrShow = {};
		vm.searchButtonText = "Loading...";
		SearchSvc.fuzzySearch(term, isMovie)
			.then(
				function(response) {
					vm.searchResults = response.data.results; 
					vm.searchButtonText = "Search";	
				}, function() {
					// error
				});
	}

	function searchById(id) {
		vm.searchResults = {};
		var moviePicked = (vm.isMovie == 'true');
		SearchSvc.getById(id, vm.isMovie)
			.then(
				function(response) {
					vm.pickedMovieOrShow = {
						isMovie : moviePicked,
						title : response.data.title, 
						network : response.data.network,
						purchase_sources : response.data.purchase_web_sources,
						subscription_sources : response.data.subscription_web_sources,
						tv_img : response.data.artwork_208x117,
						movie_img : response.data.poster_120x171
					}
				}, function() {
					// error
				});
	}

};