var express = require('express'),
  exampleController = require('../models/controller-example')

exports.post = function (req, res) {
  var result = exampleController.exampleMethod()
  res.send({
    res: result
  })
}