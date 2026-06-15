import { Router, Request, Response } from 'express';
import ProdutosController from '../../Controllers/ProdutosController';

const routes = Router();

const produtosController = new ProdutosController();

routes.post('/produtos', produtosController.adicionar);

export default routes;
