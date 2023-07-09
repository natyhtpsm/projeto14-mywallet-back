import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../connection/dbConnection.js";

export async function signup(req, res) {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    try {
        await db.collection("cadastro").insertOne({ name, email, password: hash });
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signin(req, res) {
    const { email, password } = req.body

    try {
        const usuario = await db.collection("usuarios").findOne({ email });
        if (!usuario) return res.status(404).send("Usuário não cadastrado");

        console.log(usuario);
        const passwordOk = bcrypt.compareSync(password, usuario.password);
        if (!passwordOk) return res.status(401).send("Senha incorreta");

        await db.collection("sessao").deleteMany({ idUsuario: usuario._id });
        const token = uuid();
        await db.collection("sessao").insertOne({ token, idUsuario: usuario._id });
        res.send(token);
    } catch (err) {
        res.status(500).send(err.message)
    };
}