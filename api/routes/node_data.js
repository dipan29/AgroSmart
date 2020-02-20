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
    const { solarIntensity } = req.body || 0;
    
    let chunk = {
        temp: temperature=='nan'?0:temperature,
        humidity: humidity=='nan'?0:humidity,
        moisture: moisture,
        solarIntensity: solarIntensity,
        waterLevel: waterLevel,
        timeStamp: new Date()
    }
    let sensorData = [chunk];


    let node = await Node_data.findOne({deviceID: deviceID});
    if(node){
        // Update the sensor bundle is the device exists
        try {
            node.sensorData.push(chunk);
            await node.save();
            res.json(chunk);
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error Push Failed');
        }
    }
    else{
        try {
            node_data = new Node_data({
                propertyID,
                deviceID,
                deviceType,
                sensorData,
            });
            await node_data.save();
            res.json(node_data);
        }
        catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    }   
});


module.exports = router;
