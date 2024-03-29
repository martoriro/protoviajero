angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
//***********************************LOGIN******************************/
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/crear-cuenta.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/beneficios.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal3 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/facebook.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal4 = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.create = function() {
    $scope.modal2.show();
  };

  $scope.closeCreate = function(){
    $scope.modal2.hide();
  };

$scope.beneficios = function() {
    $scope.modal3.show();
  };

$scope.closeBeneficios = function(){
    $scope.modal3.hide();
};

 $scope.facebook = function() {
    $scope.modal4.show();
  };

  $scope.closeFacebook = function(){
    $scope.modal4.hide();
  };
})

.controller('HomeCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/buscador.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.buscador = modal;
  });


  $scope.closeSearch = function(){
    $scope.buscador.hide();
  };

  $scope.search = function() {
    $scope.buscador.show();
  };

})


/* Controladores alojamiento */

.controller('AlojamientoCtrl', function($scope, $stateParams, Organizations) {
  $scope.organizations= Organizations.get($stateParams.organizationId);  
})

.controller('AlojamientoHomeCtrl', function($scope, $stateParams, Organizations, $ionicModal, $timeout) {
  $scope.organizations= Organizations.get($stateParams.organizationId);

  
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/construccion.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalConstruccion = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeConstruccion = function() {
    $scope.modalConstruccion.hide();
  };

  // Open the login modal
  $scope.construccion = function() {
    $scope.modalConstruccion.show();
  };


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

.controller('RestaurantCtrl', function($scope, $stateParams) {

})

.controller('RestaurantHomeCtrl', function($scope, $stateParams,$ionicModal, $timeout) {
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/construccion.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalConstruccion = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeConstruccion = function() {
    $scope.modalConstruccion.hide();
  };

  // Open the login modal
  $scope.construccion = function() {
    $scope.modalConstruccion.show();
  };
})

.controller('RestaurantContactoCtrl', function($scope, $stateParams) {

})

.controller('RestaurantHorariosCtrl', function($scope, $stateParams) {

})

.controller('RestaurantMenuCtrl', function($scope, MenuItems) {
  $scope.MenuItems = MenuItems.all();
})


.controller('DaCtrl', function($scope, $stateParams) {

})

.controller('DaHomeCtrl', function($scope, $stateParams,$ionicModal, $timeout) {
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/construccion.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalConstruccion = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeConstruccion = function() {
    $scope.modalConstruccion.hide();
  };

  // Open the login modal
  $scope.construccion = function() {
    $scope.modalConstruccion.show();
  };
})
.controller('DaContactoCtrl', function($scope, $stateParams) {

})

.controller('DaHorariosCtrl', function($scope, $stateParams) {

})

.controller('DaDeportesCtrl', function($scope, DeportesItems) {
  $scope.DeportesItems = DeportesItems.all();
})


.controller('SearchCtrl', function($scope, $stateParams) {
  $ionicModal.fromTemplateUrl('templates/construccion.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalConstruccion = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeConstruccion = function() {
    $scope.modalConstruccion.hide();
  };

  // Open the login modal
  $scope.construccion = function() {
    $scope.modalConstruccion.show();
  };
})

.controller('RedCtrl', function($scope, $ionicModal, $stateParams) {
  $ionicModal.fromTemplateUrl('templates/construccion.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalConstruccion = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeConstruccion = function() {
    $scope.modalConstruccion.hide();
  };

  // Open the login modal
  $scope.construccion = function() {
    $scope.modalConstruccion.show();
  };

})

.controller('RedHomeCtrl', function($scope, $ionicModal, $stateParams) {
  $ionicModal.fromTemplateUrl('templates/buscador-amigos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.buscador = modal;
  });

  $scope.closeSearch = function(){
    $scope.buscador.hide();
  };

  $scope.search = function() {
    $scope.buscador.show();
  };
})

/*Controladores del Mapa*/
.controller("MapLogController", function($scope, $state, $rootScope){
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
      zoom: 14,
        mapTypeControlOptions: {
    		mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID,
		disableDefaultUI: true,
		zoomControl: true

  };

  var options = {enableHighAccuracy: true};

  var myLocation;
  var amigo1;
  var amigo2;

  navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      myLocation = new google.maps.Marker({
          position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          map: map,
          icon:  new google.maps.MarkerImage(
            'img/juan.png',
            new google.maps.Size(50, 50),
            new google.maps.Point(0, 0),
            null,
            new google.maps.Size(50, 50)
          ),
          title: "Aquí"
      });
  
    amigo1 = new google.maps.Marker({
      position: new google.maps.LatLng(pos.coords.latitude-0.00150, pos.coords.longitude-0.00450),
      map: map,
      icon:  new google.maps.MarkerImage(
        'img/jorge.png',
        new google.maps.Size(50, 50),
        new google.maps.Point(0, 0),
        null,
        new google.maps.Size(50, 50)
      ),
      title: 'Amigo'
    });

    amigo2 = new google.maps.Marker({
      position: new google.maps.LatLng(pos.coords.latitude+0.00477, pos.coords.longitude+0.00200),
      map: map,
      icon:  new google.maps.MarkerImage(
        'img/joel.png',
        new google.maps.Size(50, 50),
        new google.maps.Point(0, 0),  
        null,
        new google.maps.Size(50, 50)
      ),
      title: 'Amigo'
    });

  }, null, options);

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
      null,
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
      null,
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
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Ruta vertical'
  });

  var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(-29.90998, -71.27452),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Hotel Club La Serena'
  });

  var contentString = '<div id="content">'+
      '<h3>Hotel Club la serena</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de alojamiento</p>'+
      '<p>Avenida del Mar 1000 - La Serena - Coquimbo</p>'+
      '</div>'+
      '</div>';  

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker4, 'click', function() {
    infowindow.open(map,marker4);
  });


  var marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(-36.82621, -73.04934),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Restaurant Mamut'
  });

  var contentString2 = '<div id="content">'+
      '<h3>Restaurant Mamut</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p>Peato Barros Arana 744-Concepcion</p>'+
      '</div>'+
      '</div>';  

  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  });
  
  google.maps.event.addListener(marker5, 'click', function() {
    infowindow2.open(map,marker5);
  });

  var marker6 = new google.maps.Marker({
    position: new google.maps.LatLng(-18.45007, -70.29642),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/adventureOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Kayak Chinchorro'
  });

  var contentString3 = '<div id="content">'+
      '<h3>Kayak Chinchorro</h3>'+
      '<div id="bodyContent">'+
      '<p>Deporte aventura</p>'+
      '<p>La ruta de los Chinchorros 456-Arica</p>'+
      '</div>'+
      '</div>';  

  var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  });
  
  google.maps.event.addListener(marker6, 'click', function() {
    infowindow3.open(map,marker6);
  });

  var marker7 = new google.maps.Marker({
    position: new google.maps.LatLng(-53.15796, -70.90438),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Restaurant Sabores'
  });

  var contentString4 = '<div id="content">'+
      '<h3>Restaurant Sabores</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p>Mejicana 702, 2do. Piso-Punta Arenas</p>'+
      '</div>'+
      '</div>';  

  var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
  });
  
  google.maps.event.addListener(marker7, 'click', function() {
    infowindow4.open(map,marker7);
  });

  var marker8 = new google.maps.Marker({
    position: new google.maps.LatLng(-42.47953, -73.69667),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Hotel Quilquico'
  });

  var contentString5 = '<div id="content">'+
      '<h3>Hotel Quilquico</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de alojamiento</p>'+
      '<p>Peninsula de Rilan 657 - Castro</p>'+
      '</div>'+
      '</div>';  

  var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
  });
  
  google.maps.event.addListener(marker8, 'click', function() {
    infowindow5.open(map,marker8);
  });


  var marker9 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.49437, -70.74822),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Grand Hyatt'
  });

  var contentString6 = '<div id="content">'+
      '<h3>Grand Hyatt</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de alojamiento</p>'+
      '<p> Kennedy Avenue 4601 - Santiago </p>'+
      '</div>'+
      '</div>';  

  var infowindow6= new google.maps.InfoWindow({
      content: contentString6
  });
  
  google.maps.event.addListener(marker9, 'click', function() {
    infowindow6.open(map,marker9);
  });

  var marker10 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.44011, -70.65588),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Santiago Gourmet'
  });

  var contentString7 = '<div id="content">'+
      '<h3>Santiago Gourmet</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p> Huérfanos 315-Santiago </p>'+
      '</div>'+
      '</div>';  

  var infowindow7= new google.maps.InfoWindow({
      content: contentString7
  });
  
  google.maps.event.addListener(marker10, 'click', function() {
    infowindow7.open(map,marker10);
  });

  var marker11 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.46214, -70.59407),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Casa Muriel'
  });

  var contentString8 = '<div id="content">'+
      '<h3>Casa Muriel</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de Alojamiento</p>'+
      '<p>Dr Johow 657-Santiago </p>'+
      '</div>'+
      '</div>';  

  var infowindow8= new google.maps.InfoWindow({
      content: contentString8
  });
  
  google.maps.event.addListener(marker11, 'click', function() {
    infowindow8.open(map,marker11);
  });

  var marker12 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.48322, -70.53414),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Antuperu'
  });

  var contentString9 = '<div id="content">'+
      '<h3>Antuperu</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p>Antupiren 768 - Santiago</p>'+
      '</div>'+
      '</div>';  

  var infowindow9 = new google.maps.InfoWindow({
      content: contentString9
  });
  
  google.maps.event.addListener(marker12, 'click', function() {
    infowindow9.open(map,marker12);
  });

  function UbicacionControl(controlDiv, map){
    controlDiv.style = 'margin: 25px; z-index: 99;';

    var controlUI = document.createElement('div');
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var imgButton = document.createElement('img');
    imgButton.src = 'img/ubicame.png';
    imgButton.height = '50';
    imgButton.width = '50';
    controlUI.appendChild(imgButton);

    google.maps.event.addDomListener(controlUI, 'click', function() {
      var options = {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};

      navigator.geolocation.getCurrentPosition(function(pos) {
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          myLocation.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          amigo1.setPosition(new google.maps.LatLng(pos.coords.latitude-0.00300, pos.coords.longitude-0.00150));
          amigo2.setPosition(new google.maps.LatLng(pos.coords.latitude+0.00477, pos.coords.longitude+0.00200));

      });
  });

  }

  var homeControlDiv = document.createElement('div');
  var homeControl = new UbicacionControl(homeControlDiv, map);

  homeControlDiv.index = 0;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

  google.maps.event.addListener(marker1, 'click', function(){
    $state.go('alojamiento.home', {organizationId: 0})
  });

  google.maps.event.addListener(marker2, 'click', function(){
    $state.go('restaurant.home', {organizationId: 0});
  });

  google.maps.event.addListener(marker3, 'click', function(){
    $state.go('da.home', {organizationId: 0});
  });

