// app/page.js

"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [getMessage, setGetMessage] = useState('');
  const [postMessage, setPostMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setGetMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setGetMessage('Error fetching data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });
      const data = await response.json();
      setPostMessage(`Server says: ${data.message}, You said: ${data.youSaid}`);
    } catch (error) {
      console.error('Error posting data:', error);
      setPostMessage('Error posting data');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">GET Request Result:</h2>
        <p className="bg-gray-100 p-2 rounded">{getMessage}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <h2 className="text-xl font-semibold mb-2">POST Request:</h2>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Enter a message"
          className="border p-2 mr-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send POST Request
        </button>
      </form>
      
      {postMessage && (
        <div>
          <h2 className="text-xl font-semibold mb-2">POST Request Result:</h2>
          <p className="bg-gray-100 p-2 rounded">{postMessage}</p>
        </div>
      )}
    </div>
  );
}