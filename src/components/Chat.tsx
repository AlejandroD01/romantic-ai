"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages);
  return (
    <>
      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          <Markdown className="text-red-800">{message.content}</Markdown>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded text-red-500" 
          placeholder="Haz una pregunta"
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <button className="border border-gray-300 p-2 rounded text-red-700 " type="submit">LOVE</button>
      </form>
    </>
  );
};
