"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductName = void 0;
/**
 * Un value object representa un valor con reglas. No tiene identidad, pero encapsula validaciones.
 */
class ProductName {
    constructor(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("El nombre del producto debe de tener tres caracteres");
        }
        this.value = value.trim();
    }
    Get() {
        return this.value;
    }
    Set(value) {
        this.value = value.trim();
    }
}
exports.ProductName = ProductName;
