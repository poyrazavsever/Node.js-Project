const Product = require('../models/product')
const Category = require('../models/category')

exports.getProducts = (req, res, next) => {

    const products = Product.getAll();

    Product.getAll()
        .then(products => {
            res.render('admin/products', 
                {
                title: 'Admin Ürünler', 
                products: products[0],
                path: '/admin/products',
                action: req.query.action
            })
        })
        .catch(err => {
            console.log(err)
        })
}


exports.getAddProducts =  (req, res, next) => { 
    const categories = Category.getAll();
    res.render('admin/add-product', {title: 'Add Product', path:'/admin/add-product', categories:categories})
} 


exports.postAddProduct = (req, res, next) => {
    const product = new Product();

    product.name = req.body.name
    product.price = req.body.price
    product.imageUrl = req.body.imageUrl
    product.description = req.body.description
    product.categoryId = req.body.categoryId
    
    product.saveProduct();

    res.redirect('/')
} 


exports.getEditProduct =  (req, res, next) => { 

    const categories = Category.getAll();
    Product.getById(req.params.productId)
    .then((product) => {
        res.render('admin/edit-product', {
            title: `Edit ${product[0][0].name}`, 
            path:'/admin/products',
            product: product[0][0],
            categories:categories
        });
    }).catch(err => {
        console.log(err)
    });

} 


exports.postEditProduct = (req, res, next) => {
    const product = Product.getById(req.body.id);

    product.name = req.body.name
    product.price = req.body.price
    product.imageUrl = req.body.imageUrl
    product.description = req.body.description
    product.categoryId = req.body.categoryId

    Product.Update(product);

    res.redirect('/admin/products?action=edit')
} 

exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.productId)
    res.redirect('/admin/products?action=delete')
}