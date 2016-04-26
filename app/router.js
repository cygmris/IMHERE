define([
  'jquery',
  'underscore',
  'backbone',
  'views/header/HeaderView',
  'views/home/HomeView',
  'views/info/TeachersView'
], function($, _, Backbone, HeaderView, HomeView, TeachersView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "homepage",
      "teacher/:id": "getTeacher",
      "teachers/*": "teachersInfo",
      // "*actions": "defaultRoute", // matches http://example.com/#anything - here
      ":route/:action": "loadView"
    }
  });

  var initialize = function() {
    var appRouter = new AppRouter;

    //render common layout
    var headerView = new HeaderView();
    headerView.render();

    appRouter.on('route:homepage', function(id) {
      var homeView = new HomeView();
      // var searchView = new SearchView();
      homeView.render();
    });

    appRouter.on('route:getTeacher', function(id) {

      // Call render on the module we loaded in via the dependency array
      // var projectsView = new ProjectsView();
      // projectsView.render();

      console.log(id);

    });
    appRouter.on('route:teachersInfo', function() {
      var teachersView = new TeachersView();
      // Call render on the module we loaded in via the dependency array
      // var projectsView = new ProjectsView();
      // projectsView.render();
      console.log('listing');

    });

    Backbone.history.start();

  };

  return {
    initialize: initialize
  };

});
