"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryPrisma = void 0;
const client_1 = require("@prisma/client");
const product_entity_1 = require("../../Domain/Entities/product.entity");
const prisma = new client_1.PrismaClient();
class ProductRepositoryPrisma {
    async save(product) {
        await prisma.product.create({
            data: product,
        });
    }
    async findById(id) {
        const data = await prisma.product.findUnique({ where: { id } });
        return data ? new product_entity_1.Product(data.id, data.name, data.price, data.stock) : null;
    }
}
exports.ProductRepositoryPrisma = ProductRepositoryPrisma;
