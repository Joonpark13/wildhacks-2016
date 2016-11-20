angular.module('recipes', [
  // Declare any module-specific AngularJS dependencies here
  'common'
]);

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

      $http.get(backend_url, options).then(function(response) {
        var num_recipes = r.to;
        var recipes = r.hits;
        $scope.actual_info = [];

        recipes.forEach(function(entry) {
            $scope.actual_info.push({
                name: entry.recipe.label,
                image_url: entry.recipe.image_url,
                cautions: entry.recipe.cautions,
                health_labels: entry.recipe.health_labels
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
