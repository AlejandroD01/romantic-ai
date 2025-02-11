"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import "../styles/animations.css"
import { Chat } from "./Chat"

const RomanticMain: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; style: React.CSSProperties }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Date.now(),
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            color: `hsl(${Math.random() * 60 + 330}, 100%, 70%)`,
          },
        },
      ])
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHearts((prevHearts) => prevHearts.slice(1))
    }, 3000)

    return () => clearTimeout(timeout)
  }, []) // Removed unnecessary dependency: [hearts]

  return (

    <body className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-12 overflow-hidden">
      {hearts.map((heart) => (
        <div key={heart.id} className="heart-particle" style={heart.style}>
          ❤️
        </div>
      ))}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center">
            <Heart className="h-8 w-8 text-red-500 mr-3 pulse" />
            <span className="text-2xl font-semibold text-gray-700 float">Amor Eterno Hacia Sheila</span>
            <Heart className="h-8 w-8 text-red-500 ml-3 pulse" />
          </div>
          <Chat />
          {/* <p className="text-center text-gray-600 italic mb-6 text-lg transform hover:scale-105 transition-transform duration-300">
            "En cada latido de mi corazón, estás tú."
            </p> */}
        </div>
      </div>
      <div className=" mt-52 text-center text-sm text-gray-500 rotate">
        © {new Date().getFullYear()} Creado con 💖 para ti
      </div>
    </body>

  )
}

export default RomanticMain

