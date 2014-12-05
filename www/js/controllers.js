angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope){
}) 


/* Controladores alojamiento */

.controller('AlojamientoCtrl', function($scope, $stateParams, Organizations) {
  $scope.organizations= Organizations.get($stateParams.organizationId);  
})

.controller('AlojamientoHomeCtrl', function($scope, $stateParams, Organizations) {
  $scope.organizations= Organizations.get($stateParams.organizationId);
})

.controller('AlojamientoContactoCtrl', function($scope, $stateParams, Contacts){
  $scope.contacts = Contacts.get($stateParams.contactId);
})

.controller('HabitacionesCtrl', function($scope,Rooms) {
  $scope.rooms = Rooms.all();
})

.controller('TypeCtrl', function($scope, $stateParams, Types) {
  $scope.types = Types.get($stateParams.typeId);
})

.controller('HorariosCtrl', function($scope, $stateParams, Schedules) {
  $scope.schedules = Schedules.get($stateParams.scheduleId);
})


/*Controladores del Mapa*/

.controller("MapController", function($scope, $state, $rootScope){
	var MY_MAPTYPE_ID = 'custom_style';

	var featureOpts = [
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [
      { hue: '#fe974b' },
      { visibility: 'simplified' },
      { gamma: 0.5 },
      { weight: 0.5 }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {visibility: "off"}
    ]
  }

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

  navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
          position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          map: map,
          title: "Aquí"
      });
  });

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var styledMapOptions = {
    name: 'Viajero'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.43663, -70.64445),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodging.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 0),
      new google.maps.Size(50, 50)
    ),
    title: 'Hostal y apartamentos Andes'
	});

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.43733, -70.64186),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/diner.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 0),
      new google.maps.Size(50, 50)
    ),
    title: 'Bombón oriental'
  });

  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.58393, -70.39690),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/adventure.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 0),
      new google.maps.Size(50, 50)
    ),
    title: 'Ruta vertical'
  });

  google.maps.event.addListener(marker1, 'click', function(){
    $state.go('alojamiento.home', {organizationId: 0})
  });

  google.maps.event.addListener(marker2, 'click', function(){
    $state.go('alojamiento.home', {organizationId: 1});
  });

  google.maps.event.addListener(marker3, 'click', function(){
    $state.go('alojamiento.home', {organizationId: 2});
  });

google.maps.event.addListenerOnce(map, 'idle', function(){
    navigator.splashscreen.hide();
});

map.mapTypes.set(MY_MAPTYPE_ID, customMapType);  

});