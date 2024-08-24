const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

router.get('/add-product', adminController.getAddProducts); 

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product', adminController.getEditProduct); 

router.post('/edit-product', adminController.postEditProduct);

router.get('/product', adminController.getProducts); 



module.exports = router 