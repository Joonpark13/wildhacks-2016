angular
  .module('main')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();

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
        app.models.predict(Clarifai.FOOD_MODEL, result).then(
          function(response) {
            supersonic.logger.log(response); // Required ???
            $scope.response = response.data.outputs[0].data.concepts;
          },
          function(err) {
            supersonic.logger.log(err); // Required ???
            $scope.response = err;
          }
        );
      });
    };
  });