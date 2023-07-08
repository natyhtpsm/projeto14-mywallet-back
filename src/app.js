import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import Joi from "joi";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try{
	await mongoClient.connect() 
	console.log("MongoDB conectado!")
}catch (err){
	(err) => console.log(err.message)
}

const db = mongoClient.db();


// - [ ]  O usuário deve ser capaz de criar uma conta na tela de rota `/cadastro`.
// - [ ]  Através de uma requisição **POST**, realize o cadastro do usuário no banco de dados.
//     - [ ]  Todos os campos são obrigatórios. Faça validações de acordo com a necessidade no front e no back que garantam que todos os dados estejam presentes.
//     - [ ]  O e-mail deve ter um formato válido. Caso não possua, a requisição deve retornar o status code `422 (Unprocessable Entity)`e o front-end deve mostrar uma mensagem explicando o erro. (Use `alert`)
//     - [ ]  A senha deve possuir no mínimo três caracteres. Caso não possua, a requisição deve retornar status `422 (Unprocessable Entity)`e o front-end deve mostrar uma mensagem explicando o erro. (Use `alert`)
//     - [ ]  Caso já exista um usuário com este e-mail cadastrado, a requisição deve retornar status code `409 (Conflict)` e o front-end deve mostrar uma mensagem explicando o erro. (Use `alert`)
//     - [ ]  Caso algum dos campos não esteja presente ou esteja em um formato inválido, a requisição deve retornar status code `422 (Unprocessable Entity)` e o front-end deve mostrar uma mensagem explicando. (Use `alert`)
//     - [ ]  Em caso de sucesso, a requisição deve retornar status `201 (Created)`.
// - [ ]  Caso as senhas inseridas nos campos de *senha* e *confirme senha* não sejam iguais, a requisição não deve ser feita. Valide no front-end se esses valores são iguais e, somente então, envie sua requisição para a API (não é necessário enviar a senha duas vezes).
// - [ ]  Realize a criptografia da senha do usuário para guardá-la no banco de dados.


app.listen(5000, () => {console.log("Server is running on port 5000")});
