const Sequelize = require('sequelize');
const { db } = require('../config');

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
  seller_comments: Sequelize.TEXT,
  kelley_img: Sequelize.STRING
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

const Vehicle_Features = db.define('vehicle_features', {}, {
  timestamps: false
})


//Associations 

Vehicle_Features.belongsTo(Vehicles)
Vehicles.hasMany(Vehicle_Features)
Vehicle_Features.belongsTo(Features)
Features.hasMany(Vehicle_Features)


db.sync();

module.exports = {
    Vehicles,
    Features,
    Vehicle_Features
}