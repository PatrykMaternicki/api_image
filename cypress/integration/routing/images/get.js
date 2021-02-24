context('Test Case: get images by', () => {
  it('When request, doesnt have param, should be return 400', () => {
    cy.request({
      url: 'http://localhost:8080/',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(400)
      })
  })

  it('When request, doesnt have param, should be return PARAM_REQUIRED', () => {
    cy.request({
      url: 'http://localhost:8080/',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.body).to.have.property('info', 'REQUIRED_PARAMS')
      })
  })

  it('When param is empty, should be return 400', () => {
    cy.request({
      url: 'http://localhost:8080/?search',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(400)
      })
  })

    
  it('When param is empty, should be return info NOT_ALLOWED_PARAMS', () => {
    cy.request({
      url: 'http://localhost:8080/?search=aasa&test=2',
      failOnStatusCode: false
    })
    .should((response) => {
      expect(response.body).to.have.property('info', 'NOT_ALLOWED_PARAMS')
    })
  })

  it('When everything is ok, should be return 200', () => {
    cy.request({
      url: 'http://localhost:8080/?search=test',
      failOnStatusCode: false
    })
    .should((response) => {
      expect(response.status).to.eq(200)
    })
  })
})