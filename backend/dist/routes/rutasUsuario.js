"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlUsuario_1 = __importDefault(require("../controller/controlUsuario"));
class UsuarioRoute {
    constructor() {
        this.config = () => {
            this.router.post('/usuario/registro', this.usuariocontrol.registroUsuario);
            this.router.post('/prodcuto/addFav', this.usuariocontrol.addFav);
            this.router.delete('/producto/deleteFav', this.usuariocontrol.deleteFav);
            this.router.post('/carrito/createCarr', this.usuariocontrol.createCarr);
            this.router.put('/carrito/upTotal', this.usuariocontrol.editTotal);
            this.router.put('/carrito/pedir', this.usuariocontrol.pedir);
            this.router.post('/carrito/addProd', this.usuariocontrol.addCarr);
            this.router.delete('/carrito/deleteProd', this.usuariocontrol.deleteCarr);
            this.router.put('/carrito/upCantidad', this.usuariocontrol.upCant);
            this.router.post('/usuario/login', this.usuariocontrol.login);
            this.router.get('/favoritos/:id', this.usuariocontrol.getFav);
            this.router.get('/carrito/:id', this.usuariocontrol.getCar);
            this.router.get('/carritoProd/:id', this.usuariocontrol.getProdCar);
        };
        this.router = (0, express_1.Router)();
        this.usuariocontrol = new controlUsuario_1.default();
        this.config();
    }
}
exports.default = UsuarioRoute;
