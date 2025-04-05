describe('покемоны', function () {

    it('покупка нового аватара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.wait(2000);
        cy.get('.MuiButton-root').click();
        cy.wait(2000);
        cy.get('.header_card_trainer').click();
        cy.get('.k_mobile > :nth-child(5)').click();
        cy.get('.available > .shop__button').first().click();
        cy.get('.card_number').type('4620869113632996'); 
        cy.get('.card_csv').type('125');
        cy.get('.card_date').type('1226'); 
        cy.get('.card_name').type('NAME'); 
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); 
        cy.get('.style_1_base_input').type('56456'); 
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); 
        cy.contains('Покупка прошла успешно').should('be.visible');
});
