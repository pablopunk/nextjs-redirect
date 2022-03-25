import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Link href="/google">
        <a>Redirect to Google</a>
      </Link>
    </div>
  )
}
