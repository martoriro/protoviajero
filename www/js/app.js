// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.$state = $state;

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app',{
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views:{
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    .state("app.login",{
      url:"/login",
      views:{
        'menuContent' :{
          templateUrl:"templates/login.html"
        }
      }
    })

    .state("app.c",{
      url:"/c",
      views:{
        'menuContent' :{
          templateUrl:"templates/c.html"
        }
      }
    })

    .state('alojamiento', {
      url: "/alojamiento",
      abstract: true,
      templateUrl: "templates/alojamiento.html",
      controller: 'AlojamientoCtrl'
    })

    // Each tab has its own nav history stack:

    .state('alojamiento.home', {
      url: '/home/:organizationId',
      views: {
        'alojamiento-home': {
          templateUrl: 'templates/alojamiento-home.html',
          controller: 'AlojamientoHomeCtrl'
        }
      }
    })

    .state('alojamiento.contacto',{
      url: '/contacto/:contactId',
      views:{
        'alojamiento-contacto':{
          templateUrl: 'templates/alojamiento-contacto.html',
          controller: 'AlojamientoContactoCtrl'
        }
      }
    })

    .state('alojamiento.habitaciones', {
      url: '/habitaciones',
      views: {
        'alojamiento-habitaciones': {
          templateUrl: 'templates/alojamiento-habitaciones.html',
          controller: 'HabitacionesCtrl'
        }
      }
    })

    .state('alojamiento.habitacion-detail', {
      url: '/habitacion/:friendId',
      views: {
        'alojamiento-habitaciones': {
          templateUrl: 'templates/habitacion-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('alojamiento.horarios', {
      url: '/horarios/:scheduleId',
      views: {
        'alojamiento-horarios': {
          templateUrl: 'templates/alojamiento-horarios.html',
          controller: 'HorariosCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});