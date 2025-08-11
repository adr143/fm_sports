import React, { useState } from 'react';
import { MessageCircleIcon, XIcon } from 'lucide-react';
const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };
  return <div className="fixed bottom-6 right-6 z-50">
      {isOpen && <div className="mb-4 p-4 bg-white rounded-lg shadow-lg w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700" aria-label="Close chat">
              <XIcon size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Have a question about our products? Chat with our customer service
            team on WhatsApp.
          </p>
          <button onClick={handleWhatsAppRedirect} className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
            Start Chat
          </button>
        </div>}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors" aria-label="WhatsApp Chat">
        <MessageCircleIcon size={24} />
      </button>
    </div>;
};
export default WhatsAppChat;