const Product = require('../models/product')
const Category = require("../models/category")
exports.getIndex = (req, res, next) => {

    Category.getAll()
        .then(categories => {
            Product.getAll()
                .then(products => {
                    res.render('shop/index', {
                        title: 'Alışveriş',
                        products: products[0],
                        categories: categories[0],
                        path: '/'
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        });




}

exports.getProducts = (req, res, next) => {

    Category.getAll().then(categories => {
        Product.getAll()
            .then(products => {
                res.render('shop/products', {
                    title: 'Alışveriş',
                    products: products[0],
                    categories: categories[0],
                    path: '/products'
                })
            })
            .catch(err => {
                console.log(err)
            })
    }).catch(err => {
        console.log(err)
    })


}

exports.getProductByCategoryId = (req, res, next) => {

    const categoryId = req.params.categoryId

    Product.getProductsByCategoryId(req.params.categoryId)
        .then(products => {
            console.log(products[0])
            Category.getAll().then(categories => {
                res.render('shop/products', {
                    title: 'Ürünler',
                    products: products[0],
                    categories: categories[0],
                    selectedCategory: categoryId,
                    path: '/products'
                })
            }).catch(err => {
                console.log(err)
            });
        }).catch(err => console.log(err));



}


exports.getProduct = (req, res, next) => {

    Product.getById(req.params.productId)
        .then((product) => {
            res.render('shop/product-detail', {
                title: product[0][0].name,
                product: product[0][0],
                path: '/products'
            });
        }).catch(err => {
            console.log(err)
        });

}



exports.getCart = (req, res, next) => {

    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    })
}

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    })
}