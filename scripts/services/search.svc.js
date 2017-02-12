'use strict';

angular.module("SearchSvc", [])
    .service("SearchSvc", searchSvc)

function searchSvc($http) {
    function fuzzySearch(query, isMovie) {
        var config = {
            params : {
                query : query,
                isMovie : isMovie   
            }
        }
        return $http.get("/api/search", config)
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

     function getById(itemId, isMovie) {
        var config = {
            params : {
                itemId : itemId,
                isMovie : isMovie   
            }
        }
        return $http.get("/api/getbyid", config)
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
        fuzzySearch : fuzzySearch,
        getById : getById
    };

    return service;

};