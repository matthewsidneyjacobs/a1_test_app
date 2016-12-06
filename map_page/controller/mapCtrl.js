angular.module('app')
.controller('mapCtrl', function($scope, mainSrv, $state, NgMap){



  $scope.getLocation = function() {
    $scope.locations = mainSrv.data;
  }
  $scope.getLocation();

  $scope.place = $state.params.param;


  // $scope.getCenter = function() {
  //   $scope.mapCenter = mainSrv.data.lat;
  // };
  // $scope.mapCenter = location.lat;
  // console.log($scope.mapCenter);



  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuJ2Nb_9pNv5FjSX1H2v0oJHD9y0_FFR0";


  $scope.frontGate = "32.735194, -117.149478";
  $scope.currentLocation = "current-location";


  // $scope.setMarker = function(location) {
  //   $scope.startMarker = location;
  // }
  // $scope.setMarker();
  //
  // $scope.setEndMarker = function(location) {
  //   $scope.endMarker = location;
  // }
  // $scope.setEndMarker();
  //
  //
  //  $scope.clearMarkers = function(location) {
  //    markers=[];
  //    $scope.endMarker = location
  //  }

   NgMap.getMap().then(function(map){});

  });
