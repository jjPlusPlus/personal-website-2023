import Image from 'next/image'
import StringGlitch from 'components/StringGlitch'

export default function Home() {
  return (
    <main className="container p-10">
      <div>
        <h1 className="text-5xl">
          <StringGlitch text="Justin Medina" interval={200} />
        </h1>
        <div className="my-5">
          <h2 className="text-2xl">About Me</h2>
          <p>Software engineer.</p>
        </div>
        <div className="my-5">
          <h2 className="text-2xl">Experience</h2>
          <ul>
            <li>Roaming Hunger</li>
            <li>Fantasmo (now Tier)</li>
            <li>Runtriz (now Radius Networks)</li>
          </ul>
        </div>
        <div className="my-5">
          <h2 className="text-2xl">Skills</h2>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Next</li>
            <li>React</li>
            <li>Vue</li>
          </ul>
        </div>
        <div className="my-5">
          <h2 className="text-2xl">Useful links:</h2>
          <ul>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Printable Resumé</li>
          </ul>
        </div>


      </div>
    </main>
  )
}
