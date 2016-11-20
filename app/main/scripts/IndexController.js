angular
  .module('main')
  .controller('IndexController', function($scope, supersonic, $http) {
    supersonic.ui.tabs.hide();

    var THRESHOLD = 0.8;

    $scope.tags = [];
    $scope.picture = '';
    $scope.checkboxModel = {};
    $scope.selected = [];

    var app = new Clarifai.App(
      'SP-cvdgsUVI-mFzs2oAFdWM1GUdkfGk_URKBPGwU',
      'o7s0YcPwIKl6Re-Kn5rYYJptnH4PiFN9oyGg7YC4'
    );

    $scope.takePicture = function() {
      // resest
      $scope.tags = [];
      $scope.picture = '';
      $scope.checkboxModel = {};
      $scope.selected = [];

      supersonic.media.camera.takePicture({
        destinationType: 'dataURL',
        quality: 50
      }).then(function(result) {
        $scope.picture = result;
        return app.models.predict(Clarifai.FOOD_MODEL, result);
      }).then(function(prediction) {
        var concepts = prediction.data.outputs[0].data.concepts;
        for (var i = 0; i < concepts.length; i++) {
            if (concepts[i].value > THRESHOLD) {
              var foodname = concepts[i].name;
              $scope.tags.push(foodname);
              $scope.checkboxModel[foodname] = false;
            }
        }
      }).catch(function(err) {
        supersonic.logger.log(err);
      });
    };

    $scope.submit = function() {
      // reset
      $scope.selected = [];

      for (var key in $scope.checkboxModel) {
        if ($scope.checkboxModel.hasOwnProperty(key)) {
          if ($scope.checkboxModel[key])
            $scope.selected.push(key);
        }
      }

      var view = new supersonic.ui.View("recipes#index?keywords=" + JSON.stringify($scope.selected));
      supersonic.ui.layers.push(view);
    };
  });
