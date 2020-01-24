
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    propertyID: String,
    deviceID: String,
    deviceType: { type: String, default: "POD" },
    humidity: Number,
    waterLevel: Number,
    temperature: Number,
    moisture: Number,
    solarIntensity: { type: Number, defaul: null },
    dateTime: { type: Date, default: Date.now }
},{
  collection: 'node_data',
});

module.exports = mongoose.model('Node_data', dataSchema);