var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var teachers = [{
    id: 1,
    name: "郝方",
    // courses: {"CS"}
  }, {
    id: 2,
    name: "李雷",
    // courses: {"Fiddle","English"}
  }, {
    id: 3,
    name: "韩梅梅",
    // courses: {"Piano","English"}
  }, {
    id: 4,
    name: "吴挂科",
    // courses: ["Java","C++"]
  }

]

//Get a teacher by it's ID
function findTeacher(id) {
  for (var i = 0; i < teachers.length; i++) {
    if (teachers[i].id === id) {
      return {
        "teacher": teachers[i],
        "index": i
      };
    }
  }
  return null;
}


//Remove a teacher by it's ID
function removeTeacher(id) {
  for (var i = 0; i < teachers.length; i++) {
    if (teachers[i].id == id) {
      teachers.splice(i, 1);
      break;
    }
  }
}

//Parse the request body
app.use(bodyParser());

//Routes

app.use('/', express.static(__dirname));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/imhere_backend_demo_server.html');
});

app.get('/teachers', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Origin', 'OPTIONS,GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Origin', 'Content-Type');
  console.log("Getting all teachers");
  res.jsonp(teachers);
});

//Get request to fetch teacher data with the ID
app.get("/teachers/:id", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("Getting a teacher with the id" + req.params.id);
  var teacher = findTeacher(parseInt(req.params.id, 10));
  if (teacher === null) {
    res.sendStatus(404);
  } else {
    res.jsonp(teacher.teacher);
  }
});

app.post('/teachers/', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var teacher = req.body;
  lastId = teachers[teachers.length - 1].id;
  teacher.id = lastId + 1;
  teachers.push(teacher);
  console.log('Saving teacher with the following structure' + JSON.stringify(teacher));
  res.send(teacher);
})

//PUT request to update the details for a teacher by specifying it's ID. Returns 404 if the teacher to be updated does not exit.
app.put("/teachers/:id", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var teacher = req.body;
  console.log("Updating Teacher " + JSON.stringify(teacher));
  var currentTeacher = findTeacher(parseInt(req.params.id, 10));
  if (currentTeacher = null) {
    console.log('Could not find teacher' + currentTeacher);
    res.sendStatus(404);
  } else {
    teachers[currentTeacher.index] = teacher;
    res.send(teacher);
  }
});

//Delete a teacher specifying it's ID.
app.delete("/teachers/:id", function(req, res) {
  console.log("Calling delete");
  res.header("Access-Control-Allow-Origin", "*");
  var teacher = findTeacher(parseInt(req.params.id, 10));
  if (teacher === null) {
    console.log("Cloud not find teacher" + currentTeacher);
    res.sendStatus(404);
  } else {
    console.log("Deleting" + req.params.id);
    removeTeacher(parseInt(req.params.id, 10));
    res.send(teacher);
  }

});

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost');
  res.header('Access-Control-Allow-Origin', 'OPTIONS,GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Origin', 'Content-Type');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
}

// app.use(allowCrossDomain);

app.listen(3000, function() {
  console.log('Amss backend demo server listening on port 3000');
});
