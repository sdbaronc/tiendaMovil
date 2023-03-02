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



    public getProductosFitro = async (max: number, min: number, fn: Function) => {
        this.mongoDBC.connection();
        const rows = await this.mongoDBC.producto.find({ precioProducto: { $gte: min, $lte: max } });
        //console.log(rows);
        fn(rows);
    }



    public getProductosPalabras = async (palabras: string, fn: Function) => {
        this.mongoDBC.connection();
        const rows = await this.mongoDBC.producto.find({ $text: { $search: palabras } });
        //console.log(rows);
        fn(rows);
    }



    public getProductosPagina = async (pagina: number, fn: Function) => {
        this.mongoDBC.connection();
        let inf: number = ((pagina * 12) - 12) + 1
        let sup: number = inf + 11

        console.log(inf, sup)
        const rows = await this.mongoDBC.producto.find({ idProducto: { $gte: inf, $lte: sup } });
        //console.log(rows);
        fn(rows);
    }




    public getMaxMin = async (fn: Function) => {
        this.mongoDBC.connection();
        let numeros: number[] = [1000, -1]

        const rows = await this.mongoDBC.producto.find();
        //console.log(rows.length)
        for (let i: number = 0; i < rows.length; i++) {
            if (rows[i].precioProducto < numeros[0]) {
                numeros[0] = rows[i].precioProducto;
            }
            if (rows[i].precioProducto > numeros[1]) {
                numeros[1] = rows[i].precioProducto;
            }
        }
        fn(numeros);
    }



    public getCantPags = async (fn: Function) => {
        this.mongoDBC.connection();
        let numeros: number[] = []
        const rows = await this.mongoDBC.producto.find();
        numeros.push(rows.length)
        numeros.push(Math.ceil(rows.length / 12))
        fn(numeros);



    }








}