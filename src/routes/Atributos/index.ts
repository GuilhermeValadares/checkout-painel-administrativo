import { Router } from 'express';
import AtributosController from '../../Controllers/AtributosController';

const routes = Router();

const atributosController = new AtributosController();

routes.post('/atributos', atributosController.adicionar.bind(atributosController));

export default routes;
