const express = require('express');
const router = express.Router();

const products = [
    {name: "Samsung S8", price:3000, image:"1.jpg", description:'Güzel bir telefon'},
    {name: "Samsung S4", price:2000, image:"2.jpg", description:'idare telefon'},
    {name: "Samsung S5", price:1000, image:"3.jpg", description:'fena değil telefon'},
    {name: "Apple Iphone8", price:5000, image:"4.jpg", description:'Çok Güzel bir telefon'}
]

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title: 'Add a New Product', path:'/admin/add-product'})
});

router.post('/add-product', (req, res, next) => {

    console.log(req.body);
    products.push({name: req.body.name, price:req.body.price, image: req.body.image, description: req.body.description});
    
    res.redirect("/")

})


exports.routes = router 
exports.products = products