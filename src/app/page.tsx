import Image from 'next/image'
import StringGlitch from 'components/StringGlitch'

export default function Home() {
  return (
    <main className="">
      <div>
        <h1 className="text-5xl">
          <StringGlitch text="Justin Medina" interval={200} />
        </h1>
      </div>
    </main>
  )
}
