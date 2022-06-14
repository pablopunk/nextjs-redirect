import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

const PARAMS_ERROR =
  "Option {params: true} require the url to be the name of the param to search for: `redirect('to', {params:true})` will work with `/redirect?to=https://example.com`"

const getParamFromClient = (paramName: string) => {
  if (typeof window === 'undefined') {
    return ''
  }

  const url = new URL(window.location.href)
  const paramValue = url.searchParams.get(paramName)

  if (!paramValue) {
    throw new Error(PARAMS_ERROR)
  }

  return paramValue
}

export default (
  redirectUrl: string,
  options?: { asUrl?: string; statusCode?: number; params?: boolean }
) =>
  class extends React.Component {
    // Redirects on the server side first if possible
    static async getInitialProps({ res, query }) {
      if (res?.writeHead) {
        let url = redirectUrl

        if (options?.params === true) {
          const param = redirectUrl
          if (!query?.[param]) {
            throw new Error(PARAMS_ERROR)
          }
          url = query[param]
        }
        res.writeHead(options?.statusCode ?? 301, { Location: url })
        res.end()
      } else if (typeof window !== 'undefined') {
        let url = redirectUrl

        if (options?.params === true) {
          url = getParamFromClient(url)
        }
        window.location.href = url
      }

      return {}
    }

    // Redirects on the client with JavaScript if no server
    componentDidMount() {
      if (options?.params === true) {
        window.location.href = getParamFromClient(redirectUrl)
      } else if (options?.asUrl != null) {
        Router.push(redirectUrl, options.asUrl, { shallow: true })
      } else if (redirectUrl[0] === '/') {
        Router.push(redirectUrl)
      } else {
        window.location.href = redirectUrl
      }
    }

    render() {
      let href = options?.asUrl ?? redirectUrl

      if (options?.params != null) {
        href = getParamFromClient(redirectUrl)
      }

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

const getParamFromURL = (url: string, param: string) => {}
