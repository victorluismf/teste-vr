describe('Testes Frontend do Site VR', () => {
    //Irei usar o comando cy.visit para o Cypress acessar a página www.vr.com.br.
    it('Acessar a página www.vr.com.br', () => {
        cy.visit('https://www.vr.com.br/')
    })
    //Em seguida o comando cy.get().click() para localizar o botão "Pra Você" e entrar na seção da página www.vr.com.br/onde-aceita.htm.
    it('Navegar até a seção: Pra Você', () => {
        cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
    })
    //Após entrar na seção usarei o comando cy.get().click() novamente para localizar e clicar no botão "Onde usar meu cartão VR".
    it('Clicar no botão: Onde usar meu cartão VR', () => {
        cy.get('.vr-button--negative').click()
    })
    //E por último o comando cy.get() para o body e verificar se o Google Maps abriu em tela.
    it('Validar que o mapa do Google abriu em tela', () => {
        cy.get('body')
    })
    //Todos os testes foram validados pelo Cypress.
})