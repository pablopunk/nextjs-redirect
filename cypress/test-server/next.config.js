const path = require('path')

module.exports = {
  outputFileTracingRoot: path.join(__dirname, '..', '..'),
  turbopack: {
    root: path.join(__dirname, '..', '..')
  }
}
