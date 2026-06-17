import { IAdicionarAtributo } from "../Controllers/schemas/AtributosSchema";
import AtributoRepository from "../Repositories/AtributoRepository";
import ValoresAtributosRepository from "../Repositories/ValoresAtributosRepository";
import { AtributosRepositoryFactory } from "../factories/AtributoFactory";

class AtributosService {

    constructor (private readonly _atributosRepository: AtributoRepository, private readonly _valoresAtributosRepository:ValoresAtributosRepository) {}

    async adicionar(data: IAdicionarAtributo) {

        const atributoAdicionado = await this._atributosRepository.adicionar(data.nome);

        const retorno: any = {
            atributo: atributoAdicionado,
            valores: data.valores
        }

        if (data.valores) {

            const updateValoresAtributos = data.valores.map(valor => ({
                ...valor,
                id_atributo: atributoAdicionado.id
            }));


            const contagemValoresAdicionados = await this._valoresAtributosRepository.adicionar(updateValoresAtributos)

            const valoresAtributosAdicionados = await this._valoresAtributosRepository.buscarValoresPorIsAtributo(atributoAdicionado.id);

            retorno.valores = valoresAtributosAdicionados;
        }

        return retorno;
    }

}

export default AtributosService;
