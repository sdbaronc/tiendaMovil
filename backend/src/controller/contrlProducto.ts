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
    public getProductoFiltro = (request: Request, response: Response) => {
        let max : number = parseFloat(request.params.max);
        let min : number = parseFloat(request.params.min);
        this.productoModel.getProductosFitro(max,min, (row: any) => {
            if (row) {
                response.json(row);
            } else {
                return response.status(404).json({ error: false, message: 'User not found' });
            }
        });        
    }

    public getProductoPalabra = (request: Request, response: Response) => {
        
        this.productoModel.getProductosPalabras(request.params.palabras, (row: any) => {
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
    public getProductoPag = (request: Request, response: Response) => {
        let pag: number=parseInt(request.params.pag)
        this.productoModel.getProductosPagina(pag, (row: any) => {
            if (row) {
                response.json(row);
            } else {
                return response.status(404).json({ error: false, message: 'User not found' });
            }
        });        
    }
    public getMaxMin = (request: Request, response: Response) => {
        
        this.productoModel.getMaxMin( (row: any) => {
            if (row) {
                response.json(row);
            } else {
                return response.status(404).json({ error: false, message: 'User not found' });
            }
        });        
    }
    public getCantPags = (request: Request, response: Response) => {
        
        this.productoModel.getCantPags( (row: any) => {
            if (row) {
                response.json(row);
            } else {
                return response.status(404).json({ error: false, message: 'User not found' });
            }
        });        
    }
    


    // public getFavoritosUser =(request: Request , response: Response)=>{
    //     let ust: number = parseInt(request.params.id);
    //     let usuario: number[]=[]
    //     this.userModel.getFav(ust, (error: any, rows: any) => {
    //         if (error) {
    //             console.error(error);
    //             return response.json({ error: true, message: 'e101' });
    //         }            
    //         if (rows) {
    //             for (let i = 0; i < rows.length; i++) {
    //                 usuario.push(rows[i].idProducto_productoFav);
                    
    //             }
                
    //             console.log(usuario);
    //             return response.json(rows);
                
    //         } else {
    //             return response.status(404).json({ error: false, message: 'Movie not found' });
    //         }
    //     });
        

    // }

}