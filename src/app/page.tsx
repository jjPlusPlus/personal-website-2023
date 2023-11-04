import Image from 'next/image'
import StringGlitch from 'components/StringGlitch'
import Affirmations from 'components/Affirmations'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <div className="bg-black">
        <div className="container p-4 md:p-6 lg:p-10">
          <h1 className="text-white text-left text-4xl lg:text-5xl py-2 max-w-full overflow-hidden">
            <StringGlitch text="Justin J. Medina" interval={200} />
          </h1>
        </div>
        
      </div>
      <div className={`
        container bg-white p-4 md:p-6 lg:p-10 max-w-5xl relative 
        lg:rounded-r-[12rem]
      `}>
        <div className="relative z-20">
          <AboutMe />
          <Socials />
          <Experience />
          <Skills />
        </div>
        {/* Fancy background pattern (3 rows) */}
        <div className={`
          absolute z-10 opacity-10 top-0 left-0 w-full h-1/3 rounded-tr-full rounded-br-full
          bg-gradient-to-r from-white via-red-200 to-red-500 
        `}></div>
        <div className={`
          absolute z-10 opacity-10 top-1/3 left-0 w-full h-1/3 rounded-tl-full rounded-bl-full
          bg-gradient-to-r from-red-500 via-red-200 to-white
        `}></div>
        <div className={`
          absolute z-10 opacity-10 top-2/3 left-0 w-full h-1/3 rounded-tr-full rounded-br-full
          bg-gradient-to-r from-white via-red-200 to-red-500
        `}></div>
      </div>
    </main>
  )
}

export function AboutMe() {
  return (
    <div className="my-8">
      <h2 className="text-2xl">
        About Me
      </h2>
      <p className="text py-4">
        Front-end software engineer with a decade of experience. Tireless advocate for the end-user.
      </p>

      <div className="flex justify-center max-w-sm">
        <p className={
          `patua italic text-6xl text-gray-400 translate-y-3`
        }>
          “
        </p>
        <p className="patua italic text-xl text-gray-600 py-4 px-8 flex-1">
          JJ <span className="text-gray-600"><Affirmations speed={2000} animated={false} /></span>
        </p>
        <p className={
          `patua italic text-6xl text-gray-400 translate-y-3`
        }>
          ”
        </p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="my-8">
      <h2 className="text-2xl">Experience</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <li className="card">
          <div className='flex items-center justify-center pb-4 mb-2 border-b'>
            <div className="mr-4">
              <Image
                src="/roaming-hunger-logo.svg"
                alt="Roaming Hunger logo"
                className="dark:invert"
                style={{objectFit: "contain"}}
                height={50}
                width={50}
              />
            </div>    
            <div className='flex-1 leading-snug'>
              <h3 className="font-bold">Roaming Hunger</h3>
              <p className="italic text-sm text-gray-600">May 2019 - present</p>
            </div>
          </div>
          <p className="py-2">
            <span className="font-bold">Role:</span> Lead front-end developer
          </p>
          <p className="py-2">
            <span className="font-bold">Finest Moment:</span> <br/>
            I was responsible for upgrading the entire suite of front-end applications from a legacy Angular setup to a modern React implementation.
          </p>
          <p className="py-2">
            <span className="font-bold">Best Part:</span> <br/>
            I am heavily involved in product planning & architecture design, and I get to mentor our junior developers.
          </p>
        </li>
        <li className="card">
          <div className='flex items-center justify-center pb-4 mb-2 border-b'>
            <div className="mr-4">
              <Image
                src="/fantasmo-logo.png"
                alt="Fantasmo logo"
                className="dark:invert"
                style={{objectFit: "contain"}}
                height={50}
                width={50}
              />
            </div>    
            <div className='flex-1 leading-snug'>
              <h3 className="font-bold">Fantasmo</h3>
              <p className="italic text-sm text-gray-600">October 2017 - May 2019</p>
            </div>
          </div>
          <p className="py-2">
            <span className="font-bold">Role:</span> Lead front-end developer
          </p>
          <p className="py-2">
            <span className="font-bold">Greatest Achievement:</span> <br/>
            I helped build a startup from the ground up, building out all front-end applications and designing the user experience.
          </p>
          <p className="py-2">
            <span className="font-bold">Best Part:</span> <br/>
            I was responsible for architecting a pipeline of image-to-pointcloud processing tools.
          </p>
          
        </li>
        <li className="card">
          <div className='flex items-center justify-center pb-4 mb-2 border-b'>
            <div className="mr-4">
              <Image
                src="/runtriz-logo.svg"
                alt="Runtriz logo"
                className="dark:invert"
                style={{objectFit: "contain"}}
                height={50}
                width={50}
              />
            </div>    
            <div className='flex-1 leading-snug'>
              <h3 className="font-bold">Runtriz</h3>
              <p className="italic text-sm text-gray-600">April 2014 - October 2017</p>
            </div>
          </div>
          <p className="py-2">
            <span className="font-bold">Role:</span> Front-end developer
          </p>
          <p className="py-2">
            <span className="font-bold">Favorite Accomplishment:</span> <br/>
            I helped build a platform of applications for hotels and casinos, building the theming engine behind Runtriz’ white-label platform.
          </p>
          <p className="py-2">
            <span className="font-bold">Best Part:</span> <br/>
            This was my first time managing a group of UI designers to improve the lives of thousands of users.
          </p>
        </li>
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <>
      <div className="my-8">
        <h2 className="text-2xl">Programming skills</h2>
        <ul className='flex flex-wrap gap-2 my-2'>
          <li className='pill bg-gray-700 text-white'>Javascript</li>
          <li className='pill bg-gray-700 text-white'>Typescript</li>
          <li className='pill bg-gray-700 text-white'>Next</li>
          <li className='pill bg-gray-700 text-white'>React</li>
          <li className='pill bg-gray-700 text-white'>React Native</li>
          <li className='pill bg-gray-700 text-white'>Vue</li>
          <li className='pill bg-gray-700 text-white'>Ecommerce</li>
          <li className='pill bg-gray-700 text-white'>UI animation</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-2xl">Design skills</h2>
        <ul className='flex flex-wrap gap-2 my-2'>
          <li className='pill bg-gray-600 text-white'>UI Design</li>
          <li className='pill bg-gray-600 text-white'>User Research</li>
          <li className='pill bg-gray-600 text-white'>Product design</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-2xl">Soft skills</h2>
        <ul className='flex flex-wrap gap-2 my-2'>
          <li className='pill bg-gray-500 text-white'>Mentoring</li>
          <li className='pill bg-gray-500 text-white'>Hiring</li>
          <li className='pill bg-gray-500 text-white'>AGILE Management</li>
          <li className='pill bg-gray-500 text-white'>Product/System Documentation</li>
        </ul>
      </div>
    </>
  )
}

