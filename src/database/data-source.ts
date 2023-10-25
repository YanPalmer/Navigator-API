import { DataSource } from "typeorm";
import { User } from "../entities/User";


export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "Navigator-API",
    // Seleciona a entidade especificada
    entities: [User],
    // Sincroniza com o banco de dados
    synchronize: true
    // Ou
    // entities: ["src/entities/*.ts"]
})