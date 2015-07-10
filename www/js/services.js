angular.module('starter.services', [])

  .factory('Commands', function ($http, $q) {
  // Might use a resource here that returns a JSON array
  
  return {
    doCommand: function (command) {

      var deferred = $q.defer();
      // todo: make this a config setting!!
      var ip = '192.168.0.118';
      $http.get('http://' + ip + '/arduino/digital/13/' + command)
        .then(function (result) {
        console.log(result.data.response);
        deferred.resolve(result.data.response);
      },
        function (result) {
          deferred.reject(result);
        });
      return deferred.promise;
    }
  };
});

;
