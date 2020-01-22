  
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    propertyID: {type: Number, default: 0},
    deviceID: String,
    deviceType: {type: String, default: "POD"},
    humidity: String,
    water_level: Number,
    temperature: String,
    moisture: String,
    dateTime: { type: String, default: Date.now }
},{
  collection: 'node_data',
});

module.exports = mongoose.model('node_data', dataSchema);