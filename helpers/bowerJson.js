(function() {
  'use strict';

  var exports = module.exports;
  exports.getStandardBowerJson = getStandardBowerJson;

  function getStandardBowerJson() {
    return JSON.stringify({
      "name": "angular-seed",
      "description": "A starter project for AngularJS",
      "version": "0.0.0",
      "homepage": "https://github.com/angular/angular-seed",
      "license": "MIT",
      "private": true,
      "dependencies": {
        "angular": "~1.5.0",
        "angular-route": "~1.5.0",
        "angular-loader": "~1.5.0",
        "angular-mocks": "~1.5.0",
        "html5-boilerplate": "^5.3.0"
      }
    }, null, 2);
  }
})();