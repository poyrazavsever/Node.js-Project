const express = require('express');
const app = express();


app.use('/',(req, res, next) => {
    console.log('loglama yapıldı...')
    next()
})

app.use('/add-product', (req, res, next) => {
    res.send('<h1>Ürün Ekle</h1>')
});

app.use('/product-list', (req, res, next) => {
    res.send('<h1>Ürün Listesi</h1>')
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})
