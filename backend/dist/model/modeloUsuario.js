"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mySqlPool_1 = __importDefault(require("../dataBase/mySql/mySqlPool"));
class UsuarioModel {
    constructor() {
        this.registroUsuario = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`insert into Usuario (nombre,apellido,email,contrasena) values (?,?,?,?);`, [data.nombre, data.apellido, data.email, data.contrasena]);
            //console.log(data.nombre);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.addirFav = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`insert into ProductoFav (idProducto_productoFav,idUsusario_productoFav) values (?,?);`, [data.idProducto.toString(), data.idUsuario.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.deletFav = (data, fn) => {
            this.mysqldbc.connection();
            // console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`delete from ProductoFav  where idProducto_productoFav =  ? and idUsusario_productoFav =?;`, [data.idProducto.toString(), data.idUsuario.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.createCar = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`insert into Carrito (subtotal, total, estado, idUsuario_carrito) values(?,?,?,?);`, [data.subtotal.toString(), data.total.toString(), data.estado.toString(), data.idUser.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.editTotal = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`update Carrito set total=? , subtotal=? where idCarrito= ?;`, [data.total.toString(), data.subtotal.toString(), data.idCarr.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.pedir = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`update Carrito set estado=1 where idCarrito= ?;`, [data.idCarr.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.addProduct = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`insert into  ProductoCar  ( idProducto_productoCar, cantidadProducto, idCarrito_productoCar) values (?,?,?);`, [data.idProd.toString(), data.cant.toString(), data.idCarr.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.deletProduct = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`delete from ProductoCar where idProducto_productoCar=? and idCarrito_productoCar=?;`, [data.idProd.toString(), data.idCarr.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.upCant = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`update ProductoCar set cantidadProducto=? where idProducto_productoCar= ? and idCarrito_productoCar=?;`, [data.cant.toString(), data.idProd.toString(), data.idCarr.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.login = (data, fn) => {
            this.mysqldbc.connection();
            //console.log("conectado a mysql");
            const statement = this.mysqldbc.statement(`select * from Usuario where email=? and contrasena=?;`, [data.correo, data.pass]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.getFav = (id, fn) => {
            this.mysqldbc.connection();
            const statement = this.mysqldbc.statement(`select idProducto_productoFav from ProductoFav where idUsusario_productoFav = ?;`, [id.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.getCar = (id, fn) => {
            this.mysqldbc.connection();
            const statement = this.mysqldbc.statement(`select * from Carrito where idUsuario_carrito = ? and estado=0;`, [id.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.getProdCar = (id, fn) => {
            this.mysqldbc.connection();
            const statement = this.mysqldbc.statement(`select * from ProductoCar where idCarrito_productoCar =? ;`, [id.toString()]);
            this.mysqldbc.pool.query(statement, (error, rows) => {
                fn(error, rows);
            });
        };
        this.mysqldbc = new mySqlPool_1.default();
    }
}
exports.default = UsuarioModel;
