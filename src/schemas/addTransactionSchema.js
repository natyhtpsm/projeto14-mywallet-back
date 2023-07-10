// - [ ]  O usuário deve ser capaz de adicionar transações do tipo `entrada` ou `saida` na aplicação, na tela de rota `/nova-transacao/:tipo`. O parâmetro de rota `:tipo` deve ser substituído na URL por `entrada`, no caso da transação de entrada, e `saida` no caso de transação de saída.
// - [ ]  Adicionar uma transação com endpoints do tipo **POST**.
//     - [ ]  Essa rota deve receber o *token* de autorização do usuário. Caso não receba, deve enviar o status `401 (Unauthorized)`.
//     - [ ]  O tipo de dado do valor deve ser flutuante (ex: 40.5) e positivo.
//     - [ ]  Todos os campos são obrigatórios. Faça validações de acordo com a necessidade no front-end e no back-end que garantam que todos os dados estejam presentes.
//     - [ ]  Caso algum dado seja enviado à API em formato inválido, a resposta à requisição deve possuir o status `422 (Unprocessable Entity)` e o front-end deve exibir uma mensagem explicativa ao usuário. (Use `alert`)
//     - [ ]  Em caso de sucesso, o usuário deve ser redirecionado para a página home.


import joi from "joi";

export const transactionSchema = joi.object({
    valor: joi.number().required(),
    descricao: joi.string().required(),
})
