const Product = require('../models/product')

exports.getProducts = (req, res, next) => {

    const products = Product.getAll();

    res.render('index', 
        {
        title: 'Ana Sayfa', 
        products: products,
        path: '/'
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        req.body.name,
        req.body.price, 
        req.body.imageUrl, 
        req.body.description);
    
    product.saveProduct();

    res.redirect('/')
} 

exports.getAddProducts =  (req, res, next) => {
    res.render('add-product', {title: 'Add a New Product', path:'/admin/add-product'})
}