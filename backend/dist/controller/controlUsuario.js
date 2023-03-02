"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modeloUsuario_1 = __importDefault(require("../model/modeloUsuario"));
class UsuarioControl {
    constructor() {
        this.registroUsuario = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.registroUsuario({ nombre: request.body.nombre, apellido: request.body.apellido, email: request.body.email, contrasena: request.body.contrasena }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Usuario Registrado' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Usuario not found' });
            }
        };
        this.addFav = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.addirFav({ idProducto: request.body.idProducto, idUsuario: request.body.idUsuario }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Producto agregado a Favorito' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Producto not found' });
            }
        };
        this.deleteFav = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.deletFav({ idProducto: request.body.idProducto, idUsuario: request.body.idUsuario }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Producto eliminado de Favorito' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Producto not found' });
            }
        };
        this.createCarr = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.createCar({ total: request.body.total, subtotal: request.body.subtotal, estado: request.body.estado, idUser: request.body.idUsuario }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Carrito Creado con Exito' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'carrito not found' });
            }
        };
        this.editTotal = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.editTotal({ idCarr: request.body.idCarrito, total: request.body.total, subtotal: request.body.subtotal }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Valores de Carrito Actualizados' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Carrito not found' });
            }
        };
        this.pedir = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.pedir({ idCarr: request.body.idCarrito }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Carrito Pedido' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Carrito not found' });
            }
        };
        this.addCarr = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.addProduct({ idProd: request.body.idProducto, cant: request.body.cantidadProducto, idCarr: request.body.idCarrito }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Producto Añadido Alcarrito' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Product/Carrito not found' });
            }
        };
        this.deleteCarr = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.deletProduct({ idProd: request.body.idProducto, idCarr: request.body.idCarrito }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Producto eliminado del carrito' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Producto/carrito not found' });
            }
        };
        this.upCant = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.upCant({ idProd: request.body.idProducto, cant: request.body.cantidadProducto, idCarr: request.body.idCarrito }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    else {
                        return response.json({ error: false, message: 'Cantidad de producto actializada' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Producto/Carrito not found' });
            }
        };
        this.login = (request, response) => {
            console.log(request.body);
            if (request.body) {
                this.usuariomodel.login({ correo: request.body.email, pass: request.body.contrasena }, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e201' });
                    }
                    if (rows) {
                        return response.json(rows);
                    }
                    else {
                        return response.json({ error: false, message: 'Usuario logeado' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Usuario not found' });
            }
        };
        this.getFav = (request, response) => {
            const id = parseInt(request.params.id);
            if (id) {
                this.usuariomodel.getFav(id, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e101' });
                    }
                    if (rows) {
                        return response.json(rows);
                    }
                    else {
                        return response.status(404).json({ error: false, message: 'Productos No Encontrados' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'productos not found' });
            }
        };
        this.getCar = (request, response) => {
            const id = parseInt(request.params.id);
            if (id) {
                this.usuariomodel.getCar(id, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e101' });
                    }
                    if (rows) {
                        return response.json(rows);
                    }
                    else {
                        return response.status(404).json({ error: false, message: 'Carrito not found' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Carrito not found' });
            }
        };
        this.getProdCar = (request, response) => {
            const id = parseInt(request.params.id);
            if (id) {
                this.usuariomodel.getProdCar(id, (error, rows) => {
                    if (error) {
                        console.error(error);
                        return response.json({ error: true, message: 'e101' });
                    }
                    if (rows) {
                        return response.json(rows);
                    }
                    else {
                        return response.status(404).json({ error: false, message: 'Productos not found' });
                    }
                });
            }
            else {
                return response.status(404).json({ error: false, message: 'Productos not found' });
            }
        };
        this.usuariomodel = new modeloUsuario_1.default();
    }
}
exports.default = UsuarioControl;
