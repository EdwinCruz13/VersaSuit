"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
//Son clases o funciones que implementan un flujo completo (crear producto, actualizar, etc.).
class CreateProductUseCase {
    constructor(productRepository, productCreator) {
        this.productRepository = productRepository;
        this.productCreator = productCreator;
    }
    /**
     * este es un orquestador entre la capa de dominio y el caso de uso de crear productos
     * solo sirverr de enlace entre las capas
     * usar ProductDTO para pasar datos
     * @param request
     */
    async execute(request) {
        const { id, name, price, stock } = request;
        const product = await this.productCreator.create(id, name, price, stock);
        //ejecuta la funcion del contrato IPRoduct
        await this.productRepository.save(product);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
