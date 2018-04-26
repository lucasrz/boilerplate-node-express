var express = require('express'),
  router = express.Router()

var exampleControler = require('./controller-example')

router.post('/api/', exampleControler.post)

module.exports = router