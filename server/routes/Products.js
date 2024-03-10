const express = require('express');
const router = express.Router();
const { Products } = require("../models");

router.get('/', async (req, res) => {
    const products = await Products.findAll();
    res.json(products);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Products.create(post);
    res.json(post);
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Products.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await product.update(req.body);
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;