import AtributosService from "../services/AtributosService";
import AtributoRepository from "../Repositories/AtributoRepository";
import { ValoresAtributosRepositoryFactory } from "./ValoresAtributosRepositoryFactory";

export const AtributosRepositoryFactory = new AtributoRepository();

export const AtributosServiceFactory = new AtributosService(AtributosRepositoryFactory, ValoresAtributosRepositoryFactory);
