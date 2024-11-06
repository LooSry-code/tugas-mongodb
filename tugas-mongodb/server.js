const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());

// connect to mongodb
//mongoose.connect('mongodb: //localhost:27017/category-product-db', {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//});

// connect to mongodb
mongoose.connect('mongodb+srv://LooSry:VJX99SIIsuviFwXl@cluster-wpu-course.bdnqo.mongodb.net/?retryWrites=true&w=majority&appName=cluster-wpu-course')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log('Error connecting to MongoDB Atlas:', error));

// routes
app.use('/api/categories', categoryRoutes );
app.use('/api/products', productRoutes );

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});