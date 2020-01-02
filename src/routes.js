const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const Product = mongoose.model('Product');
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);

module.exports = routes;
