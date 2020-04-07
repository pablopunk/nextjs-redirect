import React from 'react'
import Router from 'next/router'

export default (redirectUrl: string, statusCode = 301) =>
  class extends React.Component {
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(statusCode, { Location: redirectUrl })
        res.end()
      } else {
        Router.push(redirectUrl)
      }

      return {}
    }
    render() {
      return React.createElement('div')
    }
  }
