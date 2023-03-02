"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SchemaProducto_1 = __importDefault(require("./schema/SchemaProducto"));
class MongoConn {
    constructor() {
        this.connection = () => {
            mongoose_1.default.connect(this.uri)
                .then(() => {
                return console.info('DB: Mongo connection');
            })
                .catch(error => {
                console.error('Error connecting to Mongodb: ', error);
                return process.exit(1);
            });
        };
        this.uri = "" + process.env.MONGODB_URI;
        this.producto = SchemaProducto_1.default;
    }
}
exports.default = MongoConn;
