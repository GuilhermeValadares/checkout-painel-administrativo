import { Request, Response } from 'express';

class ProdutosController {

    async adicionar(req: Request, res: Response) {
        try {

            console.log(req.body);

        } catch (error) {

       }
   }

}

export default ProdutosController;


console.log("ProdutosController carregado");
