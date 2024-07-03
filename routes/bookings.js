var express = require('express');

var router = express.Router();
const Booking = require('../models/bookings');

router.post('/', (req, res)=>{
    const newBooking = new Booking({
        name : req.body.name,
        time : req.body.time,
        trip : req.body.trip
    })
        newBooking.save().then(res.json({
        result :true, 
    }))
})

router.get('/', (req, res)=>{
    Booking.find()
    .populate('trip')
    .then(trips=>{
        res.json({trips})
    })
})


module.exports = router;