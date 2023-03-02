import { Schema, model } from "mongoose";
import IProducto from "../interface/Iproducto";
const schemaProducto = new Schema({
    idProducto :{type :Number, required:true},
    nombreProducto:{type :String, required:true},
    cantidadProducto:{type :String, required:true},
    precioProducto:{type :Number, required:true},
    precioCantProducto:{type :String, required:true},
    descipcionProducto :{type :String, required:true},
    descuentoProducto:{type :Number, required:true},
    imgUriProducto:{type :String, required:true}
});


export default model<IProducto>('Producto', schemaProducto);