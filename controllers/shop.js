const Product = require('../models/product')

exports.getIndex = (req, res, next) => {

    const products = Product.getAll();

    res.render('shop/index', 
        {
        title: 'Alışveriş', 
        products: products,
        path: '/'
    })
}

exports.getProducts = (req, res, next) => {

    const products = Product.getAll();

    res.render('shop/products', 
        {
        title: 'Ürünler', 
        products: products,
        path: '/products'
    })
}

exports.getProduct = (req, res, next) => {

    const productId = req.params.productId
    console.log(Product.getById(productId))
    
    
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

