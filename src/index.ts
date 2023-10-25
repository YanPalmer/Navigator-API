import app from "./app";
import { appDataSource } from "./database/data-source";

console.log("Aplicativo iniciando...");

setTimeout(() => {
    main();
}, 1000);

async function main() {
    try {
        // Inicalizar banco de dados
        await appDataSource.initialize();
        // Escuta requisições HTTP na porta 3000
        console.log("Banco de dados conectado com sucesso");
        
        app.listen(3000, () => {
            console.log("Servidor ouvindo na porta 3000");
        })


    } catch (error) {
        console.log("Erro ao iniciar banco", error);
    }
}