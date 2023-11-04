'use client'

import React, { useState, useEffect } from 'react'

interface StringGlitchProps {
  text: string
  interval: number
}

const StringGlitch = (props:StringGlitchProps) => {
  const { text, interval } = props
  const [formattedString, setNewString] = useState(["#", "%", "@", "#", "$", "!", "*", "$"])
  const [count, setCount] = useState(0)
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"

  let seed = []
  for (var n = 0; n < text.length; n++) {
    const characterIndex = Math.floor(Math.random() * characters.length)
    const character = characters[characterIndex]
    seed.push(character)
  }

  const [formatted, setFormatted] = useState(seed)

  // Change each letter n times where n is the position of the letter in the string
  useEffect(() => {
    let changeInterval:any

    changeInterval = setInterval(() => {
      // for each letter
      for (var i = 0; i < text.length; i++) {
        // if the index is less than count, do nothing
        if (i < count) {
          // do nothing
        } else if (i === count) {
          // if this is the current letter, set it to the correct letter
          formatted[i] = text[i]
          setFormatted(formatted)
        } else if ( count <= text.length ) {
          // select a random character
          const characterIndex = Math.floor(Math.random() * characters.length)
          const character = characters[characterIndex]
          // swap out that character at index
          formatted[i] = character
          setFormatted(formatted)
        }
      }
      count >= text.length + 8 ? setCount(0) : setCount(count + 1)
      setNewString(formatted)
    }, 200)

    return () => clearInterval(changeInterval)
  }, [formattedString, text, characters, interval, count, formatted])

  return (
    <span>{formattedString}</span>
  )
}

export default StringGlitch