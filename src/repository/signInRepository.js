import { db } from "../connection/dbConnection.js";

export async function userExists(email){
    try{
        return await db.collection("cadastro").findOne({email});
    } catch(e){
      return console.log(e.message);
    }
}

export async function sendToken(token, userId){
    localStorage.setItem("token", token);
    localStorage.setItem("id", userId);
    try{
        return await db.collection("sessao").insertOne({ token, userId });
        
    } catch (e) {
        return console.log(e.message);
    }

}