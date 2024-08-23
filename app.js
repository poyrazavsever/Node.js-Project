const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send(`
        <html>
            <head><title>Add a new Product </title> </head>


            <body>
                <form action="product" method="POST">
                    <input type="text" name="productName" />
                    <input type="submit" value="Save Product" />
                </form>
            </body>


        </html>
        `)
});

app.post('/product', (req, res, next) => {

    console.log(req.body);
    
    res.redirect("/")

})


app.use('/',(req, res, next) => {
    res.send('<h1>Ana Sayfa</h1>')
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
