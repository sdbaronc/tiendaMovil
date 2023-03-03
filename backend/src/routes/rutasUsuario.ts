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
        
        this.router.post('/prodcuto/addFav', this.usuariocontrol.addFav);
        this.router.delete('/producto/deleteFav', this.usuariocontrol.deleteFav);
        
        this.router.post('/usuario/login', this.usuariocontrol.login);
        this.router.get('/favoritos/:id', this.usuariocontrol.getFav);
        this.router.post('/usuario/validar', this.usuariocontrol.validarToken);
        
    }
    

}