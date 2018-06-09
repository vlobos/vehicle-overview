const router = require('express').Router();
const { vehicleController } = require('../controllers/controllers');

router.get('/vehicles/:vehicleID', vehicleController.GET)

module.exports = {
  router
}