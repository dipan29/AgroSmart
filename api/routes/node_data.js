const express = require('express');
const router = express.Router();

const Node_data = require('../models/Node_data');

router.post('/send', async (req, res) => {
    const { deviceID } = req.body;
    const { deviceType } = req.body;
    const { propertyID } = req.body;
    const { temperature } = req.body;
    const { humidity } = req.body;
    const { waterLevel } = req.body;
    const { moisture } = req.body;

    try {
        node_data = new Node_data({
            propertyID,
            deviceID,
            deviceType,
            humidity,
            waterLevel,
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

module.exports = router;
