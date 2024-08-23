const express = require('express');
const router = express.Router()
const path = require('path');

router.get('/',(req, res, next) => {

    const products = [
        {name: "Samsung S8", price:3000, image:"1.jpg", description:'Güzel bir telefon'},
        {name: "Samsung S4", price:2000, image:"1.jpg", description:'idare telefon'},
        {name: "Samsung S5", price:1000, image:"1.jpg", description:'fena değil telefon'},
        {name: "Apple Iphone8", price:5000, image:"1.jpg", description:'Çok Güzel bir telefon'}
    ]

    res.render('index', {title: 'Ana Sayfa', products: products})
})

module.exports = router