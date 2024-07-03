var express = require('express');

var router = express.Router();
const Trip = require('../models/trips');

const {checkBody} = require('../modules/checkBody');

// retrieve all trips corresponding to users choice. 
router.post('/', function(req, res, next) {
    console.log("###################################################### New call#############################" );
    // passed in body. req.body.
    if(checkBody( req.body,["departure","arrival","date"])) {
        //  find( { $and: [{ {k1:v2},{k2,v2}}] )
        
        // test MongoDB Compass OK : à adapter notamment ISODate
        //  db.trips.find({$and:[{departure:/^MArseille$/i},{arrival:"Lyon"},{date:{$gte:ISODate("2024-07-02T08:00"),$lt:ISODate("2024-07-02T09:30")}}]}
        
        //  plus clean ?
        //  let findtrip = new Trip(
        //     {
        //         departure: req.body.departure,
        //         arrival: req.body.arrival,
        //         date: Date(req.body.date),
        //     }
        // );
        console.log("#########Body Valid##################", req.body.date)
        


        Trip.find({$and: [
            { departure: new RegExp('^'+req.body.departure+'$', 'i') },
            { arrival: new RegExp('^'+req.body.arrival+'$', 'i') }, 
            {date:{ $gte: `${req.body.date}T00:00:00.100+00:00`, $lte:`${req.body.date}T23:59:59.100+00:00`}},
            //{ date:{$gte: user date , $lte: user date + x heures? }}
        ]})
        .then(trips => {
            console.log(trips);
            res.json({ result: true,
                trips,
                });
        });
    } 
    else {
        //console.log("###########################",req.body.departure,req.body.arrival,req.body.date);
        console.log("##########Missing or empty fields################",req.body);
        res.json({ result: false, error: 'Missing or empty fields' });
    }
  });

module.exports = router;