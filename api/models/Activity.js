const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    dateTime: { type: Date, default: Date.now },
    actType: String,
    actUser: { type: String, default: null},
    description: String,
    additional: { type: String, default: "general"}
}, {
    collection: 'activities',
});

module.exports = mongoose.model('Activity', activitySchema);