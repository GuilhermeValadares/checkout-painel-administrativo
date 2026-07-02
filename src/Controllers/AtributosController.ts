import { Request, Response } from 'express';
import { AtributosServiceFactory } from '../factories/AtributoFactory';
import {
    Adicionar,
    AdicionarValor,
    EditarAtributo,
    EditarValorAtributo,
} from './schemas/AtributosSchema';

class AtributosController {
    async adicionar(req: Request, res: Response) {
        try {
            const dadosValidados = await Adicionar.validate(req.body);

            const retorno = await AtributosServiceFactory.adicionar(dadosValidados);

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

    async editarAtributo(req: Request, res: Response) {
        try {
            await EditarAtributo.validate(req.body);

            if (!req.params.id) {
                throw new Error('Por favor selecione um atributo para editar');
            }

            const atributoEditado = await AtributosServiceFactory.editarAtributo(
                req.body,
                String(req.params.id),
            );

            res.json({ atributoEditado });
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async editarValorAtributo(req: Request, res: Response) {
        try {
            await EditarValorAtributo.validate(req.body);

            if (!req.params.id) {
                throw new Error('Por favor selecione um valor de atributo para editar');
            }

            const valorAtributoEditado = await AtributosServiceFactory.editarValorAtributo(
                req.body,
                String(req.params.id),
            );

            res.json(valorAtributoEditado);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async buscarTodosAtributos(req: Request, res: Response) {
        try {
            const retorno = await AtributosServiceFactory.buscarTodosAtributos();
            res.json(retorno);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async deletarAtributo(req: Request, res: Response) {
        try {
            const resultado = await AtributosServiceFactory.deletarAtributo(String(req.params.id));

            res.status(200).json(resultado);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async deletarValorAtributo(req: Request, res: Response) {
        try {
            const resultado = await AtributosServiceFactory.deletarValorAtributo(String(req.params.id));

            res.status(200).json(resultado);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default AtributosController;
