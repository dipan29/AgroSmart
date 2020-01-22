const express = require('express');
const router = express.Router();

const Controller = require('../models/Controller');

const shortid = require('shortid');

router.get('/:id', async (req, res) => {
    try {
        let controller = await Controller.findOne({ controllerID: req.params.id });

        if (controller) {
            /* Create the Required JSON */
            var controllerID = controller.controllerID;
            var relay1 = controller.relay1;
            var relay2 = controller.relay2;
            var relay3 = controller.relay3;
            var relay4 = controller.relay4;
            var servo1 = controller.servo1;
            var lastChangedTime = controller.lastChangedTime;
            var returnJson = { controllerID, relay1, relay2, relay3, relay4, servo1, lastChangedTime };
            return res.status(200).json(returnJson);
        } else {
            return res.status(404).json('Controller ID not found!');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal Server Error.');
    }
});

router.post('/create', async (req, res) => {
    const propertyID = req.body.propertyID;
    const controllerType = req.body.controllerType;
   
    try {
        let controllerID = shortid.generate();;        
        var createTime = new Date();
        let controller = new Controller({
            propertyID,
            controllerID,
            controllerType,
            relay1: 0,
            relay2: 0,
            relay3: 0,
            relay4: 0,
            servo1: 90,
            createTime
        });

        await controller.save();
        res.json(controller);

    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
});

//Controller Update API Here

module.exports = router;