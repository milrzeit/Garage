angular.module('starter.services', [])

  .factory('Commands', function ($http, $q) {
  // Might use a resource here that returns a JSON array
  
  return {
    doCommand: function (params) {

      var deferred = $q.defer();

      $http.get('http://localhost:3000/posts/1')
        .then(function (result) {
        console.log(result.data);
        deferred.resolve(result.data);
      },
        function (result) {
          deferred.reject(result);
        });
      return deferred.promise;
    }
  };
});

;
