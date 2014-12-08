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

    .state("app.facebook",{
      url:"/facebook",
      views:{
        'menuContent' :{
          templateUrl:"templates/facebook.html"
        }
      }
    })

    .state("app.beneficios",{
      url:"/beneficios",
      views:{
        'menuContent' :{
          templateUrl:"templates/beneficios.html"
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

    .state("app.buscador", {
      url:"/buscador",
      views:{
        'menuContent' :{
          templateUrl:"templates/buscador.html"
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
      url: '/habitaciones/:roomId',
      views: {
        'alojamiento-habitaciones': {
          templateUrl: 'templates/alojamiento-habitaciones.html',
          controller: 'HabitacionesCtrl'
        }
      }
    })

    .state('alojamiento.habitacion-detail', {
      url: '/habitacion/:typeId',
      views: {
        'alojamiento-habitaciones': {
          templateUrl: 'templates/habitacion-detail.html',
          controller: 'TypeCtrl'
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
    })


    .state('restaurant', {
      url: "/restaurant",
      abstract: true,
      templateUrl: "templates/restaurant.html",
      controller: 'RestaurantCtrl'
    })

    // Each tab has its own nav history stack:

    .state('restaurant.home', {
      url: '/home/:organizationId',
      views: {
        'restaurant-home': {
          templateUrl: 'templates/restaurant-home.html',
          controller: 'RestaurantHomeCtrl'
        }
      }
    })

    .state('restaurant.contacto',{
      url: '/contacto/:contactId',
      views:{
        'restaurant-contacto':{
          templateUrl: 'templates/restaurant-contacto.html',
          controller: 'RestaurantContactoCtrl'
        }
      }
    })

    .state('restaurant.menu', {
      url: '/menu/:menuId',
      views: {
        'restaurant-menu': {
          templateUrl: 'templates/restaurant-menu.html',
          controller: 'RestaurantMenuCtrl'
        }
      }
    })

    .state('restaurant.horarios', {
      url: '/horarios/:scheduleId',
      views: {
        'restaurant-horarios': {
          templateUrl: 'templates/restaurant-horarios.html',
          controller: 'RestaurantHorariosCtrl'
        }
      }
    })

    .state('da', {
      url: "/da",
      abstract: true,
      templateUrl: "templates/da.html",
      controller: 'DaCtrl'
    })

    // Each tab has its own nav history stack:

    .state('da.home', {
      url: '/home/:organizationId',
      views: {
        'da-home': {
          templateUrl: 'templates/da-home.html',
          controller: 'DaHomeCtrl'
        }
      }
    })

  .state('da.contacto',{
      url: '/contacto/:contactId',
      views:{
        'da-contacto':{
          templateUrl: 'templates/da-contacto.html',
          controller: 'DaContactoCtrl'
        }
      }
    })

    .state('da.deportes', {
      url: '/deportes',
      views: {
        'da-deportes': {
          templateUrl: 'templates/da-deportes.html',
          controller: 'DaDeportesCtrl'
        }
      }
    })

    .state('da.horarios', {
      url: '/horarios/:scheduleId',
      views: {
        'da-horarios': {
          templateUrl: 'templates/da-horarios.html',
          controller: 'DaHorariosCtrl'
        }
      }
    })
    
    .state('red', {
      url: "/red",
      abstract: true,
      templateUrl: "templates/red.html",
      controller: 'RedCtrl'
    })

    .state('red.home', {
      url: '/home/:organizationId',
      views: {
        'redContent': {
          templateUrl: 'templates/red-home.html',
          controller: 'RedHomeCtrl'
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});