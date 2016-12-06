angular.module('app')
.controller('mainCtrl', function($scope, mainSrv, $sce){
  $scope.test = "this is working"



 $scope.getLocation = function() {
   $scope.locations = mainSrv.data;
 }
 $scope.getLocation();

 // $scope.getCenters = function() {
 //   $scope.center= mainSrv.getCenters();
 // }
 // $scope.getCenters();

 $scope.selectedLoc = function(location) {
   $scope.selected = location;
  //  console.log($scope.selected)
 }

 $scope.selectedCenter = function(location) {
   $scope.mapDestination = location;
  //  console.log($scope.mapCenter)
 }

 $scope.isSelected = function(location) {
   return $scope.selected === location;
 }

 $scope.deleteMarkers = function() {
   clearMarkers();
   markers=[];
 }

 $scope.setEndMarker = function(location) {

   $scope.mapDestination = location;
 }
 $scope.setEndMarker();

 $scope.infoSelect = function(location) {
   $scope.selectedInfo = location;
 }

 $scope.descSelect = function(location) {
   $scope.selectedDesc = location;
 }


 $scope.trustUrl = function(url) {
   return $sce.trustAsResourceUrl(url);
 }
 $scope.link = "https://twitter.com/intent/tweet?url=&original_referer=";

 $scope.goTo = function(url) {
   $window.open(url)
 }





})
