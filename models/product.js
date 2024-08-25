const connection = require("../utility/database")

module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryId) {
        this.id = (Math.floor(Math.random()*99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description
        this.categoryId = categoryId

    }

    saveProduct() {
    }

    static getAll() {
        return connection.execute('SELECT * FROM products');
    }

    static getById(id) {
        return connection.execute(`SELECT * FROM products WHERE products.id=?`, [id])
    }

    static getProductsByCategoryId(categoryId){
    }

    static Update(product) {
    }

    static DeleteById(id) {
    }

}
