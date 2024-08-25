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
        return connection.execute('INSERT INTO products (name, price, imageUrl, description, categoryId) VALUES (?, ?, ?, ?, ?)', [this.name, this.price, this.imageUrl, this.description, this.categoryId])
    }

    static getAll() {
        return connection.execute('SELECT * FROM products');
    }

    static getById(id) {
        return connection.execute(`SELECT * FROM products WHERE products.id=?`, [id])
    }

    static getProductsByCategoryId(categoryId){
        return connection.execute('SELECT * FROM products WHERE products.categoryId=?', [categoryId])
    }

    static Update(product) {
        return connection.execute('UPDATE products SET products.name=?, products.price=?, products.imageUrl=?, products.description=?, products.categoryId=? WHERE products.id=?', [product.name, product.price, product.imageUrl, product.description, product.categoryId, product.id])
    }

    static DeleteById(id) {
        return connection.execute('DELETE FROM products WHERE products.id=?', [id])
    }

}
