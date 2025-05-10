"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockQuantity = void 0;
class StockQuantity {
    constructor(value) {
        this.value = value;
        if (value < 0) {
            throw new Error('El stock no puede ser negativo');
        }
        this.value = value;
    }
    Get() {
        return this.value;
    }
    Set(value) {
        this.value = value;
    }
    increase(amount) {
        this.value += amount;
    }
    decrease(amount) {
        const result = this.value - amount;
        if (result < 0) {
            throw new Error('No se puede reducir por debajo de 0');
        }
        this.value = result;
    }
}
exports.StockQuantity = StockQuantity;
