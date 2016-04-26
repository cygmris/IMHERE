define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/home.html'
], function($, _, Backbone, homeTemplate) {
  var HomeView = Backbone.View.extend({
    el: $('#bb-page'),

    render: function() {
      // Compile the template using underscore

      // Load the compiled HTML into the Backbone "el"
      this.$el.html(homeTemplate);
      $('.tabs').tabs();
    },

  });
  return HomeView;
});
