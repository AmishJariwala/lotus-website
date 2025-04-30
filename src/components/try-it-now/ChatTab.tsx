import { useState, useRef, useEffect } from 'react';
import { callAI } from '../../utils/api';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'lotus';
  timestamp: Date;
}

interface ChatTabProps {
  onAction: () => void;
}

const ChatTab = ({ onAction }: ChatTabProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Lotus, your AI fitness companion. How can I help you today?",
      sender: 'lotus',
      timestamp: new Date(Date.now() - 60000)
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    console.log('🔍 User sent message:', inputText);

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Show typing indicator
    const typingIndicatorId = messages.length + 2;
    console.log('🔄 Adding typing indicator with ID:', typingIndicatorId);

    setMessages(prev => [...prev, {
      id: typingIndicatorId,
      text: "...",
      sender: 'lotus',
      timestamp: new Date()
    }]);

    try {
      console.log('🔄 Calling AI API with message:', inputText);
      // Call the AI API
      const responseText = await callAI(inputText);
      console.log('✅ Received response from API:', responseText);

      // Replace typing indicator with response
      console.log('🔄 Updating message with response');
      setMessages(prev => prev.map(msg =>
        msg.id === typingIndicatorId
          ? {
              id: typingIndicatorId,
              text: responseText,
              sender: 'lotus',
              timestamp: new Date()
            }
          : msg
      ));
    } catch (error) {
      console.error('❌ API call failed:', error);

      // Fallback response
      const responseText = "I'm here to support your fitness journey!";
      console.log('⚠️ Using emergency fallback response:', responseText);

      // Update the message with the fallback response
      setMessages(prev => prev.map(msg =>
        msg.id === typingIndicatorId
          ? {
              id: typingIndicatorId,
              text: responseText,
              sender: 'lotus',
              timestamp: new Date()
            }
          : msg
      ));
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Chat header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-light/30 flex items-center justify-center mr-3">
            <span className="text-primary-light text-sm font-bold">L</span>
          </div>
          <div>
            <h2 className="text-white font-semibold">Lotus</h2>
            <p className="text-xs text-gray-400">AI Fitness Coach</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-primary-light text-dark ml-auto'
                  : 'bg-dark-lighter text-white'
              }`}
            >
              {message.text === "..." ? (
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                </div>
              ) : (
                <p>{message.text}</p>
              )}
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-dark/70' : 'text-gray-400'}`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 border-t border-gray-700 bg-dark-darker">

        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Message Lotus..."
            className="flex-grow bg-dark-lighter text-white rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary-light"
          />
          <button
            type="submit"
            className="ml-2 bg-primary-light text-dark rounded-full w-10 h-10 flex items-center justify-center"
            disabled={!inputText.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatTab;
