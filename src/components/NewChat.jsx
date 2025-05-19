import React, { useState, useEffect, useRef } from 'react';
import { Check, Truck, Package, DollarSign } from 'lucide-react';
import { IoIosChatboxes } from "react-icons/io";
import { MdInsights } from "react-icons/md";
import { RiGuideFill } from "react-icons/ri";
import { IoSend } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


export default function BuildHubLandingPage() {
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const [waitingForReply, setWaitingForReply] = useState(false);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const messagesEndRef = useRef(null);
  const [typingMessage, setTypingMessage] = useState(null); // for animated typing

  // Initialize session and connect WebSocket
  useEffect(() => {
    const initializeSession = async () => {
      try {
        setIsConnecting(true);
        // Make a request to initialize a session
        const response = await fetch('http://192.168.8.121:8000/init-session');
        
        if (!response.ok) {
          throw new Error('Failed to initialize session');
        }
        
        const data = await response.json();
        const newSessionId = data.session_id;
        setSessionId(newSessionId);
        
        // Connect to WebSocket with the session ID
        connectWebSocket(newSessionId);
      } catch (error) {
        console.error('Error initializing session:', error);
        setIsConnecting(false);
      }
    };

    initializeSession();
    
    // Cleanup function
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  // Function to connect WebSocket with session ID
  const connectWebSocket = (sessionId) => {
    const ws = new WebSocket(`ws://192.168.8.182:8000/ws?session_id=${sessionId}`);
    
    ws.onopen = () => {
      console.log('WebSocket connected with session ID:', sessionId);
      setIsConnecting(false);
    };
  
    let buffer = '';
    let timeoutId;
  
    ws.onmessage = (event) => {
      buffer += event.data;
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        const fullMsg = buffer.trim();
        if (fullMsg) {
          showMessageWordByWord(fullMsg);
        }
        buffer = '';
      }, 500);
    };
  
    ws.onerror = (err) => {
      console.error('WebSocket error:', err);
      setIsConnecting(false);
    };
    
    ws.onclose = () => {
      console.log('WebSocket closed');
      setIsConnecting(false);
    };
  
    setSocket(ws);
    return () => {
      ws.close();
      clearTimeout(timeoutId);
    };
  };

  const sendMessage = () => {
    if (input.trim() !== '' && socket && socket.readyState === WebSocket.OPEN) {
      console.log("Sending input:", input);
      socket.send(input);
      setMessages(prev => [...prev, { type: 'sent', text: input }]);
      setInput('');
      setHasStarted(true);
      setWaitingForReply(true);  // Waiting for reply
    } else if (!socket || socket.readyState !== WebSocket.OPEN) {
      alert("Connection not established. Please try again.");
      // Attempt to reconnect
      if (sessionId) {
        connectWebSocket(sessionId);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log(messages);
  }, [messages]);

  const showMessageWordByWord = async (message) => {
    const words = message.trim().split(' ');
    let current = '';
  
    setTypingMessage(''); // Start with empty typing message
  
    for (let i = 0; i < words.length; i++) {
      current += (i === 0 ? '' : ' ') + words[i];
      setTypingMessage(current);
      await new Promise(resolve => setTimeout(resolve, 250)); // Delay per word
    }
  
    setMessages(prev => [...prev, { type: 'received', text: current }]);
    setTypingMessage(null);
    setWaitingForReply(false);  // Done receiving
  };
  
  return (
    
      <div className="relative min-h-screen max-h-screen bg-gradient-to-br from-[#0000008d] via-[#00000078] to-orange-900/30">
        {/* Content container */}



    
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to={'/'}>
                <img src='logo.png' className='w-28' alt="Logo" />
              </Link>
            </div>

            <div className="h-10 w-10 rounded-full bg-gray-300">
              <img src='user.png' className='rounded-full' alt="User" />
            </div>
          </header>

          {/* Connection status indicator */}
          {/* {isConnecting && (
            <div className="text-center py-2">
              <span className="text-orange-400">Connecting to service...</span>
            </div>
          )} */}

<motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      // transition={pageTransition}
      className="overflow-y-hidden"
    >

          {/* Main content */}
          <main className="flex flex-col items-center justify-center text-center ">
            {/* Glowing orb */}
            {!hasStarted ? (
              <>
                <video
                  className="md:w-32 w-24 z-50"
                  src="/AIblob.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Welcome text */}
                <h1 className="mb-2 text-5xl font-bold">
                  {/* <span className="text-orange-500 bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">Welcome back </span> */}
                  {/* <span className="text-white">Alex!</span> */}
                </h1>

                <p className="mb-12 mx-[20%] text-gray-400">
                  Sri Lanka's No.1 solar provider. Explore cutting-edge solar solutions effortlessly with an AI designed to guide you every step of the way.
                </p>
              </>
            ) : (
              <div
                className="px-4 md:w-[70%] w-[85%] mx-auto h-[75vh] overflow-y-auto space-y-4 flex flex-col"
              >
                {messages.map((msg, idx) => (
                  <div key={idx}>
                    <div
                      className={`w-fit px-4 py-2 rounded-2xl ${
                        msg.type === 'sent'
                          ? 'bg-orange-500 text-white self-end ml-auto text-right'
                          : 'bg-white/10 text-gray-200 self-start mr-auto text-left'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {idx === messages.length - 1 && waitingForReply && !typingMessage && msg.type === 'sent' && (
                      <div className="message received">
                        <video
                          className="md:w-12 w-24 z-50 text-gray-200 self-start mr-auto text-left"
                          src="/AIblob.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing message bubble */}
                {typingMessage && (
                  <div className="w-fit px-4 py-2 rounded-2xl bg-white/10 text-gray-200 self-start mr-auto text-left animate-pulse">
                    {typingMessage}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Chat input */}
            <div className={`box mx-auto transform flex md:w-[55%] w-[85%] items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 z-10
            ${hasStarted ? 'fixed bottom-0 mb-6' : 'mb-6'}`}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isConnecting ? "Connecting..." : "Ask me anything..."}
                className="w-full bg-transparent border-none text-white placeholder-gray-300 px-4 py-3 focus:outline-none focus:ring-0 focus:ring-transparent transition-all duration-300 focus:placeholder-white focus:pl-5"
                disabled={isConnecting}
              />
              <button
                onClick={sendMessage}
                className={`flex items-center group relative bg-transparent text-white font-bold px-3 py-1 m-1 rounded-xl transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isConnecting}
              >
                <span className="ml-2"><IoSend className="md:text-2xl text-xl" /></span>
              </button>
            </div>

            {/* Feature cards */}
            {!hasStarted ? (
              <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-4 w-full max-w-4xl">
                {/* Card 1 */}
                <div className="card">
                  <div className="rounded-3xl box bg-black/60 backdrop-blur-sm py-3 px-6 border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-orange-800/30 flex items-center justify-center">
                        <RiGuideFill className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-white">Smart Solar Guidance</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-left text-xs">
                      Instantly get expert advice on solar products and services.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                  <div className="rounded-3xl box bg-black/60 backdrop-blur-sm py-3 px-6 border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-orange-800/30 flex items-center justify-center">
                        <MdInsights className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-white">Personalized Insights</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-left text-xs">
                      Receive tailored recommendations based on your energy needs.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="card">
                  <div className="rounded-3xl box bg-black/60 backdrop-blur-sm py-3 px-6 border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-orange-800/30 flex items-center justify-center">
                        <IoIosChatboxes className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-white">Instant Support Chat</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-left text-xs">
                      Ask questions and get real-time assistance, anytime.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </main>

          </motion.div>


        </div>

   

      </div>
    
  );
}