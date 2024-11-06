const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// buat sebuah kategori baru
router.post('/', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

// mendapatkan semua kategori
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
});

// mendapatkan kategori dengan id
router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send("Kategori tidak ditemukan")
        } res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
});

// memperbarui kategori dengan id
router.patch("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id, req.body,
        {
            new: true,
            runValidators: true,
        });
        if (!category) {
            return res.status(404).send("kategori tidak ditemukan")
        } res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

// menghapus kategori dengan id
router.delete("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send("kategori tidak ditemukan")
        } res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;