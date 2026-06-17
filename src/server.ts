import dotenv from 'dotenv';
import Express from 'express';
import rotasAtributos from './routes/Atributos/index';
import rotasProduto from './routes/produtos/routes';

dotenv.config();

const server = Express();

server.use(Express.json());

server.use(rotasProduto);
server.use(rotasAtributos);

server.listen(process.env.PORT);

console.log('Rodando na porta: ' + process.env.PORT);
