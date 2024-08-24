const Product = require('../models/product')
const Category = require("../models/category")
exports.getIndex = (req, res, next) => {

    const products = Product.getAll();
    const categories = Category.getAll();

    res.render('shop/index', 
        {
        title: 'Alışveriş', 
        products: products,
        categories: categories,
        path: '/'
    })
}

exports.getProducts = (req, res, next) => {

    const products = Product.getAll();
    const categories = Category.getAll();

    res.render('shop/products', 
        {
        title: 'Ürünler', 
        products: products,
        categories: categories,
        path: '/products'
    })
}

exports.getProduct = (req, res, next) => {

    const product = Product.getById(req.params.productId)

    res.render('shop/product-detail', {
        title:`${product.name} Detail`, 
        product:product, 
        path:'/products'
    });
    
    
}

exports.getProductDetails = (req, res, next) => {

    res.render('shop/details', 
        {
        title: 'Detay', 
        path: '/details'
    })
}


exports.getCart = (req, res, next) => {

    res.render('shop/cart', 
        {
        title: 'Cart', 
        path: '/cart'
    })
}

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', 
        {
        title: 'Orders', 
        path: '/orders'
    })
}

