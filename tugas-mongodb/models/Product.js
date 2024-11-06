const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //unique: true,
    },
    price: {
        type: Number,
        required: true,
        //unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        //unique: true,
    },
});

module.exports = mongoose.model('Product', productSchema);