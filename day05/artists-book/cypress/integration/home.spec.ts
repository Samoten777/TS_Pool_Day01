describe('Register button on Home page', () => {
    it('Go to Home page', () => {
        cy.visit('http://localhost:3000');
    })
    it('Test register button redirection', () => {
        cy.get('#home-to-register-button').click().url().should('eq', 'http://localhost:3000/register');
    })
});

describe('Login button on Home page', () => {
    it('Go to Home page', () => {
        cy.visit('http://localhost:3000')
    });

    it('Test login button redirection', () => {
        cy.get('#home-to-login-button').click().url().should('eq', 'http://localhost:3000/login');
    })
})