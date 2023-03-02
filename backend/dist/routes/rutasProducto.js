"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contrlProducto_1 = __importDefault(require("../controller/contrlProducto"));
class ProductoRoute {
    constructor() {
        this.config = () => {
            this.router.get('/producto/:id', this.productoController.getProducto);
            this.router.get('/productosAll/', this.productoController.getProductos);
            this.router.get('/productosFil/:min/:max', this.productoController.getProductoFiltro);
            this.router.get('/productosFi/:palabras', this.productoController.getProductoPalabra);
            this.router.get('/productoPag/:pag', this.productoController.getProductoPag);
            this.router.get('/imagen/:id', this.productoController.getImg);
            this.router.get('/precios/', this.productoController.getMaxMin);
            this.router.get('/cantidades/', this.productoController.getCantPags);
        };
        this.router = (0, express_1.Router)();
        this.productoController = new contrlProducto_1.default();
        this.config();
    }
}
exports.default = ProductoRoute;
