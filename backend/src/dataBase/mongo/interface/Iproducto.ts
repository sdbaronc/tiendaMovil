import { Document } from "mongoose";

export default interface IProducto extends Document {
    idProducto :number,
    nombreProducto: string,
    cantidadProducto:string,
    precioProducto:number,
    precioCantProducto:string,
    descipcionProducto :string,
    descuentoProducto:number,
    imgUriProducto:string
}