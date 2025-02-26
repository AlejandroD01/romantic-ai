// components/RomanticMain.tsx

"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import "../styles/animations.css";

interface RomanticMainProps {
  children: React.ReactNode;
}

const RomanticMain: React.FC<RomanticMainProps> = ({ children }) => {
  const [hearts, setHearts] = useState<{ id: number; style: React.CSSProperties }[]>([]);

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
        position: "absolute",
        animation: "floatUp 3s linear",
          } as const,
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => prevHearts.slice(1));
    }, 3000);

    return () => clearInterval(interval);
  }, [hearts]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100">
      {hearts.map((heart) => (
        <div key={heart.id} className="heart-particle" style={heart.style}>
          ❤️
        </div>
      ))}

      {/* Encabezado fijo */}
      <div className="fixed top-4 left-0 w-full px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center">
            <Heart className="h-8 w-8 text-red-500 mr-3 pulse" />
            <span className="text-2xl font-semibold text-gray-700">
              Amor Eterno Hacia Sheila
            </span>
            <Heart className="h-8 w-8 text-red-500 ml-3 pulse" />
          </div>
          <p className="text-center text-gray-600 italic mb-6 text-lg transform hover:scale-105 transition-transform duration-300">
            💖 Eres mi persona favorita 💖
          </p>
        </div>
      </div>

      {/* Contenido principal (Chat) */}
      <div className="flex items-center justify-center min-h-screen px-4">{children}</div>

      {/* Pie de página fijo */}
      <div className="fixed bottom-0 left-0 w-full text-center text-sm text-gray-500 bg-white bg-opacity-50 py-2">
        © {new Date().getFullYear()} Creado con 💖 para ti
      </div>
    </div>
  );
};

export default RomanticMain;
