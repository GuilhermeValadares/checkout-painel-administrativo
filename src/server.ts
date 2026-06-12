import dotenv from 'dotenv';
import Express from 'express';

dotenv.config();

const server = Express();

server.listen(process.env.PORT)

console.log("Rodando")
