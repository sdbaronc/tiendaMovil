import { Router } from "express";
import UsuarioControl from "../controller/controlUsuario";

export default class UsuarioRoute{
    public router:Router;
    private usuariocontrol: UsuarioControl;

    constructor() {
        this.router = Router();
        this.usuariocontrol = new UsuarioControl();
        this.config();
    }
    public config = (): void => {
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
    }
    

}