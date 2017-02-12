'use strict';

angular.module("SearchSvc", [])
    .service("SearchSvc", searchSvc)

function searchSvc($http) {
    function search(term) {
        var config = {
            term : term
        }
        return $http.get("api/search", config)
            .then(
            // success
            function (response) {
                return response;
            },
            // error
            function (response) {
                console.error("error: ");
            });
    }
     


    const service = {
        search: search
    };

    return service;

};