"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const CreateProduct_1 = require("../../Application/UseCases/CreateProduct");
const product_repository_1 = require("../Repositories/product.repository");
const repo = new product_repository_1.ProductRepositoryPrisma();
const createProductUseCase = new CreateProduct_1.CreateProductUseCase(repo);
class ProductController {
    static async create(req, res) {
        try {
            await createProductUseCase.execute(req.body);
            res.status(201).json({ message: 'Producto creado exitosamente' });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
}
exports.ProductController = ProductController;
