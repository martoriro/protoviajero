angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Organizations', function(){
  var organizations =[{id: 0, name:"Hotel Boutique Castillo Rojo", calificacion: 5, logo:"img/organization/logos/0.png",imgOrganizacion:["img/organization/images/pres00.png", "img/organization/images/pres01.png"], video: "url/video", mensajePresentacion: "El Hotel Boutique Castillo Rojo ofrece alojamiento con conexión Wi-Fi gratuita y un desayuno francés gratuito en Santiago, a 15 minutos a pie del cerro de Santa Lucía y del cerro de San Cristóbal.", servicioPrin:"Alojamiento", serviciosSec:["Restaurante", "Piscina"]}];
  return {
    all:function(){
      return organizations;
    },
    get: function(organizationId){
      return organizations[organizationId];
    }
  }
})

.factory('Contact', function(){horario
  var contacts = [{id: 0, name:"Hotel Boutique Castillo Rojo",logo:"img/organization/logos/0.png", fonos:["02-25333221", "02-23317854"], email: "info@castillorojo.cl", web: "www.castillorojo.cl" }];
  return{
    all:function(){
      return contacts;
    },
    get:function(contactId){
      return contacts[contactId];
    }
  }
})

.factory('Schedules', function(){
  var schedules = [{id:0, lunes:"8:00 a 22:00", martes:"8:00 a 22:00", miercoles: "8:00 a 22:00", jueves: "8:00 a 22:00", viernes: "8:00 a 22:00", sabado:"8:00 a 22:00", domingo: "8:00 a 22:00"}];
  return {
    all:function(){
      return schedules;
    },
    get:function(scheduleId){
      return schedules[scheduleId];
    }
  }  
})

.factory('Rooms', function(){
  var rooms = [{id:0, name: "Habitación clasica", precio: "$20.000"}];
  return{
    all:function(){
      return rooms;
    },
    get:function(roomId){
      return rooms[roomId];
    }
  }
})

.factory('Type', function(){
  var types = [{id: 0, fotos: ["foto1", "foto2"], descripcion: "descripción de la habitacion"}];
  return{
    all:function(){
      return types;
    },
    get:function(typeId){
      return types[typeId];
    }
  }
})


;