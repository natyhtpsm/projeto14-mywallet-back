import { addTransaction } from "../repository/transactionRepository";

export async function addTransationController(req, res){
    const { valor, descricao } = req.body;
    const { tipo } = req.params; 
    const userId = localStorage.getItem("id");

    const transaction = addTransaction( valor, descricao, tipo, userId ); 
    if(!transaction){
        return res.sendStatus(500);
    }

    return res.sendStatus(200);
    //REDIRECIONAR PARA A PAGINA HOME
}