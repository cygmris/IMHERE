define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/info/teacher.html',
  'models/TeacherModel'
], function($, _, Backbone, teacherTemplate, TeacherModel) {

  var TeachersView = Backbone.View.extend({
    el: $('#bb-page'),
    initialize: function() {
      var that = this;


      var onDataHandler = function(collection) {
        console.log(555);
        that.render();
      };

      this.model = new TeacherModel();

      this.model.fetch({
        success: onDataHandler,
        dataType: "jsonp"
      });


    },
    render: function() {

      // Compile the template using underscore
      // var Template = _.template(teacherTemplate);
      // var compiledTemplate = Template(navItems);

      // Load the compiled HTML into the Backbone "el"
      var data = {
        teachers: this.model.toJSON(),
        _: _
      };
      test = this.model;
      var template = _.template( teacherTemplate );
      var compiledTemplate = template(data);

      this.$el.html(compiledTemplate);

    }

  });
  return TeachersView;
});
