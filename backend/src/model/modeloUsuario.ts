import MysqlDBC from '../dataBase/mySql/mySqlPool';

export default class UsuarioModel{

    private mysqldbc:MysqlDBC;
    constructor() {
        this.mysqldbc = new MysqlDBC();
    }

    public registroUsuario = (data: { nombre: string, apellido: string, email:string, contrasena:string }, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`insert into Usuario (nombre,apellido,email,contrasena) values (?,?,?,?);`, 
        [data.nombre, data.apellido, data.email, data.contrasena]);
        //console.log(data.nombre);
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }





    public addirFav = (data: { idProducto: number, idUsuario: number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`insert into ProductoFav (idProducto_productoFav,idUsusario_productoFav) values (?,?);`, 
        [data.idProducto.toString(), data.idUsuario.toString()]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }

    public deletFav = (data: { idProducto: number, idUsuario: number}, fn: Function) => {
        this.mysqldbc.connection();
       // console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`delete from ProductoFav  where idProducto_productoFav =  ? and idUsusario_productoFav =?;`, 
        [data.idProducto.toString(), data.idUsuario.toString()]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public createCar = (data: { subtotal: number, total: number, estado:boolean, idUser:number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`insert into Carrito (subtotal, total, estado, idUsuario_carrito) values(?,?,?,?);`, 
        [data.subtotal.toString(), data.total.toString(), data.estado.toString(), data.idUser.toString()]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public editTotal = (data: { idCarr: number, total: number, subtotal:number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`update Carrito set total=? , subtotal=? where idCarrito= ?;`, 
        [ data.total.toString(), data.subtotal.toString(), data.idCarr.toString()]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public pedir = (data: { idCarr: number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`update Carrito set estado=1 where idCarrito= ?;`, 
        [  data.idCarr.toString()]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public addProduct = (data: { idProd: number, cant: number, idCarr: number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`insert into  ProductoCar  ( idProducto_productoCar, cantidadProducto, idCarrito_productoCar) values (?,?,?);`, 
        [  data.idProd.toString(), data.cant.toString(),  data.idCarr.toString() ]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public deletProduct = (data: { idProd: number, idCarr: number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`delete from ProductoCar where idProducto_productoCar=? and idCarrito_productoCar=?;`, 
        [  data.idProd.toString(),  data.idCarr.toString() ]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }

    public upCant = (data: { idProd: number, cant:number, idCarr:number}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`update ProductoCar set cantidadProducto=? where idProducto_productoCar= ? and idCarrito_productoCar=?;`, 
        [  data.cant.toString(), data.idProd.toString(), data.idCarr.toString() ]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }

    public login = (data: { correo: string, pass: string}, fn: Function) => {
        this.mysqldbc.connection();
        //console.log("conectado a mysql");
        const statement = this.mysqldbc.statement(`select * from Usuario where email=? and contrasena=?;`, 
        [  data.correo,  data.pass ]);
        
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }

   

    public getFav = (id: number, fn: Function) => {
        this.mysqldbc.connection();
        const statement = this.mysqldbc.statement(`select idProducto_productoFav from ProductoFav where idUsusario_productoFav = ?;`, 
        [ id.toString()]);
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public getCar = (id: number, fn: Function) => {
        this.mysqldbc.connection();
        const statement = this.mysqldbc.statement(`select * from Carrito where idUsuario_carrito = ? and estado=0;`, 
        [ id.toString()]);
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    public getProdCar = (id: number, fn: Function) => {
        this.mysqldbc.connection();
        const statement = this.mysqldbc.statement(`select * from ProductoCar where idCarrito_productoCar =? ;`, 
        [ id.toString()]);
        this.mysqldbc.pool.query(statement, (error: any, rows: any) => {            
            fn(error, rows);
        });
    }
    



    


}