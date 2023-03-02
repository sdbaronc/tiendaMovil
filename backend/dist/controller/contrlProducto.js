"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modeloProducto_1 = __importDefault(require("../model/modeloProducto"));
const modeloUsuario_1 = __importDefault(require("../model/modeloUsuario"));
class ProductoController {
    constructor() {
        this.getProducto = (request, response) => {
            let id = parseInt(request.params.id);
            this.productoModel.getProducto(id, (row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.getProductos = (request, response) => {
            //let id : number = parseInt(request.params.id);
            this.productoModel.getProductos((row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.getProductoFiltro = (request, response) => {
            let max = parseFloat(request.params.max);
            let min = parseFloat(request.params.min);
            this.productoModel.getProductosFitro(max, min, (row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.getProductoPalabra = (request, response) => {
            this.productoModel.getProductosPalabras(request.params.palabras, (row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.getImg = (request, response) => {
            response.send('https://raw.githubusercontent.com/sdbaronc/imagenesEcoStore/main/src-eco-store/' + request.params.id + '.jpg');
        };
        this.getProductoPag = (request, response) => {
            let pag = parseInt(request.params.pag);
            this.productoModel.getProductosPagina(pag, (row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.getMaxMin = (request, response) => {
            this.productoModel.getMaxMin((row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.getCantPags = (request, response) => {
            this.productoModel.getCantPags((row) => {
                if (row) {
                    response.json(row);
                }
                else {
                    return response.status(404).json({ error: false, message: 'User not found' });
                }
            });
        };
        this.productoModel = new modeloProducto_1.default();
        this.userModel = new modeloUsuario_1.default();
    }
}
exports.default = ProductoController;
