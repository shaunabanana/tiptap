context('/src/Examples/CollaborativeEditing/Vue/', () => {
  beforeEach(() => {
    cy.visit('/src/Examples/CollaborativeEditing/Vue/')
  })

  it('should show the current room with participants', () => {
    cy.wait(3000)
    cy.get('.editor__status')
      .should('contain', 'rooms.')
      .should('contain', 'users online')
  })

  it('should allow user to change name', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('John Doe')
      cy.get('.editor__name > button').click()
      cy.wait(3000)
      cy.get('.editor__name').should('contain', 'John Doe')
    })
  })
})
