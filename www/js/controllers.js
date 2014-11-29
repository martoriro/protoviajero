angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope){

}) 

.controller("MapController", function($scope){
	var MY_MAPTYPE_ID = 'custom_style';

	var featureOpts = [{
      stylers: [
        { hue: '#ff8d00' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]}
  	];

	var mapOptions = {
		center: new google.maps.LatLng(-33.4500, -70.6667),
          zoom: 8,
          mapTypeControlOptions: {
      		mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    		},
    		mapTypeId: MY_MAPTYPE_ID,
    		disableDefaultUI: true,
    		zoomControl: true

    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var styledMapOptions = {
	    name: 'Viajero'
  	};

  	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  	var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-33.4558, -70.6181),
      map: map,
      icon: 'img/botella.png',
      title: 'Lugar 1'
  	});

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

});