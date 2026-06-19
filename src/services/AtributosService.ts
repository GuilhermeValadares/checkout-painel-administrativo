import { IAdicionarAtributo, IAdicionarValor, IEditarAtributo } from '../Controllers/schemas/AtributosSchema';
import AtributoRepository from '../Repositories/AtributoRepository';
import ValoresAtributosRepository from '../Repositories/ValoresAtributosRepository';

class AtributosService {
    constructor(
        private readonly _atributosRepository: AtributoRepository,
        private readonly _valoresAtributosRepository: ValoresAtributosRepository,
    ) {}

    async adicionar(data: IAdicionarAtributo) {
        const atributoAdicionado = await this._atributosRepository.adicionar(data.nome);

        const retorno: any = {
            atributo: atributoAdicionado,
            valores: data.valores,
        };

        if (data.valores) {
            const updateValoresAtributos = data.valores.map((valor) => ({
                ...valor,
                id_atributo: atributoAdicionado.id,
            }));

            const contagemValoresAdicionados =
                await this._valoresAtributosRepository.adicionar(updateValoresAtributos);

            const valoresAtributosAdicionados =
                await this._valoresAtributosRepository.buscarValoresPorIdAtributo(
                    atributoAdicionado.id,
                );

            retorno.valores = valoresAtributosAdicionados;
        }

        return retorno;
    }

    async adicionarValorAtributo(data: IAdicionarValor, id_atributo: string) {
        await this._valoresAtributosRepository.adicionar([{ ...data, id_atributo }]);

        return await this._valoresAtributosRepository.buscarValoresPorIdAtributo(id_atributo);
    }

    async editarAtributo(dados: IEditarAtributo, id_atributo: string) {
        return await this._atributosRepository.editar(dados, id_atributo)
    }
}

export default AtributosService;
