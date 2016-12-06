angular.module('app',['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngMap'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('','/')
    .otherwise('/error')

    $stateProvider
      .state('home', {
        templateUrl: 'homepage/views/home.html',
        controller: 'homeCtrl',
        url: '/'
      })
      .state('map',{
        templateUrl:'map_page/views/map.html',
        controller: 'mapCtrl',
        url: '/map/:param'
      })
      .state('animal_info', {
        templateUrl: 'info_page/views/info.html',
        controller: 'infoCtrl',
        url: '/info/:param'
      })





    });
