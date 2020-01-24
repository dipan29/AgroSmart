const mongoose = require('mongoose');

const cronSchema = new mongoose.Schema({
    createTime: { type: Date, default: Date.now },
    cronType: String,
    executed: { type: String, default: "N"},
    runTime: { type: Date, default: null},
    command: String,
    description: { type: String, default: null}
}, {
    collection: 'cron_jobs',
});

module.exports = mongoose.model('Cron', cronSchema);