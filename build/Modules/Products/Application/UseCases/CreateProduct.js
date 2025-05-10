"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const product_entity_1 = require("../../Domain/Entities/product.entity");
const product_service_1 = require("../../Domain/Services/product.service");
//import { v4 as uuidv4 } from 'uuid';
class CreateProductUseCase {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(dto) {
        const name = new product_service_1.ProductName(dto.name);
        const data = { id: "1", stock: dto.stock, price: dto.price, name: name.getValue() };
        const product = new product_entity_1.Product(data);
        await this.productRepo.save(product);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
