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
        this.router.get('/productosFil/:min/:max', this.productoController.getProductoFiltro);
        this.router.get('/productosFi/:palabras', this.productoController.getProductoPalabra);
        this.router.get('/productoPag/:pag', this.productoController.getProductoPag);
        this.router.get('/imagen/:id', this.productoController.getImg);
        this.router.get('/precios/', this.productoController.getMaxMin);
        this.router.get('/cantidades/', this.productoController.getCantPags);
        
    }
}