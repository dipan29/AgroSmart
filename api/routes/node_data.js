const express = require('express');
const router = express.Router();

const Node_Data = require('../models/Node_data');

router.post('/send', async (req, res) => {
    const { deviceID } = req.body;
    const { deviceType } = req.body;
    const { propertyID } = req.body;
    const { temperature } = req.body;
    const { humidity } = req.body;
    const { water_level } = req.body;
    const { moisture } = req.body;

    try {
        node_data = new Node_Data({
            propertyID,
            deviceID,
            deviceType,
            humidity,
            water_level,
            temperature,
            moisture,
            dateTime: new Date()
        });

        await node_data.save();

        res.json(node_data);

    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }

});
