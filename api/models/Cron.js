const mongoose = require('mongoose');

const Node_data = mongoose.model('Node_data').schema;
const Controller = mongoose.model('Controller').schema;

const cronSchema = new mongoose.Schema({
    createTime: { type: Date, default: Date.now },
    cronType: String,
    executed: { type: String, default: "N"},
    runTime: { type: Date, default: null},
    command: String,
    description: { type: String, default: null},
    propertyID: String,
    controller: [Controller],
    nodes: [Node_data]
}, {
    collection: 'cron_jobs',
});

module.exports = mongoose.model('Cron', cronSchema);