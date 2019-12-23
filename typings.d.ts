import React from 'react'

declare module 'nextjs-redirect' {
  export default function(redirectUrl: string): React.Component
}
