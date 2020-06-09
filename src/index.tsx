import React from 'react'
import Router from 'next/router'

export default (
  redirectUrl: string,
  options?: { asUrl: string; statusCode: number }
) =>
  class extends React.Component {
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(options?.statusCode ?? 301, { Location: redirectUrl })
        res.end()
      } else {
        if (options?.asUrl != null) {
          Router.push(redirectUrl, options.asUrl, { shallow: true })
        } else {
          Router.push(redirectUrl)
        }
      }

      return {}
    }
    render() {
      return React.createElement('div')
    }
  }
