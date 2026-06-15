import dotenv from 'dotenv';
import Express from 'express';
import rotasProduto from './routes/produtos/routes';

dotenv.config();

const server = Express();

server.use(rotasProduto);

server.listen(process.env.PORT);

console.log("Rodando na porta: " + process.env.PORT)
