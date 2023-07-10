import { db } from "../connection/dbConnection.js";

// cria uma operaçao com valor, descriçao, tipo de operaçao e o id do usuario
export async function addTransaction(valor, descricao, tipo, userId){
    try{
        return await db.collection("operacao").insertOne({ valor, descricao, tipo, userId });
    } catch(e){
      return console.log(e.message);
    }
}

// lista as operaçoes com o id do usuário
export async function getTransaction(userId){
    try{
        return await db.collection("operacao").find({ userId }).toArray();
    }catch(e){
        return console.log(e.message);
    }
}

export async function tokenExists(token){
    try{
        return await db.collection("operacao").findOne({ token });
    }catch(e){
        return console.log(e.message);
    }
}

