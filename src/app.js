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

app.listen(5000, () => {console.log("Server is running on port 5000")});
