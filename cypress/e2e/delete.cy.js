import { Types } from 'mongoose'

describe('DELETE /agendamentos/:id', () => {

    beforeEach(() => {
        cy.login('1004', 'pwd123')
    })

    context('Quando tenho um agendamento', () => {
        const agendamento = {
            nomeCliente: 'Daphne Blake',
            emailCliente: 'daphne@gmail.com',
            data: '27/03/2025',
            hora: '10:00',
            matricula: '1004',
            codigoServico: '4'
        }

        let agendamentoId

        before(() => {

            cy.deleteMany(
                { matricula: agendamento.matricula },
                { collection: 'agendamentos' }
            ).then((result) => {
                cy.log(result)
            })
            //Agendamento feito pelo usuario
            cy.postAgendamento(agendamento)
                .should((response) => {
                    expect(response.status).to.eql(201)
                    agendamentoId = response.body.agendamentoId
                })
            //Aqui autenticação do funcionario para possivel delete 
            cy.login(agendamento.matricula, 'pwd123')
        })

        it('Deve poder remover pelo id', () => {

            cy.api({
                method: 'DELETE',
                url: `http://localhost:3333/api/agendamentos/${agendamentoId}`,
                headers: {
                    Authorization: `Bearer ${Cypress.env('token')}`
                }
            }).should((response) => {
                expect(response.status).to.eql(200)
                expect(response.body.message).to.eql('Agendamento cancelado com sucesso')
            })
        })
    })

    it('Deve retornar 404 quando o agendamento não existe', () => {
        cy.deleteAgendamento(new Types.ObjectId()).should((response) => {
            expect(response.status).to.eql(404)
            expect(response.body.error).to.eql('Agendamento não encontrado')
        })
    })
})

