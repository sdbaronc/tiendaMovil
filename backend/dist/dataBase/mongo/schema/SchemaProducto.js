"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaProducto = new mongoose_1.Schema({
    idProducto: { type: Number, required: true },
    nombreProducto: { type: String, required: true },
    cantidadProducto: { type: String, required: true },
    precioProducto: { type: Number, required: true },
    precioCantProducto: { type: String, required: true },
    descipcionProducto: { type: String, required: true },
    descuentoProducto: { type: Number, required: true },
    imgUriProducto: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Producto', schemaProducto);
