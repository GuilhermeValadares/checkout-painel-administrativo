import { Router } from 'express';
import AtributosController from '../../Controllers/AtributosController';

const routes = Router();

const atributosController = new AtributosController();

routes.post('/atributos', atributosController.adicionar);
routes.post('/atributos/valor/:id', atributosController.adicionarvaloresAtributos);
routes.patch('/atributos/:id', atributosController.editarAtributo);

export default routes;
