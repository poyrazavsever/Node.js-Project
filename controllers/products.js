
const products = [
    {name: "Samsung S8", price:3000, image:"1.jpg", description:'Güzel bir telefon'},
    {name: "Samsung S4", price:2000, image:"2.jpg", description:'idare telefon'},
    {name: "Samsung S5", price:1000, image:"3.jpg", description:'fena değil telefon'},
    {name: "Apple Iphone8", price:5000, image:"4.jpg", description:'Çok Güzel bir telefon'}
]

exports.getProducts = (req, res, next) => {

    res.render('index', 
        {
        title: 'Ana Sayfa', 
        products: products,
        path: '/'
    })
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    products.push({name: req.body.name, price:req.body.price, image: req.body.image, description: req.body.description});
    res.redirect('/')
} 

exports.getAddProducts =  (req, res, next) => {
    res.render('add-product', {title: 'Add a New Product', path:'/admin/add-product'})
}