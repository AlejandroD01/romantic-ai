// components/Chat.tsx

"use client";

import { useChat } from "ai/react";
import React from "react";
import Markdown from "react-markdown";
import {  Heart } from "lucide-react";

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="max-w-lg w-full bg-white bg-opacity-80 rounded-lg shadow-lg p-4">
      <div className="h-80 overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg ${
                message.role === "user"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <Markdown>{message.content}</Markdown>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          className="flex-1 border text-gray-800 border-gray-300 p-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Escribe tu mensaje..."
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <Heart size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
