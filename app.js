const mongoose = require('mongoose');
const Product = require('./productModel');  

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Connection error', err));

const newProduct = new Product({
    title: 'Laptop',
    price: 899.99,
    category: 'Electronics',
    inStock: true
});

newProduct.save()
    .then(product => console.log('Product saved:', product))
    .catch(err => console.error('Error saving product:', err));
