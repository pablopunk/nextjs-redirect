/// <reference types="cypress" />

describe('nextjs-redirect', () => {
  it('redirects to google', () => {
    cy.visit('/google')
    cy.url().should('include', 'google.com')
  })
  it('redirects with status 301 by default', () => {
    cy.request('/google').then((response) => {
      expect(response.redirects[0]).to.include('301:')
    })
  })
  it('redirects to dynamic custom url', () => {
    cy.request('/redirect?to=https://pablopunk.com').then((response) => {
      expect(response.redirects[0]).to.include('https://pablopunk.com')
    })
  })
  it('redirects with custom status', () => {
    cy.request('/google-302').then((response) => {
      expect(response.redirects[0]).to.include('302:')
    })
  })
  it('redirects in the client', () => {
    cy.visit('/client')
    cy.url().should('include', 'pablopunk.com')
  })
  it('redirects with next/link', () => {
    cy.visit('/')
    cy.contains('Redirect to Google').click()
    cy.url().should('include', 'google.com')
  })
})
