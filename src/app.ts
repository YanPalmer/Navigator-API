import Express from "express";
const app = Express();

// Quero que o servidor hospede arquivos estáticos
app.use(Express.static("public"));
// Quero que o servidor seja capaz de entender o dados recebidos como JSON
app.use(Express.json());


export default app;