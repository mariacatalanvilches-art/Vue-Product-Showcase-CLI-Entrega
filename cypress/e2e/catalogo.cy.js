describe('Catálogo de productos', () => {
  it('permite filtrar productos y visualizar resultados', () => {
    cy.intercept('GET', 'https://fakestoreapi.com/products', { fixture: 'products.json' }).as('getProducts')
    cy.visit('/productos')
    cy.wait('@getProducts')
    cy.get('#category').click()
    cy.get('.el-select-dropdown__item').contains('electronics').click()
    cy.contains('Producto Demo').should('exist')
  })
})
