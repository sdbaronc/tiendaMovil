import MysqlDBC from '../dataBase/mySql/mySqlPool';

export default class UsuarioModel{

    private mysqldbc:MysqlDBC;
    constructor() {
        this.mysqldbc = new MysqlDBC();
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


}