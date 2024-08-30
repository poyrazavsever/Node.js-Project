const express = require('express');
const router = express.Router()

const shopsController = require('../controllers/shop')

router.get('/', shopsController.getIndex);

router.get('/products', shopsController.getProducts);

router.get('/products/:productId', shopsController.getProduct);

router.get('/categories/:categoryId', shopsController.getProductByCategoryId);

router.get('/cart', shopsController.getCart);

router.post('/cart', shopsController.postCart);

router.post('/delete-cartItem', shopsController.postCartItemDelete);

router.get('/orders', shopsController.getOrders);


module.exports = router  