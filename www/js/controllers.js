angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope){
}) 

.controller('AlojamientoCtrl', function($scope) {
})

/*.controller('ContactoCtrl', function($scope) {
})*/

.controller('HabitacionesCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('HorariosCtrl', function($scope) {
})

.controller("MapController", function($scope, $state){
  var x2js = new X2JS();
  console.log(x2js.xml2json('xml/lugares.xml'));

	var MY_MAPTYPE_ID = 'custom_style';

	var featureOpts = [{
    stylers: [
      { hue: '#8d9aff' },
      { visibility: 'simplified' },
      { gamma: 0.5 },
      { weight: 0.5 }
    ]}
	];

	var mapOptions = {
		center: new google.maps.LatLng(-33.4500, -70.6667),
      zoom: 10,
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

  var imageL = {
    url: 'img/lodging.png',
    size: 15,
    scaledSize: 10
  };

	var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.43663, -70.64445),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodging.png',
      new google.maps.Size(10, 15),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 0),
      new google.maps.Size(10, 15)
    ),
    title: 'Hostal y apartamentos Andes"'
	});
  google.maps.event.addListener(map, 'zoom_changed', function(){
    var largo = 50 * (map.getZoom()-10);    
    var ancho = largo / 1.42;
    var icon = marker1.getIcon();
    console.log(icon);
    marker1.setIcon(new google.maps.MarkerImage(
            icon.url,
            new google.maps.Size(largo,  ancho),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0),
            new google.maps.Size(largo, ancho)
        ));
    console.log(icon);  
  });

  var imageD = {
    url: 'img/diner.png',    
    scale: 10
  }

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.43733, -70.64186),
    map: map,
    icon: imageD,
    title: 'Bombón oriental"'
  });

  var imageA = {
    url: 'img/adventure.png',    
    scale: 10
  }

  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.58393, -70.39690),
    map: map,
    icon: imageA,
    title: 'Ruta vertical"'
  });

  google.maps.event.addListener(marker1, 'click', function(){
    $state.go('alojamiento.home');
  });

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);  

});