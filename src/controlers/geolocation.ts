import { Request, Response } from "express";
import { User } from "../entities/User";
import { appDataSource } from "../database/data-source";


export const salvarDados = async (req: Request, res: Response) => {
    try {
        const dados = req.body;
        if (dados.name && dados.lat && dados.lon) {
            console.log("Salvando dados...");

            // Salvar no meu banco de dados
            const user = new User();
            user.name = dados.name;
            user.lat = dados.lat;
            user.lon = dados.lon;
            const salvo = await appDataSource.getRepository(User).save(user);

            // Se tiver sido salvo com sucesso
            // Envie uma resposta
            return res.status(201).json({
                ok: true,
                message: "Localização salva!"
                // ,body: salvo
            })

        } else {
            throw new Error("Usuário, Latitude ou Longitude não encontradas..")
        }
        // console.log("Dados salvos!");
        // return res.status(201).json({
        //     ok: true,
        //     body: req.body
        // })

    } catch (error: any) {
        console.error("Erro ao salvar dados: ", error.message)
    }
}


export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        const users = await appDataSource.getRepository(User).find();
        // const data: any = [];
        // users.forEach(element => {
        //     data.push([element.id, element.name, element.lat, element.lon])
        // });
        // console.log(data);

        res.status(200).json({
            ok: true,
            message: "Users found",
            users: users
        })
    } catch (error) {
        console.log("Ocorreu um erro: ", error)
    }

}