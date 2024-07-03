var express = require('express');

var router = express.Router();
const Cart = require('../models/carts');

router.post('/', (req, res)=>{
    const newCart = new Cart({
        name : req.body.name,
        time : req.body.time,
        trip : req.body.trip
    })
    newCart.save().then(res.json({
        result :true,
    }))
})

router.get('/', (req, res)=>{
    Cart.find()
    .populate('trip')
    .then(trips => {
        
        res.json({
            trips,
            });
    })
})
module.exports = router;