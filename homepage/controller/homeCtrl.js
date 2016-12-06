angular.module('app')
.controller('homeCtrl', function($scope){


  $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
      id:0,
      image:'images/carousel/carousel1_lana.png'
    },
    {
      id:1,
      image:'images/carousel/carousel2_peacock.png'
    },
    {
      id:2,
      image:'images/carousel/carousel3_twig.png'
    },
    {
      id:3,
      image:'images/carousel/carousel4_paul.png'
    },
    {
      id:4,
      image:'images/carousel/carousel5_lark.png'
    },
    {
      id:5,
      image:'images/carousel/carousel6_elgon.png'
    }];
    var currIndex = 0;



    


})
