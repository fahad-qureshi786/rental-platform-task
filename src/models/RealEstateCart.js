const mongoose = require('mongoose');

const RealEstateCartSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RealEstateCart', RealEstateCartSchema);
