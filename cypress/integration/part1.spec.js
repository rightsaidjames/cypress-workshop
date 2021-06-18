describe('Workshop Part 1', () => {
  it('loads the homepage', () => {
    cy.visit('/index.php', { failOnStatusCode: false })
    cy.get('#header_logo img').should('be.visible')
    cy.get('#homeslider h2').its('length').should('be.at.least', 2)
    cy.get('#htmlcontent_top img').should('be.visible')
    cy.get('#homefeatured').find('.product-container').should('not.be.empty')
  })

  it('navigates to a PDP', () => {
    cy.visit('/index.php', { failOnStatusCode: false })
    cy.get('#homefeatured').find('.product-container a').first().click()
    cy.get('h1').should('not.be.empty').its('length').should('eql', 1)
    // Assert some more stuff about the PDP
  })
})
