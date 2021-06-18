describe('Workshop Part 2', () => {
  beforeEach(() => {
    cy.visit('/index.php?id_product=1&controller=product', { failOnStatusCode: false })
  })

  it('adds the default product configuration to cart', () => {
    cy.get('#add_to_cart button').click()
    cy.get('#layer_cart')
      .should('be.visible')
      .within(() => {
        cy.get('h2').should(
          'contain.text',
          'Product successfully added to your shopping cart'
        )
        // Assert some more stuff about the basket modal's contents
      })
  })

  // remove .skip when you're ready to run the test
  it.skip('adds a specific product configuration to cart', () => {
    cy.get('input#quantity_wanted').clear().type('2') // use .clear() and .type() to select a product quantity of 2
    cy.get('select#group_1') // use .select() to chooze size M from the dropdown list
    cy.get('#color_to_pick_list li')
      .eq() // Specify the second element from the dropdown
      .click()
      .should('have.class', 'selected')

    cy.get('#add_to_cart button').click()
    cy.get('#layer_cart')
      .should('be.visible')
      .within(() => {
        cy.get('#layer_cart_product_attributes').should(
          'contain.text',
          'Blue, M'
        )
        cy.get('#layer_cart_product_quantity').should('have.text', '2')
      })
  })
})
