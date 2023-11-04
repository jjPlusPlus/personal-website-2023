'use client'

import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'

const phrases = [
  "++",
  "is a web developer",
  "is a software engineer",
  "is a mechanical engineer",
  "is a night owl",
  "plays Overwatch",
  "will pet your dog",
  "is a hacker",
  "loves React",
  "is a Javascript specialist",
  "drinks [decaf] coffee",
  "loves tacos",
  "has root access",
  "loves programming",
  "makes games",
  "plays games",
  "is smart",
]

// make 'animated' non required

interface AffirmationsProps {
  speed?: number,
  animated?: boolean,
}

const Affirmations = (props:AffirmationsProps) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let interval:any

    interval = setInterval(() => {
      let next = current + 1 >= phrases.length ? 0 : current + 1
      setCurrent(next)
    }, props.speed || 2000)

    return () => clearInterval(interval)
  }, [current])

  

  return (
    <span className="relative w-full">
      {phrases.map((phrase, index) => {
        return ( 
          <span
            key={index}
            className={`
              absolute top-0 left-0
              ${index == current ? "visible flash-in" : "invisible"}
            `}
          >
            {phrase}
          </span>
        )
      })}
    </span>
  )
}

export default Affirmations