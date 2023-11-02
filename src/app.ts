import Express, { Request, Response } from "express";
import { listarUsuarios, salvarDados } from "./controlers/geolocation";
const app = Express();

// Quero que o servidor hospede arquivos estáticos
app.use(Express.static("public"));
// Quero que o servidor seja capaz de entender o dados recebidos como JSON
app.use(Express.json());

app.post("/salvarDados", salvarDados);
app.get("/listarUsuarios", listarUsuarios);


export default app;