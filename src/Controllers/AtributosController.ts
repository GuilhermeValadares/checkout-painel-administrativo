import { Request, Response } from 'express';
import { AtributosServiceFactory } from '../factories/AtributoFactory';
import { Adicionar, AdicionarValor, EditarAtributo } from './schemas/AtributosSchema';

class AtributosController {
    async adicionar(req: Request, res: Response) {
        try {
            await Adicionar.validate(req.body);

            const retorno = await AtributosServiceFactory.adicionar(req.body);

            return res.status(201).json(retorno);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    async adicionarvaloresAtributos(req: Request, res: Response) {
        try {
            await AdicionarValor.validate(req.body);

            if (!req.params.id) {
                throw new Error('Por favor selecione um atributo para adicionar o valor');
            }

            const atributos = await AtributosServiceFactory.adicionarValorAtributo(
                req.body,
                String(req.params.id),
            );

            res.status(201).json(atributos);

            console.log(req.body, req.params.id);
        } catch (err: any) {
            res.status(400).json({ err: err.message });
        }
    }

    async editarAtributo(req: Request, res:Response) {
        try {

            await EditarAtributo.validate(req.body)

            if (!req.params.id) {
                throw new Error('Por favor selecione um atributo para editar');
            }

            const atributoEditado = await AtributosServiceFactory.editarAtributo(req.body, String(req.params.id))

            res.json({atributoEditado})

        } catch (err:any) {
            res.status(400).json({error : err.message})
        }
    }

    async editarValorAtributo(req:Request, res: Response) {
        try {

        } catch(err: any) {
           res.status(400).json({error: err.message})
        }
    }
}

export default AtributosController;
