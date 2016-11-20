angular
  .module('recipes')
  .controller('IndexController', function($scope, $http, supersonic) {
      var keyword_string = steroids.view.params.keywords; // str
      var keywords = JSON.parse(keyword_string); // array
      var query_string = keywords.join(" "); // str

      var backend_url = "http://wildhacks-backend.herokuapp.com/";
      var options = {params: {query: query_string}};

      $scope.cautions = [];
      $scope.recipes = [];
      $scope.actual_info = [];

      $http.get(backend_url, options).then(function(response) {
        var r = response.data;
        var num_recipes = r.to;
        var recipes = r.hits;

        recipes.forEach(function(entry) {
            $scope.actual_info.push({
                name: entry.recipe.label,
                imageUrl: entry.recipe.image,
                cautions: entry.recipe.cautions,
                healthLabels: entry.recipe.healthLabels
            });

            entry.recipe.cautions.forEach(function(caution) {
                // Check for duplicates
                if ($scope.cautions.indexOf(caution) === -1)
                    $scope.cautions.push(caution);
            });
        })
      }).catch(function(err) {
        supersonic.logger.log(err);
        $scope.response = err;
      });
  });
