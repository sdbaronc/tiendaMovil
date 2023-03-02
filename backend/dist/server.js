"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const rutasProducto_1 = __importDefault(require("./routes/rutasProducto"));
const rutasUsuario_1 = __importDefault(require("./routes/rutasUsuario"));
//import ClientRoute from "./route/ClientRoute";
class Server {
    //private clientRoute: ClientRoute;
    constructor() {
        this.config = () => {
            this.server.use((0, express_1.urlencoded)({ extended: true }));
            this.server.use((0, express_1.json)());
            this.server.use((0, cors_1.default)());
        };
        this.route = () => {
            this.server.use(`${process.env.PRODROUTE}`, this.productoRoute.router);
            this.server.use(`${process.env.USERSROUTE}`, this.usuarioroute.router);
            //this.server.use('/', this.clientRoute.router);
            //this.server.use('*', this.clientRoute.router);
        };
        this.start = () => {
            this.server.listen(process.env.PORT, () => {
                console.info(`SERVER: http://${process.env.HOST}:${process.env.PORT}`);
            });
        };
        dotenv_1.default.config();
        this.server = (0, express_1.default)();
        this.productoRoute = new rutasProducto_1.default();
        this.usuarioroute = new rutasUsuario_1.default();
        //this.clientRoute = new ClientRoute();        
        this.config();
        this.route();
        this.start();
    }
}
const server = new Server();
