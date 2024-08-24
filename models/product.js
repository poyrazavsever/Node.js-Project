const products = [
    {id:'12123',name:'Samsung S6', price:2000, imageUrl:'2.jpg', description: 'İyi telefon'},
    {id:'12124',name:'Samsung S4', price:3000, imageUrl:'1.jpg', description: 'Kötü telefon'},
    {id:'12125',name:'Aplle S6', price:1000, imageUrl:'4.jpg', description: 'Çok iyi telefon'},
];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.id = Math.floor(Math.random()*99999)+1;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description

    }

    saveProduct() {
        products.push(this)
    }

    static getAll() {
        return products
    }

    static getById(id) {
        const product = products.find(i =>i.id === id)
        return product
    }

}
