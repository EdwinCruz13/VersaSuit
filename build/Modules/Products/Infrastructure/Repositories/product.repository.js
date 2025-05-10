"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProductRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * este archivo servira como modelo para el patron mvc
 * creara la relacion en lo definido en la acapa de dominio con la aplicacion
 */
class PrismaProductRepository {
    /**
     * guarda la informacion del producto a la base de datos
     * @param product
     */
    async save(product) {
        await prisma.product.create({
            data: {
                id: product.id,
                name: product.name.Get(),
                price: product.price.Get(),
                stock: product.stock.Get()
            }
        });
    }
}
exports.PrismaProductRepository = PrismaProductRepository;
