import { PrismaFactory } from "../factories/PrismaFactory";

class AtributoRepository {

    async adicionar(nome: string) {
        return await PrismaFactory.atributos.create({data: {nome}});
    }

}

export default AtributoRepository;
