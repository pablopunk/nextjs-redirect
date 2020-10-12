# nextjs-redirect

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" style="display:inline" /> </a>
  <a href="https://www.npmjs.com/package/nextjs-redirect"><img src="https://img.shields.io/npm/dm/nextjs-redirect.svg?color=6c5ce7" style="display:inline" /></a>
  <a href="https://packagephobia.now.sh/result?p=nextjs-redirect"><img src="https://packagephobia.now.sh/badge?p=nextjs-redirect" style="display:inline" /></a>
</p>

<p align="center">
  <i>Redirect to any URL in NextJS both in client and server</i>
</p>

## Install

```sh
npm install nextjs-redirect
```

## Usage

Let's say you want to create a page `/donate` that redirects the user to paypal.me with a default value for the money. You create the page as you always do in NextJS (`pages/donate.js`) and then just use this component with the URL you want:

```js
// pages/donate.js
import redirect from 'nextjs-redirect'
export default redirect('https://paypal.me/pablopunk/5')
```

You can checkout this example live in [pablopunk.com](https://pablopunk.com)

### Status code (301, 302...)

By default, it will send a [301 status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection). This can be customized by an optional parameter:

```js
redirect('https://google.es', { statusCode: 302 })
```

### Client side dynamic routes (as)

When redirecting on the client side, if the redirected page is dynamic (`pages/user/[userId]/info.js`), the following redirect will trigger a page refresh:

```js
redirect('/user/42/info')
```

In this case you can use the `asUrl` option to make a smooth transition between pages without any refresh:

```js
redirect('/user/[userId]/info', { asUrl: '/user/42/info' })
```

### Static export

This package is compatible with `next export` since version 4.0.0. See [PR #4](https://github.com/pablopunk/nextjs-redirect/pull/4) for more details.

### Custom UI component (HOC)

In case the navigation is happening client-side, you can use this package as a HOC to provide your custom components/styles for the UI:

```jsx
import redirect from 'nextjs-redirect'

const Redirect = redirect('https://github.com/pablopunk')

export default () => (
  <Redirect>
    <MyLayout>Redirecting to github!</MyLayout>
  </Redirect>
)
```

## Related

Working with locales routes? Take a look at [nextjs-redirect-locale](https://github.com/pablopunk/nextjs-redirect-locale).

## Native redirects

There's now a native way of handling redirects on NextJS. You can read more about it [here](https://nextjs.org/blog/next-9-5#support-for-rewrites-redirects-and-headers). It requires you to modify your `next.config.js`. Personally I still think `nextjs-redirect` is a more friendly way of doing it, and also more flexible. For example you can do dynamic redirects on the server, depeding on the request, which is useful when working with locales (checkout [nextjs-redirect-locale](https://github.com/pablopunk/nextjs-redirect-locale)) and other request-dependent redirects. It also allows you make client redirects with a custom layout.

## License

MIT

## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablopunk.com)                                        |
