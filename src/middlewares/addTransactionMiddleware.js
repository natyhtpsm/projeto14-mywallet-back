import { transactionSchema } from "../schemas/addTransactionSchema.js";
import { tokenExists } from "../repository/transactionRepository.js";

export async function addTransactionMiddleware(req, res, next){
    const { valor, descricao } = req.body;
    const { tipo } = req.params; 
    const sessionData = res.locals.session;
    const token = sessionData.token;
    const userId = sessionData.userId;
    const tokenexists = tokenExists(token);
    const schemaValidation = transactionSchema.validate({valor, descricao}); 
    if(!schemaValidation){ return res.sendStatus(422); }
    if(!tokenexists){ return res.sendStatus(401); }
    if(tipo !== "entrada" || tipo !=="saida"){ return res.sendStatus(422); } 
    next();
};