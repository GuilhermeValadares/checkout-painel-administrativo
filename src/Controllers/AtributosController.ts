import { Request, Response } from 'express';
import { AtributosServiceFactory } from '../factories/AtributoFactory';
import { adicionar } from './schemas/AtributosSchema';

class AtributosController {
    async adicionar(req: Request, res: Response) {
        try {
            const dados = await adicionar.validate(req.body);

            const retorno = await AtributosServiceFactory.adicionar(req.body);

            return res.status(201).json(retorno);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
}

export default AtributosController;
