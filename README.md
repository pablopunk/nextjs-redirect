# nextjs-redirect

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/nextjs-redirect"><img src="https://img.shields.io/npm/dt/nextjs-redirect.svg" /></a>
</p>

<p align="center">
  <i>Redirect to any URL in NextJS both in client and server</i>
</p>

## Install

```sh
npm install nextjs-redirect
```

## Usage

Let's say you want to create a page `/fund-me` that redirects the user to paypal.me with a default value for the money. You create the page as you always do in NextJS (`pages/fund-me.js`) and then just use this component with the URL you want:

```js
// pages/fund-me.js
import redirect from 'nextjs-redirect'
export default redirect('https://paypal.me/pablopunk/5')
```

## License

MIT

## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.life)                                           |
