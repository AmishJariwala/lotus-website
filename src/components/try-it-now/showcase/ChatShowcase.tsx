import { useState } from 'react';

interface ChatShowcaseProps {
  onAction: () => void;
}

const ChatShowcase = ({ onAction }: ChatShowcaseProps) => {
  const [inputText, setInputText] = useState('');

  // Sample chat messages
  const messages = [
    {
      id: 1,
      sender: 'lotus',
      text: 'Hi there! I\'m Lotus, your AI fitness coach. How can I help you today?',
      timestamp: new Date(Date.now() - 1000 * 60 * 10) // 10 minutes ago
    },
    {
      id: 2,
      sender: 'user',
      text: 'I want to start working out but I\'m not sure where to begin.',
      timestamp: new Date(Date.now() - 1000 * 60 * 9) // 9 minutes ago
    },
    {
      id: 3,
      sender: 'lotus',
      text: 'That\'s great! Starting a fitness journey is exciting. Based on your goals, I can recommend a beginner-friendly workout plan. Are you looking to build strength, improve cardio, or a mix of both?',
      timestamp: new Date(Date.now() - 1000 * 60 * 8) // 8 minutes ago
    },
    {
      id: 4,
      sender: 'user',
      text: 'I want to build some muscle and get stronger.',
      timestamp: new Date(Date.now() - 1000 * 60 * 7) // 7 minutes ago
    },
    {
      id: 5,
      sender: 'lotus',
      text: 'Perfect! For building muscle and strength, I recommend starting with a full-body workout 3 times per week. Focus on compound exercises like squats, push-ups, and rows. Would you like me to create a beginner-friendly strength plan for you?',
      timestamp: new Date(Date.now() - 1000 * 60 * 6) // 6 minutes ago
    }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAction();
      setInputText('');
    }
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
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-dark/70' : 'text-gray-400'}`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
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

export default ChatShowcase;
