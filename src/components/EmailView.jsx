import React from 'react';
import { ArrowLeft, Archive, Trash2, Mail, Clock, MoreVertical, Star, Reply, Printer, ExternalLink, ChevronDown } from 'lucide-react';

const EmailView = ({ email, onBack }) => {
  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <Archive size={18} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <Trash2 size={18} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <Mail size={18} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <Clock size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Printer size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-normal text-gray-800">{email.subject}</h2>
          <div className="flex items-center space-x-2">
            <button className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600">Inbox</button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-medium">
              {email.sender[0]}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-800">{email.sender}</span>
                <span className="text-xs text-gray-500">&lt;{email.sender.toLowerCase().replace(' ', '.')}@example.com&gt;</span>
              </div>
              <div className="text-xs text-gray-500 flex items-center">
                to me
                <ChevronDown size={14} className="ml-1" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-500">{email.timestamp}</span>
            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                <Star size={18} className={email.isStarred ? 'text-yellow-400 fill-yellow-400' : ''} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                <Reply size={18} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
          {email.body}
        </div>
      </div>
    </div>
  );
};

export default EmailView;
