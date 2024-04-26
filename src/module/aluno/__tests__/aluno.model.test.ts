import { Aluno } from '../aluno.model'
import { KnexService } from '../../../service/knex'

describe('Aluno model Suite', () => {
    it('deve salvar um aluno no modelo', async () => {
        let KnexServiceMock:any

        const knexMock = () => {
            return{
                select: jest.fn().mockReturnValueOnce([100])
            }
        }

        KnexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new Aluno(new KnexService)
        const response = await aluno.store({
            nome: 'Teste Aluno',
            cpf: 12345678954
        })
        expect(response).toBeTruthy()
        expect(response).toEqual(100)
    })
})