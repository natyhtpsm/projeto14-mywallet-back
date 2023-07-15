import { db } from "../connection/dbConnection.js";

export async function addTransaction(valor, descricao, tipo, userId){
    try{
        return await db.collection("operacao").insertOne({ valor, descricao, tipo, userId });
    } catch(e){
      return console.log(e.message);
    }
}

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

