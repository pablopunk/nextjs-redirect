describe('nextjs-redirect', () => {
  it('redirects to google', () => {
    const urlRedirects = []

    cy.on('url:changed', (url) => urlRedirects.push(url))
    cy.visit('/google')
    cy.then(() => {
      expect(urlRedirects).to.have.length(1)
      expect(urlRedirects[0]).to.include('google.com')
    })
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
})
