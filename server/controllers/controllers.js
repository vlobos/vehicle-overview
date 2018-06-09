const { Vehicles, Features, Vehicle_Features } = require('../../db/models');

const vehicleController = {
  GET: (req, res) => {
    console.log('in controller get');
    console.log(req.params)
    Vehicles.findAll({ where: {
      vehicle_id: req.params.vehicleID
    }, include: [
      {
        model: Vehicle_Features,
        where: { 
          vehicleVehicleId: req.params.vehicleID
        }, include: [
          {
            model: Features
          }
        ]
      }
    ]})
      .then(data => {
        console.log('VehicleController. Successful fetching of data');
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('throw err', err);
        res.status(404);
      })
  }
  // POST: {

  // }
};

module.exports = {
  vehicleController
}


//controllers require the models
//define you controllers object with Get and Post
//this is what will be called by the routes to fetch the data 
//endpoint??

//Get: get all the information related to the carID. 
//query the vehicles table for all columns
  //query the features table also
    //upon receiving data
