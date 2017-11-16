(function() {
  var express = require('express');
  var cors = require('cors');
  var app = express();

  app.use(cors());
  app.use('/proyectos', require('./controllers'));

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
})();