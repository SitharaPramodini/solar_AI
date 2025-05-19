import React, { useState, useEffect, useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import { Link } from "react-router-dom";

export default function AIchat() {

    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [hasStarted, setHasStarted] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket('ws://192.168.8.121:8000/ws');
        ws.onopen = () => console.log('WebSocket connected');
        ws.onmessage = (event) => {
            setMessages(prev => [...prev, { type: 'received', text: event.data }]);
        };
        ws.onerror = err => console.error('WebSocket error:', err);
        ws.onclose = () => console.log('WebSocket closed');
        setSocket(ws);
  
        return () => ws.close();
    }, []);

    const sendMessage = () => {
        if (input.trim() !== '') {
            socket.send(input);
            setMessages(prev => [...prev, { type: 'sent', text: input }]);
            setInput('');
            setHasStarted(true);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNCAxLjc5LTEuNzkxIDQtNHptMC0zMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDYwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMi43OTEgNCA0IDQgMS43OS0xLjc5MSA0LTR6TTYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0zMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDYwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>
      
      {/* Background gradients */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-orange-600/40 to-transparent rounded-full blur-3xl z-0 transform translate-y-1/4"></div>
      <div className="absolute inset-x-0 -top-40 right-0 h-96 w-96 bg-orange-700/20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -left-40 top-1/4 h-96 w-96 bg-purple-900/10 blur-3xl rounded-full z-0"></div>
      
      {/* Large half-circle at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[140%] aspect-[2/1] rounded-[100%_100%_0_0] bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-orange-900/30 z-0"></div>
      

      
      {/* Main content */}

        {!hasStarted ? (
                    <>
                    <div className="flex flex-col items-center justify-center text-center px-4">
                <div className="w-fit mx-auto md:pt-8 pt-10">
                            <h2 className="text-center">Chat with</h2>
                            <h1 className="mb-6">
      <span className="tracking-normal flex gap-4 md:text-[6rem] text-[4rem]">
        <span className="text-orange-500">hayleys</span>{' '}
        <span className="text-green-500">solar</span>
      </span>
    </h1>
    
                        </div>
                        <p className="mb-3 md:mt-10 mt-6 text-center px-[10%] text-gray-400 md:text-base text-sm">
                            <b>Welcome to AI Agent by Hayleys Solar, </b> <br></br> Sri Lanka's No.1 solar provider. Engage in natural conversations, ask questions, and receive personalized insights instantly. Explore cutting-edge solar solutions effortlessly with an AI designed to guide you every step of the way.
                        </p>
    
                        <video 
            className="md:w-32 w-24 md:my-6 my-12 z-50" 
            src="/AIblob.webm" 
            autoPlay 
            loop 
            muted 
            playsInline
        />
            
                        </div>
                    </>
                ) : (
                    <div className="px-4 md:w-[70%] w-[85%] mx-auto max-h-[60vh] overflow-y-auto mb-32 space-y-4">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`w-fit px-4 py-2 rounded-2xl ${msg.type === 'sent' ? 'bg-orange-500 text-white self-end ml-auto text-right' : 'bg-white/10 text-gray-200 self-start mr-auto text-left'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
    
                {/* Input Field */}
                <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex md:w-[55%] w-[85%] mx-auto items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 z-10">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me anything..."
                        className="w-full bg-transparent border-none text-white placeholder-gray-300 px-4 py-3 focus:outline-none focus:ring-0 focus:ring-transparent transition-all duration-300 focus:placeholder-white focus:pl-5"
                    />
                    <button
                        onClick={sendMessage}
                        className="flex items-center group relative bg-gradient-to-br bg-transparent text-white font-bold px-3 py-1 m-1 rounded-xl transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
                    >
                        <span className="ml-2"><IoSend className="md:text-2xl text-xl" /></span>
                    </button>
                </div>

      
      
      {/* Adding glowing spot on half-circle */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-full h-64 bg-gradient-to-t from-orange-600/20 to-transparent rounded-full blur-3xl z-0"></div>
    </div>
  );
}