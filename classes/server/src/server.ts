import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);

//GET
//POST
//PUT
//DELETE

//corpo da requisição (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginacao, filtros, ordenação



//http://localhost:3333/users
