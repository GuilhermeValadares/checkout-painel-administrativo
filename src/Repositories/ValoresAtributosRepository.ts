import { PrismaFactory } from '../factories/PrismaFactory';
import { IEditarValorAtributo } from '../Controllers/schemas/AtributosSchema';
import { ValoresAtributos } from '../Models/ValoresAtributos';

class ValoresAtributosRepository {

    async adicionar(dados: ValoresAtributos[]) {
        return await PrismaFactory.valoresAtributos.createMany({
            data: dados,
        });
    }

    async buscarValoresPorIdAtributo(id_atributo: string) {
        return await PrismaFactory.valoresAtributos.findMany({
            where: {
                id_atributo,
            },
        });
    }

    async editarValorAtributo(dados: any, id: string) {

        return await PrismaFactory.valoresAtributos.update({
            where: {
                id
            },
            data: dados
        });
    }

    async deletarValorAtributo(id: string) {
        return await PrismaFactory.valoresAtributos.update({
            where: {
                id,
            },
            data: {
                ativo: false,
            },
        });
    }

}

export default ValoresAtributosRepository;
