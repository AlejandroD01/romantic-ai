"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages);
  return (
    <div className="flex mt-10 items-center justify-center  min-h-screen px-4">
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <>
        {messages.map((message) => (
          <div key={message.id} className="px-4 py-2 ">
            <span className="font-bold">
              {message.role === 'user' ? 'Tú: ' : 'AI: '}
            </span>
            <Markdown className="text-red-800 inline-block break-words">
              {message.content}
            </Markdown>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4 max-w-sm">
          <input
            type="text"
            className="border border-gray-600 p-2 rounded text-red-500  mb-2"
            placeholder="Haz una pregunta"
            name="prompt"
            value={input}
            onChange={handleInputChange}
          />
          <button
            className="border border-gray-600 p-2 rounded text-red-700 bg-slate-500 w-full"
            type="submit"
          >
            LOVE
          </button>
        </form>
      </>
    </div>
  </div>
  );
};
