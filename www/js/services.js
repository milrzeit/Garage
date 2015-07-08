angular.module('starter.services', [])

  .factory('Commands', function ($http, $q) {
  // Might use a resource here that returns a JSON array
  
  return {
    doCommand: function (command) {

      var deferred = $q.defer();

      $http.get('http://localhost:3000/' + command)
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
