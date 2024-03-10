const express = require('express');
const router = express.Router();
const { Pharmacy } = require("../models");

router.get('/', async (req, res) => {
    const pharmacy = await Pharmacy.findAll();
    res.json(pharmacy);
});

router.post('/', async (req, res) => {
    const post = req.body;
    await Pharmacy.create(post);
    res.json(post);
});

router.get('/:pharmacyId/products', async (req, res) => {
    const pharmacyId = req.params.pharmacyId;

    Pharmacy.findByPk(pharmacyId, { include: 'Products' })
        .then(pharmacy => {
            res.json(pharmacy.Products);
        });
});

module.exports = router;