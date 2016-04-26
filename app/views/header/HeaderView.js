define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar/NavbarView',
  'text!templates/header/header.html'
], function($, _, Backbone, NavbarView, headerTemplate) {

  var HeaderView = Backbone.View.extend({
    el: $('#bb-header'),
    render: function() {
      // Load the compiled HTML into the Backbone "el"
      this.$el.html(headerTemplate);

      var navbarView = new NavbarView();
      navbarView.render();
      $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    }
  });

  return HeaderView;

});
