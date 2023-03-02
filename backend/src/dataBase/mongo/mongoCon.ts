import mongoose from "mongoose";
import SchemaProducto from "./schema/SchemaProducto";
export default class MongoConn {

    private uri: string;
    public producto: any;

    constructor() {
        this.uri = ""+ process.env.MONGODB_URI;   
        this.producto = SchemaProducto;
    }

    public connection = () => {        
        mongoose.connect(this.uri)
            .then(() => {
                return console.info('DB: Mongo connection');
            })
            .catch(error => {
                console.error('Error connecting to Mongodb: ', error);
                return process.exit(1);
            });
    };

}