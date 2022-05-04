describe('Register page', () => {
    it('Go to login page', () => {
        cy.visit('http://localhost:3000/register');
    })

    it('has the correct number of inputs', () => {
        cy.get('input').should('have.length', 3);
    })

    it('has a register button', () => {
        cy.get('#register-button').should('contain', 'Create an account');
    })

    it('has a link to the login page', () => {
        cy.get('#registerPage-login-button').click().url().should('eq', 'http://localhost:3000/login');
    })
})