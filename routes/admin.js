const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Add a new Product </title> </head>


            <body>
                <form action="/add-product" method="POST">
                    <input type="text" name="productName" />
                    <input type="submit" value="Save Product" />
                </form>
            </body>


        </html>
        `)
});

router.post('/add-product', (req, res, next) => {

    console.log(req.body);
    
    res.redirect("/")

})


module.exports = router