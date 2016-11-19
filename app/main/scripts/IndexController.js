angular
  .module('main')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();

    $scope.response = '';

    var app = new Clarifai.App(
      'SP-cvdgsUVI-mFzs2oAFdWM1GUdkfGk_URKBPGwU',
      'o7s0YcPwIKl6Re-Kn5rYYJptnH4PiFN9oyGg7YC4'
    );

    app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
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
