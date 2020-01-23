const express = require('express');
const router = express.Router();

const Controller = require('../models/Controller');
const Node_data = require('../models/Node_data');

router.post('/fetchAll', async (req, res) => {
    const { propertyID } = req.body;
    const { controllerID } = req.body;
    let { startDateTime } = req.body;
    let { endDateTime } = req.body;

    if(!startDateTime) {
        startDateTime = ("2020-01-01T00:00:00.000Z");
    }
    if(!endDateTime) {
        endDateTime = new Date();
    }
    try {
        if(!controllerID) {
            controller = await Controller.findOne({ propertyID });
        } else {
            controller = await Controller.findOne({ propertyID, controllerID });
        }
        if(controller) {
            var controllerDetails = (controller);
        } else {
            console.error(err);
            res.status(404).json('Property ID did not return any available controller');
        }
        var nodeDetails = [];
        Node_data.find( { propertyID, dateTime: { $gte: startDateTime, $lt: endDateTime } } , function(err, nodes, next) {
            if(err){
                res.status(500).json('There was some error fetching data!');
                next();
            }
            nodeDetails.push(nodes);
            //console.log(endDateTime);
            var message = "Here is the result for Controller : " + controller.controllerID;
            res.status(200).json({ message, controllerDetails, nodeDetails});    
        });
    } catch ( err ) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

// Get Details Against Node ID
// Get Details Against Property & Parameter - }).select('temperature moisture');

module.exports = router;