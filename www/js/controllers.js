angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope){

}) 

.controller("MapController", function($scope){
	var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

});