import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import CalendlyButton from './CalendlyButton';

interface Message {
  type: 'user' | 'ai';
  content: React.ReactNode;
}

const initialMessages: Message[] = [
  {
    type: 'ai',
    content: "👋 Hi! I'm your AI assistant. I can help answer questions about our lead generation services or schedule a strategy call. What would you like to know?"
  }
];

// Enhanced knowledge base with more keywords and detailed responses
const knowledgeBase = {
  services: {
    keywords: ['offer', 'service', 'provide', 'help', 'what'],
    response: "We offer AI-powered lead generation and conversion services including: \n\n" +
      "• 24/7 Lead Qualification & Response\n" +
      "• Automated Follow-up Systems\n" +
      "• Smart Lead Routing\n" +
      "• Real-time Analytics\n\n" +
      "Would you like to learn more about any specific service?"
  },
  pricing: {
    keywords: ['price', 'cost', 'pricing', 'fee', 'charge', 'payment', 'expensive', 'money', 'pay'],
    response: "We use a performance-based pricing model:\n\n" +
      "• No upfront costs\n" +
      "• No monthly fees\n" +
      "• You only pay when we deliver results\n\n" +
      "Would you like to schedule a call to discuss specific pricing for your business?"
  },
  process: {
    keywords: ['work', 'process', 'start', 'begin', 'how', 'steps', 'get started'],
    response: "Getting started is simple:\n\n" +
      "1. Book a strategy call to discuss your goals\n" +
      "2. We set up your AI lead system (24 hours)\n" +
      "3. Start receiving qualified leads\n" +
      "4. Only pay for results\n\n" +
      "Ready to get started?"
  },
  ai: {
    keywords: ['ai', 'artificial', 'intelligence', 'automated', 'automation', 'bot', 'system'],
    response: "Our AI system provides:\n\n" +
      "• Instant lead qualification 24/7\n" +
      "• Personalized follow-up sequences\n" +
      "• Smart lead scoring and routing\n" +
      "• Performance optimization\n\n" +
      "Would you like to see how it works?"
  },
  results: {
    keywords: ['results', 'roi', 'return', 'success', 'performance', 'stats', 'statistics', 'work'],
    response: "Our clients typically see:\n\n" +
      "• 40% increase in lead conversion rates\n" +
      "• 2-3x revenue growth\n" +
      "• 24/7 lead response coverage\n" +
      "• Reduced sales team workload\n\n" +
      "Want to learn what results we could achieve for your business?"
  }
};

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): Message => {
    const lowercaseInput = userInput.toLowerCase();

    // Check for scheduling/booking intent
    if (lowercaseInput.includes('schedule') || lowercaseInput.includes('book') || lowercaseInput.includes('call') || lowercaseInput.includes('appointment')) {
      return {
        type: 'ai',
        content: (
          <div>
            <p className="mb-4">I'd be happy to help you schedule a strategy call with our team.</p>
            <CalendlyButton className="w-full btn btn-primary">
              Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </CalendlyButton>
          </div>
        )
      };
    }

    // Check knowledge base for matching topics
    for (const [topic, info] of Object.entries(knowledgeBase)) {
      if (info.keywords.some(keyword => lowercaseInput.includes(keyword))) {
        return {
          type: 'ai',
          content: (
            <div>
              <p className="whitespace-pre-line">{info.response}</p>
              <div className="mt-4">
                <CalendlyButton className="w-full btn btn-primary">
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </CalendlyButton>
              </div>
            </div>
          )
        };
      }
    }

    // Default response for unrecognized queries
    return {
      type: 'ai',
      content: (
        <div>
          <p className="mb-4">
            I'd be happy to help you learn more about our lead generation services.
            We can discuss your specific needs and how our AI-powered system can help grow your business.
          </p>
          <CalendlyButton className="w-full btn btn-primary">
            Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
          </CalendlyButton>
        </div>
      )
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { type: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Generate AI response with slight delay for natural feel
    setTimeout(() => {
      const aiResponse = generateResponse(input);
      setMessages(prev => [...prev, aiResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
                  className={`max-w-[80%] p-3 rounded-lg ${message.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
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