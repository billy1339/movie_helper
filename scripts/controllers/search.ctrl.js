angular.module('SearchCtrl', []).controller('SearchCtrl', SearchController);

function SearchController($scope, $http) {

	const vm = this; 
	vm.searchResults = {};
	vm.searchTerm = "";

	vm.getSearchTypeAhead = getSearchTypeAhead;
	vm.getSearchReslts = getSearchReslts;


	function getSearchTypeAhead(term) {
		if (term.length < 3) {
			return;
		}
	}

	function getSearchReslts(term) {
		console.log(term);
	}

};