import { Request, Response } from "express";
import ProductosModel from "../model/modeloProducto";
import UsuarioModel from "../model/modeloUsuario";

export default class ProductoController {
    
    private productoModel: ProductosModel;
    private userModel:UsuarioModel;
    constructor() {
        this.productoModel = new ProductosModel();
        this.userModel = new UsuarioModel();
    }

    public getProducto = (request: Request, response: Response) => {
        let id : number = parseInt(request.params.id);
        this.productoModel.getProducto(id, (row: any) => {
            if (row) {
                response.json(row);
            } else {
                return response.status(404).json({ error: false, message: 'User not found' });
            }
        });        
    }
    public getProductos = (request: Request, response: Response) => {
        //let id : number = parseInt(request.params.id);
        this.productoModel.getProductos((row: any) => {
            if (row) {
                response.json(row);
            } else {
                return response.status(404).json({ error: false, message: 'User not found' });
            }
        });        
    }
    

    

    public getImg = (request: Request, response: Response) => {
        response.send('https://raw.githubusercontent.com/sdbaronc/imagenesEcoStore/main/src-eco-store/'+request.params.id+'.jpg')
              
    }
    
    
    
    




}