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
            model.categories = categories;
            const category = categories.find(i => i.id == categoryId);
            return category.getProducts();
        })
        .then(products => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                categories: model.categories,
                selectedCategory: categoryId,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        })



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

    req.user
        .getCart()
        .then(cart => {
            
            return cart.getProducts()
                .then(products => {
                    res.render('shop/cart', {
                        title: 'Cart',
                        path: '/cart',
                        products: products
                    })
                })
                .catch(err => console.log(err))

        }).catch(err => console.log(err))

    
}

exports.postCart = (req, res, next) => {

    const productId = req.body.productId;
    let quantity = 1;
    let userCart;

    req.user
        .getCart()
        .then(cart => {
            userCart = cart;
            return cart.getProducts({where: {id: productId}})
        }).then(products => {
            let product;

            if(products.lenght > 0) {
                product = products[0]
            }

            if(product) {
                quantity += product.cartItem.quantity;
                return product;
            }

            return Product.findByPk(productId);

        }).then(product => {
            userCart.addProduct(product, {
                through: {
                    quantity: quantity
                }
            })
        }).then(() => {
            res.redirect('/cart')
        }).catch(err => console.log(err))

    
}

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    })
}