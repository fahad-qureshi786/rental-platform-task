const RealEstateCart = require('../models/RealEstateCart');

exports.createCart = async (data) => {
    return await RealEstateCart.create(data);
};

exports.getAllCarts = async () => {
    return await RealEstateCart.find();
};

exports.getCartById = async (id) => {
    return await RealEstateCart.findById(id);
};

exports.updateCart = async (id, data) => {
    return await RealEstateCart.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteCart = async (id) => {
    return await RealEstateCart.findByIdAndDelete(id);
};
