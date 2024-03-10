const express = require('express');
const router = express.Router();
const { Cart } = require("../models");

router.get('/', async (req, res) => {
    const carts = await Cart.findAll();
    res.json(carts);
});

router.post("/", async (req, res) => {
    const post = req.body;
    try {
        const createdCart = await Cart.create(post);
        res.json(createdCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByPk(id);
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        await cart.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByPk(id);
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        const updatedCart = await cart.update(req.body);
        res.json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;