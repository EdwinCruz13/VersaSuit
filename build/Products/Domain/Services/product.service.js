"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductName = void 0;
class ProductName {
    constructor(value) {
        this.value = value;
        if (value.length < 3) {
            throw new Error("El nombre del producto debe tener al menos 3 caracteres");
        }
    }
    getValue() {
        return this.value;
    }
}
exports.ProductName = ProductName;
