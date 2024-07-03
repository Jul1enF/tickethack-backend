const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    name: String,
    time: String,
    trip: {type: mongoose.Schema.Types.ObjectId, ref: 'trips'},
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;