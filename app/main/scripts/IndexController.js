angular
  .module('main')
  .controller('IndexController', function($scope, supersonic, $http) {
    supersonic.ui.tabs.hide();
    $scope.response = 'RESPONSE';
    var url = "127.0.0.1:5000";
    $http.get(url).success(function(response){
        $scope.response = "WORKED";
    }).error(function(err){
        $scope.response = err.toString();
    });
  });


/*
    var app = new Clarifai.App(
      'SP-cvdgsUVI-mFzs2oAFdWM1GUdkfGk_URKBPGwU',
      'o7s0YcPwIKl6Re-Kn5rYYJptnH4PiFN9oyGg7YC4'
    );

    $scope.response = '';

    $scope.takePicture = function() {
      supersonic.media.camera.takePicture({
        destinationType:'dataURL',
        quality:50
      }).then(function(result) {
        return app.models.predict(Clarifai.FOOD_MODEL, result);
      }).then(function(prediction) {
        supersonic.logger.log(prediction); // Required ???

        var concepts = prediction.data.outputs[0].data.concepts;
        var tags = [];
        for (var i = 0; i < concepts.length; i++){
            if (concepts[i]['value'] > .8)
                tags.push(concepts[i]['name']);
        }
        $scope.response = "Tags found:\n" + tags.join(' ');

//        var url = 'https://api.edamam.com/search';
        var tag_query = tags.join('%20');
        /*
        var params = {
            'app_id'  : '9bf324ca',
            'app_key' : '91243d2ab000b59fa19107ed4e5c2853',
            'q'       : tag_query,
            'to'      : 4
        };

        var url = 'http://wwakljsfhaskljdfhw.google.com';
        return $http.get(url);
      }).then(function(response) {
        var data = response.data;
        $scope.response += "FUCK MICHIGAN";
      }).catch(function(err) {
        supersonic.logger.log(err); // Required ???
        $scope.response = err;
      });
    };
  });
*/
