import React from 'react'

declare module 'nextjs-redirect' {
  export default function(
    redirectUrl: string,
    statusCode?: 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308
  ): React.Component
}
