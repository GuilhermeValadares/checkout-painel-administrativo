import { PrismaFactory } from "../factories/PrismaFactory";
import { IEditarAtributo } from "../Controllers/schemas/AtributosSchema";

class AtributoRepository {

    async adicionar(nome: string) {
        return await PrismaFactory.atributos.create({data: {nome}});
    }

    async editar(dados: IEditarAtributo, id_atributo: string) {
        return await PrismaFactory.atributos.update({
            where: { id: id_atributo },
            data: dados,
        });
    }

}

export default AtributoRepository;
