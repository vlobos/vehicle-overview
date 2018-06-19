const Sequelize = require('sequelize');
const { db } = require('../config');

const { vehicles } = require('../data/vehicles')

const { vehiclefeatures } = require('../data/vehiclefeatures')

const { features } = require('../data/features')

//define tables here:
const Vehicles = db.define('vehicles', {
  vehicle_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  ext_color: Sequelize.STRING,
  ext_color_swatch: Sequelize.STRING,
  int_color: Sequelize.STRING,
  int_color_swatch: Sequelize.STRING,
  mileage: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  body_style: Sequelize.STRING,
  model_name: Sequelize.STRING,
  drive_type: Sequelize.STRING,
  engine: Sequelize.STRING,
  transmission: Sequelize.STRING,
  fuel: Sequelize.STRING,
  mpg: Sequelize.STRING,
  stock_num: Sequelize.STRING,
  vin: Sequelize.STRING,
  atc_car_id: Sequelize.STRING,
  basic_warranty: Sequelize.STRING,
  drivetrain: Sequelize.STRING,
  corrosion: Sequelize.STRING,
  roadside_assistance: Sequelize.STRING,
  seller_comments: Sequelize.TEXT
},
{
  timestamps: false
});

const Features = db.define('features', {
  feature_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  feature: Sequelize.STRING
},
{
  timestamps: false
});

/*---second attempt---*/
const Vehicle_Features = db.define('vehicle_features', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  featureFeatureId: Sequelize.INTEGER,
  vehicleVehicleId: Sequelize.INTEGER
},
{
  timestamps: false
});
/*--- FIRST ATTEMPT---*/
// const Vehicle_Features = db.define('vehicle_feature', {
// }, {
//   timestamps: false
// })


//Associations 

/*--- FIRST ATTEMPT---*/
// Vehicles.hasMany(Vehicle_Features)
// Vehicle_Features.belongsTo(Vehicles)
// Features.hasMany(Vehicle_Features)
// Vehicle_Features.belongsTo(Features)

db.sync({force: true})
  .then(() => {
    console.log('successfully synced database')
    Vehicles.bulkCreate(vehicles)
    .then(()=> {
      console.log('successfully synced vehicles')
      Features.bulkCreate(features)
      .then(()=> {
        console.log('successfully synced vehiclefeatures')
        Vehicle_Features.bulkCreate(vehiclefeatures)
        .catch(err=> console.log('vehiclefeatures err: ', err))
      })
      .catch(err=> console.log('features err: ', err))
    })
    .catch(err=> console.log('vehicle err: ', err))
  // Vehicles.sync({ force: true })
  // .then(()=> {
  //   Vehicles.bulkCreate(vehicles)
  //   console.log("synched vehicles")
  // })
  // .catch( err => console.log("error syncing vehicles table", err));

  // Features.sync({ force: true })
  // .then(()=> {
  //   Features.bulkCreate(features)
  //   console.log("synched vehicles")
  // })
  // .catch( err => console.log("error syncing vehicles table", err));
  
  // Vehicle_Features.sync({ force: true })
  // .then(()=> {
  //   Vehicle_Features.bulkCreate(vehiclefeatures)
  //   console.log("synched vehicles")
  // })
  // .catch( err => console.log("error syncing vehicles table", err));
  })
  .catch(err => {
    console.log('Err : ', err);
  })

// Vehicles.sync({ force: true })
//   .then(()=> {
//     Vehicles.bulkCreate(vehicles)
//     console.log("synched vehicles")
//   })
//   .catch( err => console.log("error syncing vehicles table", err));

//   Features.sync({ force: true })
//   .then(()=> {
//     Features.bulkCreate(features)
//     console.log("synched vehicles")
//   })
//   .catch( err => console.log("error syncing vehicles table", err));
  
//   Vehicle_Features.sync({ force: true })
//   .then(()=> {
//     Vehicle_Features.bulkCreate(vehiclefeatures)
//     console.log("synched vehicles")
//   })
//   .catch( err => console.log("error syncing vehicles table", err));
  

module.exports = {
    Vehicles,
    Features,
    Vehicle_Features
}