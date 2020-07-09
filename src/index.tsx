import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

export default (
  redirectUrl: string,
  options?: { asUrl?: string; statusCode?: number }
) =>
  class extends React.Component {
    // Redirects on the server side first if possible
    static async getInitialProps({ res }) {
      if (res?.writeHead) {
        res.writeHead(options?.statusCode ?? 301, { Location: redirectUrl })
        res.end()
      }
      return {}
    }

    // Redirects on the client with JavaScript if no server
    componentDidMount() {
      if (options?.asUrl != null) {
        Router.push(redirectUrl, options.asUrl, { shallow: true })
      } else if (redirectUrl[0] === '/') {
        Router.push(redirectUrl)
      } else {
        window.location.href = redirectUrl
      }
    }

    render() {
      const href = options?.asUrl ?? redirectUrl

      return (
        <>
          <Head>
            {/* Redirects with meta refresh if no JavaScript support */}
            <noscript>
              <meta httpEquiv="refresh" content={`0;url=${href}`} />
            </noscript>
            {(options?.statusCode === undefined ||
              options?.statusCode === 301) && (
              <link rel="canonical" href={href} />
            )}
          </Head>
          {/* Provides a redirect link if no meta refresh support; or children if provided */}
          {this.props.children ? (
            this.props.children
          ) : (
            <p>
              Redirecting to <a href={href}>{href}</a>&hellip;
            </p>
          )}
        </>
      )
    }
  }
