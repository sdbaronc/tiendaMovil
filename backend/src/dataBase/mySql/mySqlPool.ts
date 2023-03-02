import mysql, { Pool } from "mysql2";

export default class MysqlDBC {

    public pool: Pool;

    constructor() {
        this.pool = mysql.createPool(
            {
                connectionLimit: parseInt(process.env.DBCONNLIMIT || '10'),
                host: process.env.DBHOST,
                port: parseInt(process.env.DBPORT || '3306'),
                user: process.env.DBUSER,
                password: process.env.DBPASSWD,
                database: process.env.DBNAME,
                ssl:{},
                debug: false
            }
        );        
    }

    public connection = () => {
        this.pool.getConnection((err, connection) => { 
            if (err) throw err;
            connection.release();
            console.info('DB: pool connection');
        });
    }

    public statement(statement: string, data: string[]) {
        return mysql.format(statement, data);        
    }

    public limit = (start: number, step: number = parseInt(process.env.DBPAG || '10')): number[] => {
        let limit = [1, 9];
        if (start) {
            start = (start > 0) ? (start - 1) * step : 1;
            limit = [start, step];
        }
        return limit;
    }

}