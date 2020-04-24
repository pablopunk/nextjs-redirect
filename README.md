# nextjs-redirect

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/nextjs-redirect"><img src="https://img.shields.io/npm/dt/nextjs-redirect.svg?color=6c5ce7" /></a>
  <a href="https://packagephobia.now.sh/result?p=nextjs-redirect"><img src="https://packagephobia.now.sh/badge?p=nextjs-redirect"/></a>
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

You can checkout this example live in [pablo.pink](https://pablo.pink)

### Status code (301, 302...)

By default, it will send a [301 status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection). This can be customized by an optional parameter:

```js
redirect('https://google.es', 302)
```

## Related

Working with locales routes? Take a look at [nextjs-redirect-locale](https://github.com/pablopunk/nextjs-redirect-locale).

## License

MIT

## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.pìnk)                                           |
