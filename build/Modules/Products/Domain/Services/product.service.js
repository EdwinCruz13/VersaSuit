"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreator = void 0;
// domain/services/ProductCreator.ts
const product_entity_1 = require("../Entities/product.entity");
const ProductName_1 = require("../ValueObject/ProductName");
const ProductPrice_1 = require("../ValueObject/ProductPrice");
const StockQuantity_1 = require("../ValueObject/StockQuantity");
/**
 * reglas del negocio para crear el producto
 */
class ProductCreator {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(id, name, price, stock) {
        //antes de craer nuevo producto, los datos deben de pasar por value object 
        const product = await new product_entity_1.Product(id, new ProductName_1.ProductName(name), new ProductPrice_1.ProductPrice(price), new StockQuantity_1.StockQuantity(stock));
        //si todo esta bien, entonces retornar producto para creear
        return product;
    }
}
exports.ProductCreator = ProductCreator;
