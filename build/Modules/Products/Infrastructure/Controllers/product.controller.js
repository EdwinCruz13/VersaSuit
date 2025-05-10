"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const CreateProductUseCase_1 = require("../../Application/UseCases/CreateProductUseCase");
const product_service_1 = require("Modules/Products/Domain/Services/product.service");
const product_repository_1 = require("../Repositories/product.repository");
class ProductController {
    /**
     * usar inyeccion de dependencia
     */
    constructor() {
        const productRepository = new product_repository_1.PrismaProductRepository();
        const productCreator = new product_service_1.ProductCreator(productRepository);
        this.CreateProductUseCase = new CreateProductUseCase_1.CreateProductUseCase(productRepository, productCreator);
    }
    /**
     * endpoint para crear productos
     * @param req
     * @param res
     */
    async CreateProduct(req, res) {
        try {
            const { id, name, price, stock } = req.body;
            //crear dto de producto
            const productDTO = { id, name, price, stock };
            // Invoca el caso de uso para crear el producto, envia el dtoProducto
            await this.CreateProductUseCase.execute(productDTO);
            res.status(201).json({ message: 'Producto creado exitosamente' });
        }
        catch (error) {
            console.error(error);
            res.status(400).json({ error: error });
        }
    }
}
exports.ProductController = ProductController;
