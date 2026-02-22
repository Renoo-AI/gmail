import React from 'react';
import { X, Minimize2, Maximize2, Trash2, MoreVertical, Paperclip, Link, Smile, Image, Lock, Send, ChevronDown } from 'lucide-react';

const ComposeModal = ({ onClose }) => {
  const handleSend = () => {
    alert('Message sent!');
    onClose();
  };

  return (
    <div className="fixed bottom-0 right-10 w-[600px] bg-white rounded-t-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">New Message</span>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded text-gray-600"><Minimize2 size={16} /></button>
          <button className="p-1 hover:bg-gray-200 rounded text-gray-600"><Maximize2 size={16} /></button>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded text-gray-600"><X size={16} /></button>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 space-y-2">
        <input
          type="text"
          placeholder="Recipients"
          className="w-full text-sm py-2 border-b border-gray-100 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full text-sm py-2 border-b border-gray-100 focus:outline-none"
        />
        <textarea
          className="w-full flex-1 min-h-[300px] text-sm py-4 resize-none focus:outline-none"
          placeholder=""
        />
      </div>

      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100 bg-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-blue-700 hover:bg-blue-800 rounded-full overflow-hidden cursor-pointer">
            <button
              onClick={handleSend}
              className="pl-6 pr-4 py-2 text-white text-sm font-medium border-r border-blue-800"
            >
              Send
            </button>
            <button className="px-2 py-2 text-white hover:bg-blue-900 transition-colors">
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="flex items-center space-x-1 text-gray-600">
            <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><Paperclip size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><Link size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><Smile size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><Image size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><Lock size={18} /></button>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-gray-600">
          <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><MoreVertical size={18} /></button>
          <button className="p-2 hover:bg-gray-100 rounded cursor-pointer"><Trash2 size={18} /></button>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;
