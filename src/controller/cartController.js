const cartService = require('../services/cartService');

exports.createCart = async (req, res) => {
    try {
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create cart', details: err.message });
    }
};

exports.getAllCarts = async (req, res) => {
    try {
        const carts = await cartService.getAllCarts();
        res.json(carts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch carts', details: err.message });
    }
};

exports.getCartById = async (req, res) => {
    try {
        const cart = await cartService.getCartById(req.params.id);
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch cart', details: err.message });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const cart = await cartService.updateCart(req.params.id, req.body);
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update cart', details: err.message });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const cart = await cartService.deleteCart(req.params.id);
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        res.json({ message: 'Cart deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete cart', details: err.message });
    }
};
