"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoCon_1 = __importDefault(require("../dataBase/mongo/mongoCon"));
class ProductosModel {
    constructor() {
        this.getProducto = (id, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            const rows = yield this.mongoDBC.producto.find({ idProducto: id });
            //console.log(rows);
            fn(rows);
        });
        this.getProductos = (fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            const rows = yield this.mongoDBC.producto.find();
            //console.log(rows);
            fn(rows);
        });
        this.getProductosFitro = (max, min, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            const rows = yield this.mongoDBC.producto.find({ precioProducto: { $gte: min, $lte: max } });
            //console.log(rows);
            fn(rows);
        });
        this.getProductosPalabras = (palabras, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            const rows = yield this.mongoDBC.producto.find({ $text: { $search: palabras } });
            //console.log(rows);
            fn(rows);
        });
        this.getProductosPagina = (pagina, fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            let inf = ((pagina * 12) - 12) + 1;
            let sup = inf + 11;
            console.log(inf, sup);
            const rows = yield this.mongoDBC.producto.find({ idProducto: { $gte: inf, $lte: sup } });
            //console.log(rows);
            fn(rows);
        });
        this.getMaxMin = (fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            let numeros = [1000, -1];
            const rows = yield this.mongoDBC.producto.find();
            //console.log(rows.length)
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].precioProducto < numeros[0]) {
                    numeros[0] = rows[i].precioProducto;
                }
                if (rows[i].precioProducto > numeros[1]) {
                    numeros[1] = rows[i].precioProducto;
                }
            }
            fn(numeros);
        });
        this.getCantPags = (fn) => __awaiter(this, void 0, void 0, function* () {
            this.mongoDBC.connection();
            let numeros = [];
            const rows = yield this.mongoDBC.producto.find();
            numeros.push(rows.length);
            numeros.push(Math.ceil(rows.length / 12));
            fn(numeros);
        });
        this.mongoDBC = new mongoCon_1.default();
    }
}
exports.default = ProductosModel;
