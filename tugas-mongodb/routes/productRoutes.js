const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { findById } = require('../models/Category');

// buat sebuah produk baru
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// mendapatkan semua produk
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

// mendapatkan produk dengan id
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) {
            return res.status(404).send('Produk tidak ditemukan');
        } res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

// memperbarui produk dengan id
router.patch('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id, req.body,
            {
                new: true,
                runValidators: true,
            });
            if (!product) {
                return res.status(404).send('Produk tidak ditemukan');
            } res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// menghapus produk dengan id
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Produk tidak ditemukan');
        } res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;