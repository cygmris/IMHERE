define([
  'underscore',
  'backbone',
  'server'
], function(_, Backbone, server) {


  var teacherModel = Backbone.Model.extend({


    url: function() {
      return server.teachers
    }

  });


  return teacherModel;
});
