// GET    =>  Buscar Informação
// POST   =>  Criar alguma informação nova
// PUT    =>  Atualizar uma informação
// DELETE =>  Deletar uma informação

// Corpo  => Dados para criação ou atualização de dados (Request Body)
// Route Params => Identificar o Recurso a atualizar
// Query Params => usado para paginação, filtros ordenação

// RUN KNEX FILE WITH "yarn knex migrate:latest --knexfile knexfile.ts"

import express, { response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 



app.listen(process.env.PORT || 3333);