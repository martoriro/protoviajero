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

.factory('Contacts', function(){
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
  var rooms = [
    {id:0, name: "Suite presidencial", precio: "$100.000 por día", foto: "img/organization/rooms/01.png"},
    {id:1, name: "Habitación primera clase", precio: "$60.000 por día",foto: "img/organization/rooms/02.png"},
    {id:2, name: "Habitación clásica", precio: "$20.000 por día",foto: "img/organization/rooms/03.png"},
    {id:3, name: "Habitación con decoraciones", precio: "$30.000 por día",foto: "img/organization/rooms/04.png"}
  ];
               
               
  return{
    all:function(){
      return rooms;
    },
    get:function(roomId){
      return rooms[roomId];
    }
  }
})

.factory('MenuItems', function(){
  var menuItems = [
    {id:0, name: "Torta tres leches", precio: "$3.500 la porción", descripcion: "Exquisita torta de tres leches con adornos de crema de dulce de leche.", foto: "img/organization/menu/00.png"},
    {id:1, name: "Torta mil hojas manjar", precio: "$2.000 la porción", descripcion: "Nuestra famosa torta de mil hojas manjar, con el mejor manjar casero de Bombón oriental.", foto: "img/organization/menu/01.png"},
    {id:2, name: "Pie de limon", precio: "$3.000 la porción", descripcion: "Pie de limón con limones sacados directamente desde el patio.", foto: "img/organization/menu/02.png"},
    {id:3, name: "Torta panqueque manjar", precio: "$1.500 la porción", descripcion: "Fresca torta panqueque manjar con el mejor manjar casero de Bombón oriental", foto: "img/organization/menu/03.png"}
  ];
               
               
  return{
    all:function(){
      return menuItems;
    },
    get:function(menuId){
      return menuitems[menuId];
    }
  }
})

.factory('Types', function(){
  var types = [{id: 0, name: "Suite presidencial" ,foto: ["img/organization/rooms/11.png", "img/organization/rooms/10.png"], descripcion: "Con el Porto a sus pies, esta suite con 240m2, equipada con tecnologías de punta, jacuzzi panorámico, habitación de vestir y piano, conjuga la suntuosidad y el lujo haciendo de su estadía un momento inolvidable."},
               {id: 1, name: "Habitación primera clase" ,foto: ["img/organization/rooms/20.png", "img/organization/rooms/21.png"], descripcion: "Amplitud y tranquilidad en unas acogedoras habitaciones, modernas y de diseño con vista al jardín interior."},
               {id: 2, name: "Habitación clásica" ,foto: ["img/organization/rooms/30.png", "img/organization/rooms/31.png"], descripcion: "Habitaciones luminosas con terraza amueblada (sillas y mesa) y con vistas a la ciudad.  Perfectas para trabajar y relajarse, la Habitación clásica está equipada con todo lo que necesitas para que tu estancia en Castillo Rojo sea placentera y productiva."},
               {id: 3, name: "Habitación con decoraciones" ,foto: ["img/organization/rooms/40.png", "img/organization/rooms/41.png"], descripcion: "Habitaciones con entretenidos y novedosos temas para que disfrutes junto con tu familia  o acompañante."}];
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