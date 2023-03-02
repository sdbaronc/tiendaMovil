import express, { Application, json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import ProductoRoute from "./routes/rutasProducto";
import UsuarioRoute from "./routes/rutasUsuario";
//import ClientRoute from "./route/ClientRoute";


class Server {

    private server: Application;
    private productoRoute: ProductoRoute;
    private usuarioroute: UsuarioRoute;
    //private clientRoute: ClientRoute;

    constructor() {
        dotenv.config();
        this.server = express();
        this.productoRoute = new ProductoRoute();
        this.usuarioroute = new UsuarioRoute();
        //this.clientRoute = new ClientRoute();        
        this.config();
        this.route();
        this.start();        
    }

    public config = (): void => {    
        this.server.use(urlencoded({extended: true}));
        this.server.use(json());
        this.server.use(cors());       
    }

    public route = (): void => {
        this.server.use(`${process.env.PRODROUTE}`, this.productoRoute.router);
        this.server.use(`${process.env.USERSROUTE}`, this.usuarioroute.router);
        
        //this.server.use('/', this.clientRoute.router);
        //this.server.use('*', this.clientRoute.router);
    }

    public start = (): void => {
        this.server.listen(process.env.PORT, () => {
            console.info(`SERVER: http://${process.env.HOST}:${process.env.PORT}`);
        });
    }

}

const server = new Server();