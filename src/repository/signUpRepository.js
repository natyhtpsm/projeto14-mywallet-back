import { db } from "../connection/dbConnection.js";

export async function signUpRepository(name, email, password){
    try {
        return await db.collection("cadastro").insertOne({ name, email, password });
    } catch (e) {
        console.log(e.message);
        return false;
    }
}

export async function userExists(email){
    try{
        return await db.collection("cadastro").findOne({email});
    } catch(e){
      return console.log(e.message);
    }
}