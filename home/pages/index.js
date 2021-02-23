import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Header = dynamic(import('../components/Header'))

export default function Home() {
  return (
    <div>
      <Header />
      <p>This is our homepage updated</p>
      <div>
        <a href="/logo-maker/dashboard">Dashboard</a>
      </div>
      <div>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        </div>
        <div>
        <Link href="/logo-ideas">
          <a>Loago Maker</a>
        </Link>
      </div>
      <Image
        src="/static/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={160}
      />
    </div>
  )
}
