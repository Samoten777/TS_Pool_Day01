describe('Login page', () => {
    it('Go to login page', () => {
        cy.visit('http://localhost:3000/login');
    })

    it('has the correct number of inputs', () => {
        cy.get('input').should('have.length', 2);
    })

    it('has a login button', () => {
        cy.get('#login-button').should('contain', 'Log in')
    })

    it('has a link to the register page', () => {
        cy.get('#login-to-register-button').click().url().should('eq', 'http://localhost:3000/register');
    })
})