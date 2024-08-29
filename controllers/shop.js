const Product = require('../models/product')
const Category = require("../models/category")
exports.getIndex = (req, res, next) => {

    Category.findAll()
        .then(categories => {
            Product.findAll(
                {
                    attributes: ['id', 'name', 'price', 'imageUrl', 'description']
                })
                .then(products => {
                    res.render('shop/index', {
                        title: 'Alışveriş',
                        products: products,
                        categories: categories,
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

    Category.findAll()
        .then(categories => {
            Product.findAll({
                attributes: ['id', 'name', 'price', 'imageUrl', 'description']
            })
                .then(products => {
                    res.render('shop/products', {
                        title: 'Alışveriş',
                        products: products,
                        categories: categories,
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
    const model = []

    // Product.findAll({where: {categoryId: categoryId}})
    //     .then(products => {
    //         Category.findAll().then(categories => {
    //             res.render('shop/products', {
    //                 title: 'Ürünler',
    //                 products: products,
    //                 categories: categories,
    //                 selectedCategory: categoryId,
    //                 path: '/products'
    //             })
    //         }).catch(err => {
    //             console.log(err)
    //         });
    //     }).catch(err => console.log(err));

    Category.findAll()
        .then(categories => {
            model.categories = categories
            const category = categories.find(i => i.id === categoryId);
            return category.getProducts()
        })
        .then(products => {
            res.render('shop/products', {
                title: 'Ürünler',
                products: products,
                categories: model.categories,
                selectedCategory: categoryId,
                path: '/products'
            })                
        }).catch(err => console.log(err))



}


exports.getProduct = (req, res, next) => {

    Product.findByPk(req.params.productId, {
        attributes: ['id', 'name', 'price', 'imageUrl', 'description']
    })
        .then((product) => {
            res.render('shop/product-detail', {
                title: product.name,
                product: product,
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