function Socials() {
  return (
    <div className="my-8">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <li className="hover:-translate-y-1 transition ease-linear duration-100 transform-gpu">
          <a 
            href="https://github.com/jjPlusPlus" target="_blank" rel="noreferrer noopener"
            className="flex items-center card p-2 hover:bg-red-100 hover:bg-gradient-to-r from-red-50 via-red-100 to-white"
          >
            <Image
              src="/github-logo.svg"
              alt="Github logo"
              className="mr-2"
              style={{objectFit: "contain"}}
              height={40}
              width={40}
            />
            <div>
              <p className="patua text-lg md:text-xl">
                Github
              </p> 
              <p className="italic text-sm md:text-md">
                @jjPlusPlus
              </p> 
            </div> 
          </a>
        </li>
        <li className="hover:-translate-y-1 transition ease-linear duration-100 transform-gpu">
          <a 
            href="https://www.linkedin.com/in/jjmedina/" target="_blank" rel="noreferrer noopener"
            className="flex items-center card p-2 hover:bg-red-100 hover:bg-gradient-to-r from-red-50 via-red-100 to-white"
          >
            <Image
              src="/linkedin-logo.svg"
              alt="LinkedIn logo"
              className="mr-2"
              style={{objectFit: "fill"}}
              height={40}
              width={40}
            />
            <div>
              <p className="patua text-lg md:text-xl">
                Linkedin
              </p> 
              <p className="italic text-sm md:text-md">
                @jjmedina
              </p>
            </div> 
          </a>
        </li>
        <li className="hover:-translate-y-1 transition ease-linear duration-100 transform-gpu">
          <a 
            href="https://www.instagram.com/mega094/" target="_blank" rel="noreferrer noopener"
            className="flex items-center card p-2 hover:bg-red-100 hover:bg-gradient-to-r from-red-50 via-red-100 to-white"
          >
            <Image
              src="/instagram-logo.svg"
              alt="Instagram logo"
              className="mr-2"
              style={{objectFit: "fill"}}
              height={40}
              width={40}
            />
            <div>
              <p className="patua text-lg md:text-xl">
                Instagram
              </p> 
              <p className="italic text-sm md:text-md">
                @mega094
              </p>
            </div>  
          </a>
        </li>
      </ul>
    </div>
  )
}