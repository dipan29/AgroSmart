  
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    deviceID: String,
    deviceType: String,
    humidity: String,
    water_level: String,
    temperature: String,
    moisture: String,
},{
  collection: 'node_data',
});

module.exports = mongoose.model('node_data', dataSchema);