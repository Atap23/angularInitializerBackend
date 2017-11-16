(function() {
  var express = require('express');
  var router = express.Router();

  var packageJson = require('../helpers/packageJson');
  var bowerJson = require('../helpers/bowerJson');

  router.get('/angularJs', function(req, res) {
    var zip = require('node-zip')(); // require the node-zip utility
    var fs = require('fs'); // I use fs to read the directories for their contents
    var appFolder = zip.folder('app');

    zip.file('package.json', packageJson.getStandardPackageJson(), {base64:false, compression:'DEFLATE'});
    zip.file('bower.json', bowerJson.getStandardBowerJson(), {base64:false, compression:'DEFLATE'});
    appFolder.file('app.js', fs.readFileSync('static-models/angular-js/app.js'), {base64:false, compression:'DEFLATE'});
    appFolder.file('index.html', fs.readFileSync('static-models/angular-js/index.html'), {base64:false, compression:'DEFLATE'});

    var zipData = zip.generate({base64:false, compression:'DEFLATE'}); //generate the zip file data
    fs.writeFileSync('projects-dist/test.zip', zipData, 'binary');

    res.type('zip');
    res.attachment('hola.zip');
    return res.status(200).download('projects-dist/test.zip', 'dataCaca.zip');
  });

  module.exports = router
})();