google.maps.event.addListenerOnce(map, 'idle', function(){
    navigator.splashscreen.hide();
});

map.mapTypes.set(MY_MAPTYPE_ID, customMapType);  

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
      zoom: 14,
        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    disableDefaultUI: true,
    zoomControl: true

  };

  var options = {enableHighAccuracy: true};

  var myLocation;

  navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      myLocation = new google.maps.Marker({
          position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          map: map,
          icon:  new google.maps.MarkerImage(
            'img/yo.png',
            new google.maps.Size(50, 50),
            new google.maps.Point(0, 0),
            null,
            new google.maps.Size(50, 50)
          ),
          title: "Aquí"
      });
  }, null, options);

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
      null,
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
      null,
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
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Ruta vertical'
  });

    var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(-29.90998, -71.27452),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Hotel Club La Serena'
  });

  var contentString = '<div id="content">'+
      '<h3>Hotel Club la serena</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de alojamiento</p>'+
      '<p>Avenida del Mar 1000 - La Serena - Coquimbo</p>'+
      '</div>'+
      '</div>';  

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker4, 'click', function() {
    infowindow.open(map,marker4);
  });


  var marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(-36.82621, -73.04934),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Restaurant Mamut'
  });

  var contentString2 = '<div id="content">'+
      '<h3>Restaurant Mamut</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p>Peato Barros Arana 744-Concepcion</p>'+
      '</div>'+
      '</div>';  

  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  });
  
  google.maps.event.addListener(marker5, 'click', function() {
    infowindow2.open(map,marker5);
  });

  var marker6 = new google.maps.Marker({
    position: new google.maps.LatLng(-18.45007, -70.29642),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/adventureOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Kayak Chinchorro'
  });

  var contentString3 = '<div id="content">'+
      '<h3>Kayak Chinchorro</h3>'+
      '<div id="bodyContent">'+
      '<p>Deporte aventura</p>'+
      '<p>La ruta de los Chinchorros 456-Arica</p>'+
      '</div>'+
      '</div>';  

  var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  });
  
  google.maps.event.addListener(marker6, 'click', function() {
    infowindow3.open(map,marker6);
  });

  var marker7 = new google.maps.Marker({
    position: new google.maps.LatLng(-53.15796, -70.90438),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Restaurant Sabores'
  });

  var contentString4 = '<div id="content">'+
      '<h3>Restaurant Sabores</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p>Mejicana 702, 2do. Piso-Punta Arenas</p>'+
      '</div>'+
      '</div>';  

  var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
  });
  
  google.maps.event.addListener(marker7, 'click', function() {
    infowindow4.open(map,marker7);
  });

  var marker8 = new google.maps.Marker({
    position: new google.maps.LatLng(-42.47953, -73.69667),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Hotel Quilquico'
  });

  var contentString5 = '<div id="content">'+
      '<h3>Hotel Quilquico</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de alojamiento</p>'+
      '<p>Peninsula de Rilan 657 - Castro</p>'+
      '</div>'+
      '</div>';  

  var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
  });
  
  google.maps.event.addListener(marker8, 'click', function() {
    infowindow5.open(map,marker8);
  });


  var marker9 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.49437, -70.74822),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Grand Hyatt'
  });

  var contentString6 = '<div id="content">'+
      '<h3>Grand Hyatt</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de alojamiento</p>'+
      '<p> Kennedy Avenue 4601 - Santiago </p>'+
      '</div>'+
      '</div>';  

  var infowindow6= new google.maps.InfoWindow({
      content: contentString6
  });
  
  google.maps.event.addListener(marker9, 'click', function() {
    infowindow6.open(map,marker9);
  });

  var marker10 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.44011, -70.65588),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Santiago Gourmet'
  });

  var contentString7 = '<div id="content">'+
      '<h3>Santiago Gourmet</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p> Huérfanos 315-Santiago </p>'+
      '</div>'+
      '</div>';  

  var infowindow7= new google.maps.InfoWindow({
      content: contentString7
  });
  
  google.maps.event.addListener(marker10, 'click', function() {
    infowindow7.open(map,marker10);
  });

  var marker11 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.46214, -70.59407),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/lodgingOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Casa Muriel'
  });

  var contentString8 = '<div id="content">'+
      '<h3>Casa Muriel</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio de Alojamiento</p>'+
      '<p>Dr Johow 657-Santiago </p>'+
      '</div>'+
      '</div>';  

  var infowindow8= new google.maps.InfoWindow({
      content: contentString8
  });
  
  google.maps.event.addListener(marker11, 'click', function() {
    infowindow8.open(map,marker11);
  });

  var marker12 = new google.maps.Marker({
    position: new google.maps.LatLng(-33.48322, -70.53414),
    map: map,
    icon:  new google.maps.MarkerImage(
      'img/dinerOff.png',
      new google.maps.Size(50, 50),
      new google.maps.Point(0, 0),
      null,
      new google.maps.Size(50, 50)
    ),
    title: 'Antuperu'
  });

  var contentString9 = '<div id="content">'+
      '<h3>Antuperu</h3>'+
      '<div id="bodyContent">'+
      '<p>Servicio para comensales</p>'+
      '<p>Antupiren 768 - Santiago</p>'+
      '</div>'+
      '</div>';  

  var infowindow9 = new google.maps.InfoWindow({      
      content: contentString9
  });
  
  google.maps.event.addListener(marker12, 'click', function() {
    infowindow9.open(map,marker12);
  });

  function UbicacionControl(controlDiv, map){
    controlDiv.style = 'margin: 25px; z-index: 99;';

    var controlUI = document.createElement('div');
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var imgButton = document.createElement('img');
    imgButton.src = 'img/ubicame.png';
    imgButton.height = '50';
    imgButton.width = '50';
    controlUI.appendChild(imgButton);

    google.maps.event.addDomListener(controlUI, 'click', function() {
      var options = {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};

      navigator.geolocation.getCurrentPosition(function(pos) {
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          myLocation.setPosition(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      });
  });

  }

  var homeControlDiv = document.createElement('div');
  var homeControl = new UbicacionControl(homeControlDiv, map);

  homeControlDiv.index = 0;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

  google.maps.event.addListener(marker1, 'click', function(){
    $state.go('alojamiento.home', {organizationId: 0})
  });

  google.maps.event.addListener(marker2, 'click', function(){
    $state.go('restaurant.home', {organizationId: 0});
  });

  google.maps.event.addListener(marker3, 'click', function(){
    $state.go('da.home', {organizationId: 0});
  });

google.maps.event.addListenerOnce(map, 'idle', function(){
    navigator.splashscreen.hide();
});

map.mapTypes.set(MY_MAPTYPE_ID, customMapType);  

});