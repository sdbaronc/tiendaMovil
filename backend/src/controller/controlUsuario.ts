import { Request, Response } from "express";
import UsuarioModel from "../model/modeloUsuario";

export default class UsuarioControl {
    private usuariomodel: UsuarioModel;
    constructor() {
        this.usuariomodel = new UsuarioModel();
    }



    public registroUsuario = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.registroUsuario({ nombre: request.body.nombre, apellido: request.body.apellido, email: request.body.email, contrasena: request.body.contrasena }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Usuario Registrado' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Usuario not found' });
        }
    }




    public addFav = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.addirFav({ idProducto: request.body.idProducto, idUsuario: request.body.idUsuario }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Producto agregado a Favorito' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Producto not found' });
        }
    }



    public deleteFav = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.deletFav({ idProducto: request.body.idProducto, idUsuario: request.body.idUsuario }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Producto eliminado de Favorito' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Producto not found' });
        }
    }




    public createCarr = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.createCar({ total: request.body.total, subtotal: request.body.subtotal, estado: request.body.estado, idUser: request.body.idUsuario }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Carrito Creado con Exito' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'carrito not found' });
        }
    }




    public editTotal = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.editTotal({ idCarr: request.body.idCarrito, total: request.body.total, subtotal: request.body.subtotal }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Valores de Carrito Actualizados' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Carrito not found' });
        }
    }




    public pedir = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.pedir({ idCarr: request.body.idCarrito }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Carrito Pedido' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Carrito not found' });
        }
    }




    public addCarr = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.addProduct({ idProd: request.body.idProducto, cant: request.body.cantidadProducto, idCarr: request.body.idCarrito }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Producto Añadido Alcarrito' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Product/Carrito not found' });
        }
    }




    public deleteCarr = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.deletProduct({ idProd: request.body.idProducto, idCarr: request.body.idCarrito }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Producto eliminado del carrito' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Producto/carrito not found' });
        }
    }




    public upCant = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.upCant({ idProd: request.body.idProducto, cant: request.body.cantidadProducto, idCarr: request.body.idCarrito }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } else {
                    return response.json({ error: false, message: 'Cantidad de producto actializada' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Producto/Carrito not found' });
        }
    }




    public login = (request: Request, response: Response) => {
        console.log(request.body);
        if (request.body) {
            this.usuariomodel.login({ correo: request.body.email, pass: request.body.contrasena }, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e201' });
                } if (rows) {
                    return response.json(rows);
                }
                else {
                    return response.json({ error: false, message: 'Usuario logeado' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Usuario not found' });
        }
    }




    public getFav = (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        if (id) {
            this.usuariomodel.getFav(id, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e101' });
                }
                if (rows) {
                    return response.json(rows);
                } else {
                    return response.status(404).json({ error: false, message: 'Productos No Encontrados' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'productos not found' });
        }
    }





    public getCar = (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        if (id) {
            this.usuariomodel.getCar(id, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e101' });
                }
                if (rows) {
                    return response.json(rows);
                } else {
                    return response.status(404).json({ error: false, message: 'Carrito not found' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Carrito not found' });
        }
    }





    public getProdCar = (request: Request, response: Response) => {
        const id = parseInt(request.params.id);
        if (id) {
            this.usuariomodel.getProdCar(id, (error: any, rows: any) => {
                if (error) {
                    console.error(error);
                    return response.json({ error: true, message: 'e101' });
                }
                if (rows) {
                    return response.json(rows);
                } else {
                    return response.status(404).json({ error: false, message: 'Productos not found' });
                }
            });
        } else {
            return response.status(404).json({ error: false, message: 'Productos not found' });
        }
    }
}