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
  var organizations =[{id: 0, name:"organización 1", calificacion: 5, logo:"url/img",imgOrganizacion:["img/organization/images/pres00.jpg", "url2","url3","url4", "url5"], video: "url/video", mensajePresentacion: "ejemplo de mensaje de presentacion", servicioPrin:"holo", serviciosSec:["serv1", "serv2"]}];
  return {
    all:function(){
      return organizations;
    },
    get: function(organizationId){
      return organizations[organizationId];
    }
  }
});