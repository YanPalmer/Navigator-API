import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Profile } from "../../relations/entitys/profile";
import { User2 } from "../../relations/entitys/user2";
import { Meeting } from "../../relations/entitys/meeting";
import { Task } from "../../relations/entitys/task";


export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "Teste_User",
    // Seleciona a entidade especificada
    entities: [User, Profile, User2, Meeting, Task],
    // Sincroniza com o banco de dados
    synchronize: true
    // Ou
    // entities: ["src/entities/*.ts"]
})