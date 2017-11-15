(function() {
  var express = require('express');
  var cors = require('cors');
  var app = express();

  app.use(cors());

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/surMano', function (req, res) {
    var zip = require('node-zip')(); // require the node-zip utility
    var fs = require('fs'); // I use fs to read the directories for their contents

    // var someDir = fs.readdirSync(__dirname+"/nameOfDirectoryToZip"); // read the directory that you would like to zip
    // var newZipFolder = zip.folder('nameOfDirectoryToZip'); // declare a folder with the same name as the directory you would like to zip (we'll later put the read contents into this folder)

    var data = zip.generate({base64:false,compression:'DEFLATE'}); //generate the zip file data

    console.log(res);
    console.log(res.headersSent);
    res.type('zip');
    res.attachment('hola.zip');
    return res.status(200).send(data);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
})();