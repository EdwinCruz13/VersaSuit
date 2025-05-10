"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../Controllers/product.controller");
//create routers for all the endpoints
const ProductRouter = (0, express_1.default)();
//create the controller
const controller = new product_controller_1.ProductController();
/**
 * post  /api/v1/products/createproducts
 * create a new product
 */
ProductRouter.post("/createproduct", (req, resp) => controller.CreateProduct(req, resp));
//export the router
exports.default = ProductRouter;
