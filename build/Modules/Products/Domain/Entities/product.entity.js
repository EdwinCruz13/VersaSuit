"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
/**
 * entidad producto que define objeto abstrato de
 * la relga de negocio
 *
 */
class Product {
    /**
     * define que propiedades tiene el objeto
     * @param id
     * @param name
     * @param price
     * @param stock
     */
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
exports.Product = Product;
