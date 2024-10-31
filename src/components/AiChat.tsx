import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  type: 'user' | 'ai';
  content: string;
}

const initialMessages: Message[] = [
  {
    type: 'ai',
    content: "👋 Hi! I'm your AI assistant. I can help you learn more about our lead generation services or schedule a call. What would you like to know?"
  }
];

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);
    }, 1000);

    setInput('');
  };

  const getAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('pricing') || input.includes('cost')) {
      return "We operate on a performance-based model - you only pay when we deliver results. This means no upfront costs or monthly fees. Would you like to schedule a call to discuss specific numbers?";
    }
    
    if (input.includes('start') || input.includes('begin')) {
      return "Getting started is easy! We can have you up and running within 24 hours. The first step is to schedule a quick intro call where we'll discuss your goals and target market. Would you like me to help you book that call?";
    }
    
    if (input.includes('ai') || input.includes('automation')) {
      return "Our AI system handles lead qualification, follow-ups, and nurturing automatically. This means your team can focus on closing deals while our AI ensures no opportunity slips through the cracks. Want to see it in action?";
    }
    
    return "I'd be happy to help you with that. Would you like to schedule a quick call with our team to discuss this in detail?";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 z-40 ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-2xl">
            <h3 className="font-semibold">AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}