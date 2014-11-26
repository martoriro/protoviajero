// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
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
});

example.controller('MapController', function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(-33.4558,-70.6181);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true,
            zoomControl: true
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var image = '../img/tapa.png';
        var newLatlng = new google.maps.LatLng(-33.4558,-70.6181);
        var myLocation = new google.maps.Marker({
                position: newLatlng,
                icon: image,
                map: map,
                title: "My Location"
        });
        var myLocation2 = new google.maps.Marker({
                position: new google.maps.LatLng(-33.4558,-70.6184),
                icon: image,
                map: map,
                title: "My Location"
        });
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            /*var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(-33.4558,-70.6181),
                map: map,
                title: "My Location"
            });*/
        });
 
        $scope.map = map;
    });
 
});
