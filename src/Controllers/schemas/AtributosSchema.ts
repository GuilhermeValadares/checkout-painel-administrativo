//Um Schema é um objeto que define as regras de validação para um determinado campo ou conjunto de campos.
//O Yup é uma biblioteca de validação de schemas para Node.js.


import { string, object, array, InferType } from 'yup';

export const adicionar = object().shape({
    nome: string().required("O nome é obrigatorio"),
    valores: array().of(object().shape({
        valor: string().required("Defina um nome para o atributo"),
    })).nullable()
})

export type IAdicionarAtributo = InferType<typeof adicionar>;
