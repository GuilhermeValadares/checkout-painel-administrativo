import { IEditarAtributo } from '../Controllers/schemas/AtributosSchema';
import { PrismaFactory } from '../factories/PrismaFactory';
import { Atributos } from '../Models/Atributos';

class AtributoRepository {
    async adicionar(data: Atributos) {
        return await PrismaFactory.atributos.create({
            data: data,
        });
    }

    async editar(dados: IEditarAtributo, id_atributo: string) {
        return await PrismaFactory.atributos.update({
            where: { id: id_atributo },
            data: dados,
        });
    }

    async buscarTodosAtributos() {
        return await PrismaFactory.atributos.findMany({
            where: {
                ativo: true,
            },
            include: {
                valores_atributos: {
                    where: {
                        ativo: true,
                    },
                },
            },
        });
    }

    async deletarAtributo(id: string) {
        return await PrismaFactory.atributos.update({
            where: {
                id,
            },
            data: {
                ativo: false,
            },
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

export default AtributoRepository;
