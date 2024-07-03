var express = require('express');

var router = express.Router();
const Cart = require('../models/carts');
const mongoose = require('mongoose')

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

router.delete('/:trip', (req, res)=>{
    let trip=new mongoose.Types.ObjectId(req.params.trip);
    const deletetrip = { trip };
    Cart.deleteOne(deletetrip)
    .then( carts => {  
                console.log(carts.deletedCount);
                res.json({ result:true , deletedCount:carts.deletedCount });
    });
});

module.exports = router;