const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'http://localhost:8123',
    chromeWebSecurity: false,
    retries: 3,
    specPattern: 'cypress/integration/**/*.js',
    supportFile: 'cypress/support/index.js'
  }
})
