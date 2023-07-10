import { addTransaction } from "../repository/transactionRepository.js";

export async function addTransationController(req, res){
    const { valor, descricao } = req.body;
    const { tipo } = req.params; 
    const {userId} = res.locals.session;

    const transaction = addTransaction( valor, descricao, tipo, userId ); 
    if(!transaction){
        return res.sendStatus(500);
    }
    return res.sendStatus(201);
}