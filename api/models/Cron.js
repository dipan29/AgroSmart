const mongoose = require('mongoose');

const Node_data = require("Node_data");
const Controller = require("Controller");

const cronSchema = new mongoose.Schema({
    createTime: { type: Date, default: Date.now },
    cronType: String,
    executed: { type: String, default: "N"},
    runTime: { type: Date, default: null},
    command: String,
    description: { type: String, default: null},
    propertyID: String,
    controller: [Controller.Schema],
    nodes: [Node_data.Schema]
}, {
    collection: 'cron_jobs',
});

module.exports = mongoose.model('Cron', cronSchema);