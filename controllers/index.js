(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  router.use('/', require('./angular-js'));

  module.exports = router;
})();