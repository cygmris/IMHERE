// var com = com || {}
// var com.imhere = com.imhere || {}
// var com.imhere.model = com.imhere.collection || {}
// var com.imhere.model = com.imhere.collection.teacherInfo || {}
define([
  'underscore',
  'backbone',
  'models/TeacherModel',
  'server'
], function(_, Backbone, TeacherModel){

  var ContributorsCollection = Backbone.Collection.extend({

      model: TeacherModel,

      initialize : function(models, options) {},

      api : function() {
        return server.teachers;
      },

      parse : function(data) {
          var uniqueArray = this.removeDuplicates(data.data);
          return uniqueArray;
      },

      removeDuplicates: function(myArray) {

          //credit: http://newcodeandroll.blogspot.ca/2012/01/how-to-find-duplicates-in-array-in.html
          // I was hoping underscore's _uniq would work here but it only seems to work for single values not objects
          var length = myArray.length;
          var ArrayWithUniqueValues = [];

          var objectCounter = {};

          for (i = 0; i < length; i++) {

              var currentMemboerOfArrayKey = JSON.stringify(myArray[i]);
              var currentMemboerOfArrayValue = myArray[i];

              if (objectCounter[currentMemboerOfArrayKey] === undefined){
                  ArrayWithUniqueValues.push(currentMemboerOfArrayValue);
                 objectCounter[currentMemboerOfArrayKey] = 1;
              }else{
                 objectCounter[currentMemboerOfArrayKey]++;
              }
          }

          return ArrayWithUniqueValues;
      }

  });

  return ContributorsCollection;

});
