define([

], function() {
  var server = 'http://localhost:3000/';

  var api = {
    teachers: server + "teachers",
    students: server + "students"
  };

  return api;
});
