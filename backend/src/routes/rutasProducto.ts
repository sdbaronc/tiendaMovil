import { Router } from "express";
import ProductoController from "../controller/contrlProducto";

export default class ProductoRoute {
    
    public router: Router;
    private productoController: ProductoController;

    constructor() {
        this.router = Router();
        this.productoController = new ProductoController();
        this.config();
    }

    public config = (): void => {
        this.router.get('/producto/:id', this.productoController.getProducto);
        this.router.get('/productosAll/', this.productoController.getProductos);
        this.router.get('/imagen/:id', this.productoController.getImg);
        
    }
}