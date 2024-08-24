const products = [
    {name:'Samsung S6', price:2000, imageUrl:'2.jpg', description: 'İyi telefon'},
    {name:'Samsung S4', price:3000, imageUrl:'1.jpg', description: 'Kötü telefon'},
    {name:'Aplle S6', price:1000, imageUrl:'4.jpg', description: 'Çok iyi telefon'},
];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
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

}
