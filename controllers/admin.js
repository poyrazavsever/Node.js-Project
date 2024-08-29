const Product = require('../models/product')
const Category = require('../models/category')

exports.getProducts = (req, res, next) => {

    Product.findAll({
        attributes: ['id', 'name', 'price', 'imageUrl']
    })
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Ürünler',
                products: products,
                path: '/admin/products',
                action: req.query.action
            })
        })
        .catch(err => {
            console.log(err)
        })
}


exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product', {
        title: 'Add Product',
        path: '/admin/add-product',
    });

}


exports.postAddProduct = (req, res, next) => {

    const name = req.body.name
    const price = req.body.price
    const imageUrl = req.body.imageUrl
    const description = req.body.description
    // const categoryId = req.body.categoryId

    // Product.create({
    //     name: name,
    //     price: price,
    //     imageUrl: imageUrl,
    //     description: description
    // }).then(result => {
    //     console.log(result)
    //     res.redirect('/')
    // }).catch(err => {
    //     console.log(err)
    // })

    const prd = Product.build({
        name: name,
        price: price,
        imageUrl: imageUrl,
        description: description
    })

    prd.save()
        .then(result => {
            console.log(result)
            res.redirect('/')
        }).catch(err => {
            console.log(err)
        })

}


exports.getEditProduct = (req, res, next) => {

    Product.findByPk(req.params.productId)
        .then((product) => {
            Category.findAll()
                .then(categories => {
                    res.render('admin/edit-product', {
                        title: `Edit ${product.name}`,
                        path: '/admin/products',
                        product: product,
                        categories: categories
                    });
                })
                .catch(err => console.log(err))

        }).catch(err => {
            console.log(err)
        });

}


exports.postEditProduct = (req, res, next) => {

    const product = Product.findByPk(req.body.id);

    product.id = req.body.id
    product.name = req.body.name
    product.price = req.body.price
    product.imageUrl = req.body.imageUrl
    product.description = req.body.description
    product.categoryId = req.body.categoryId

    Product.Update(product).then(() => {
        res.redirect('/admin/products?action=edit')
    }).catch(err => {
        console.log(err)
    });

}

exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.productId).then(() => {
        res.redirect('/admin/products?action=delete')
    }).catch((err) => console.log(err));

}