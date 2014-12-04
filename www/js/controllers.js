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

/*.controller('ContactoCtrl', function($scope) {
})*/

.controller('HabitacionesCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('HorariosCtrl', function($scope, $stateParams, Schedules) {
  $scope.schedules = Schedules.get($stateParams.scheduleId);
})

.controller("MapController", function($scope, $state){
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
    title: 'Hostal y apartamentos Andes"'
	});
  /*google.maps.event.addListener(map, 'zoom_changed', function(){
    var saiz = 50 * (map.getZoom()-10);
    var icon = marker1.getIcon();
    console.log(icon);
    marker1.setIcon(new google.maps.MarkerImage(
            icon.url,
            new google.maps.Size(saiz,  saiz),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0),
            new google.maps.Size(saiz, saiz)
        ));
    console.log(icon);  
  });*/

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
    title: 'Bombón oriental"'
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
    title: 'Ruta vertical"'
  });

  google.maps.event.addListener(marker1, 'click', function(){
    $state.go('alojamiento.home');
  });

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);  

});