import Express, { Request, Response } from "express";
const app = Express();

// Quero que o servidor hospede arquivos estáticos
app.use(Express.static("public"));
// Quero que o servidor seja capaz de entender o dados recebidos como JSON
app.use(Express.json());

app.post("/salvarDados", (req: Request, res: Response) => {
    const dados = req.body;
    if (dados.lat & dados.lon) {
        console.log("Salvando dados...");
        
    }
    console.log("Dados salvos!");
    return res.status(201).json({
        ok: true,
        body: req.body
    })
})


export default app;