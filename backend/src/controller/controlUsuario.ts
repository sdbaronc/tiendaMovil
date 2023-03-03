import { Request, Response } from "express";
import UsuarioModel from "../model/modeloUsuario";
import jwt from 'jsonwebtoken';

export default class UsuarioControl {
    private usuariomodel: UsuarioModel;
    constructor() {
        this.usuariomodel = new UsuarioModel();
    }

    public validarToken = (request: Request, response: Response) => {
        console.log(request.body.token);
        if(request.body){
            try {
                const decoded = jwt.verify(request.body.token, process.env.DBPASSWD||"ilogicoirrverente");
                // El token es válido y aún no ha expirado
                console.log(decoded.toString());
                return response.json({ error: false, message: 'Usuario logeado' });
              } catch (err) {
                // El token ha expirado o no es válido
                console.error(err);
                return response.json({ error: true, message: 'Usuario no logeado' });
              }
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

                    const header = {
                        alg: 'HS256',
                        typ: 'JWT',
                    };

                    const payload = {
                        
                        mail: request.body.email,
                        pass:request.body.pass
                        
                    };

                    const secretKey = process.env.DBPASSWD||"ilogicoirrverente";

                    const options = {
                        expiresIn: '1m',
                    };

                    const token = jwt.sign({ header, payload }, secretKey, options);

                    console.log(token);

                    return response.json(token);
                }
                else {
                    return response.json({ error: false, message: 'Usuario logeado' });
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












}