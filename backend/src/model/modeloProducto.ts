import MongoConn from "../dataBase/mongo/mongoCon";

export default class ProductosModel {

    private mongoDBC: MongoConn;

    constructor() {
        this.mongoDBC = new MongoConn();
    }




    public getProducto = async (id: number, fn: Function) => {
        this.mongoDBC.connection();
        const rows = await this.mongoDBC.producto.find({ idProducto: id });
        //console.log(rows);
        fn(rows);
    }



    public getProductos = async (fn: Function) => {
        this.mongoDBC.connection();
        const rows = await this.mongoDBC.producto.find();
        //console.log(rows);
        fn(rows);
    }


}