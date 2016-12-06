angular.module('app')
.controller('infoCtrl', function($scope, mainSrv){


  $scope.getLocation = function() {
    $scope.locations = mainSrv.data;
  }
  $scope.getLocation();

  $scope.link = "https://twitter.com/intent/tweet?url=&original_referer=";
  $scope.goTo = function(url) {
    $window.open(url)
  }




})
