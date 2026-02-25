import { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { chatMessages as initialMessages, items } from '@/data/mockData';
import type { Message } from '@/data/mockData';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const item = items[1]; // calculator

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'me',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-4 flex flex-col max-w-2xl">
        {/* Header */}
        <div className="glass-card p-4 flex items-center gap-4 mb-4">
          <Link to="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
            {item.seller.name[0]}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm">{item.seller.name}</p>
            <p className="text-xs text-muted-foreground">{item.title}</p>
          </div>
          <span className="text-accent text-sm font-semibold">₹{item.price}/day</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 py-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.type === 'system' ? 'justify-center' : msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'system' ? (
                <span className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs">{msg.text}</span>
              ) : (
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.sender === 'me'
                      ? 'bg-accent text-accent-foreground rounded-br-md'
                      : 'bg-secondary text-foreground rounded-bl-md'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-[10px] mt-1 ${msg.sender === 'me' ? 'text-accent-foreground/60' : 'text-muted-foreground'}`}>
                    {msg.time}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2 py-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <button
            onClick={sendMessage}
            className="p-3 rounded-xl bg-accent text-accent-foreground hover:bg-orange-light transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
