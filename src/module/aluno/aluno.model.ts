import {Knex} from 'knex';
import { KnexService } from '../../service/knex'

export class Aluno {
  private db: Knex
  
  constructor(knexService: KnexService) {
    this.db = knexService.obterConexao()
  }

  getAll = async () => {
    return this.db('alunos').select();
  };

  store = async (params: any) => {
    return this.db('alunos').insert(params)
  }
}