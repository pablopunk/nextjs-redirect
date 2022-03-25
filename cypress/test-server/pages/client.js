import redirect from '../../..'

const Redirect = redirect('https://pablopunk.com')

export default function Client() {
  return (
    <Redirect>
      <p>Redirecting...</p>
    </Redirect>
  )
}
