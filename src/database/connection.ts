import mysql from 'mysql2/promise'
import { config } from "dotenv";

config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

export const getConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_NAME,
        });


        return connection;
    } catch (error) {
        console.log(`Error in Connection => ${error}`); 
    }

}


    