"use client"


import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

const AIResponse = ({ response, isLoading }) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setIsTypingComplete(false);
  }, [response]);

  const formatResponse = (text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Check for numbered list items
      const listItemMatch = line.match(/^(\d+)\.\s(.+)/);
      if (listItemMatch) {
        return (
          <div key={index} className="ml-4 my-1">
            <span className="font-bold">{listItemMatch[1]}.</span> {listItemMatch[2]}
          </div>
        );
      }
      
      // Check for keyboard commands (assuming they're wrapped in backticks)
      const parts = line.split(/(`[^`]+`)/);
      return (
        <p key={index} className="my-1">
          {parts.map((part, partIndex) => {
            if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={partIndex} className="bg-gray-200 px-1 rounded">{part.slice(1, -1)}</code>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  if (isLoading) {
    return (
      <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  if (!response) return null;

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">AI Response:</h2>
      <div className="p-2 bg-white rounded">
        {isTypingComplete ? (
          <div>{formatResponse(response)}</div>
        ) : (
          <ReactTypingEffect
            text={[response]}
            typingDelay={50}
            speed={5}
            eraseDelay={1000000}
            displayTextRenderer={(text) => (
              <div>{formatResponse(text)}</div>
            )}
            onTypingDone={() => setIsTypingComplete(true)}
          />
        )}
      </div>
    </div>
  );
};

export default AIResponse;