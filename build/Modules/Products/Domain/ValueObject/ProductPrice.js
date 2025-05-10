"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPrice = void 0;
class ProductPrice {
    constructor(value) {
        this.value = value;
        if (value < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        this.value = value;
    }
    Get() {
        return this.value;
    }
    Set(value) {
        this.value = value;
    }
}
exports.ProductPrice = ProductPrice;
