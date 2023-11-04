'use client'

import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'

const phrases = [
  "++",
  "is a web developer",
  "is a night owl",
  "plays Overwatch",
  "will pet your dog",
  "is a hacker",
  "drinks decaf coffee",
  "loves tacos",
  "has root access",
  "loves programming",
  "is a certified mechanic",
  "makes games",
  "plays games",
  "is smort",
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
    <span
      className={
        props.animated ? "flash-in inline-block" : "inline-block"
      }
    >
      {phrases[current]}
    </span>
  )
}

export default Affirmations