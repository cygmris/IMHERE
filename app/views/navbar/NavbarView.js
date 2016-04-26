define([
  'jquery',
  'underscore',
  'backbone',
  // 'views/sidebar/SeachbarView',
  'text!templates/navbar/navbar.html'
], function($, _, Backbone, navbarTemplate) {

  var NavbarView = Backbone.View.extend({
    el: $('#bb-header'),

    render: function() {
      var Info = {
        'TeacherID': 'TeacherID',
        'StudentID': 'StudentID'
      };
      var navItems = {
        Home: 'Home',
        About: 'About',
        Attendance: 'Attendance',
        Info
      };

      // Compile the template using underscore
      var Template = _.template(navbarTemplate);
      var compiledTemplate = Template(navItems);

      // Load the compiled HTML into the Backbone "el"
      this.$el.append(compiledTemplate);
      $('input#search').focus(function() {
        $(this).parent().addClass('focused');
      });
      $('input#search').blur(function() {
        if (!$(this).val()) {
          $(this).parent().removeClass('focused');
        }
      });
      $(".button-collapse").sideNav();

    },

  });
  return NavbarView;
});
