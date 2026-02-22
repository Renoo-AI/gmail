import React from 'react';
import { Square, ChevronDown, RefreshCcw, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import EmailRow from './EmailRow';

const EmailList = ({ emails, onEmailSelect }) => {
  return (
    <div className="flex-1 bg-white overflow-y-auto">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
            <Square size={18} className="text-gray-500" />
            <ChevronDown size={14} className="text-gray-500 ml-1" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <RefreshCcw size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>

        <div className="flex items-center space-x-4 text-gray-500 text-xs">
          <span>1-50 of 2,345</span>
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-30">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {emails.map((email) => (
          <EmailRow
            key={email.id}
            email={email}
            onSelect={onEmailSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
