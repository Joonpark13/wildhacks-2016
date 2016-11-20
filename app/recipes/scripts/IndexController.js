angular
  .module('recipes')
  .controller('IndexController', function($scope, $http, supersonic) {
      var keyword_string = steroids.view.params.keywords; // str
      var keywords = JSON.parse(keyword_string); // array
      var query_string = keywords.join(" "); // str
      var debug = 0;

      var backend_url = "http://wildhacks-backend.herokuapp.com/";
      var params = {query: query_string};

      $http.get(backend_url, params).then(
              function(response){
                  var r = JSON.parse(response.data);

                  if (debug){
                      $scope.response = r;
                      return;
                  }
                  var num_recipes = r['to'];
                  var recipes = r['hits'];
                  var actual_info = {};
                  var caution_arr = [];
                

                  for (var i = 0; i < num_recipes; i++){
                      var recipe = recipes[i];
                      var info = {};
                      info['name'] = recipe['label'];
                      info['image_url'] = recipe['image_url'];
                      info['cautions'] = recipe['cautions'];
                      info['health_labels'] = recipe['health_labels'];
                      if (caution_arr.indexOf(recipe['cautions']) === -1)
                          caution_arr.push(info['caution']);
                      actual_info.push(info);

                  }

                  $scope.cautions = caution_arr;
                  $scope.recipes = actual_info;
              },
              function(err){
                  supersonic.logger.log(err);
                  $scope.response = err;
              });
  });
