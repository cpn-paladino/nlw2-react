import express from 'express';

const app = express();

app.use(express.json());


//GET
//POST
//PUT
//DELETE

//corpo da requisição (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginacao, filtros, ordenação

app.get('/', (request, response)=>{

    return response.json({message: "Hello World"});

});

//http://localhost:3333/users
app.listen(3333);