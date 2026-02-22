import React from 'react';
import { Square, Star, Archive, Trash2, MailOpen, Clock } from 'lucide-react';

const EmailRow = ({ email, onSelect, onToggleStar }) => {
  return (
    <div
      className="flex items-center px-4 py-2 border-b border-gray-100 cursor-pointer hover:shadow-md hover:z-10 bg-white group"
    >
      <div className="flex items-center space-x-3 mr-4 z-20">
        <Square size={18} className="text-gray-300 hover:text-gray-500" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleStar(email.id);
          }}
          className="focus:outline-none"
        >
          <Star
            size={18}
            className={email.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 hover:text-gray-500'}
          />
        </button>
      </div>

      <div onClick={() => onSelect(email)} className="flex-1 flex items-center min-w-0 h-full py-2">
        <div className={`w-48 text-sm truncate mr-4 ${!email.isRead ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
          {email.sender}
        </div>
        <div className="flex-1 flex items-center min-w-0 mr-4">
          <span className={`text-sm truncate ${!email.isRead ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
            {email.subject}
          </span>
          <span className="text-sm text-gray-500 truncate ml-2">
            - {email.body}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity pr-4">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Archive size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Trash2 size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <MailOpen size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Clock size={18} />
        </button>
      </div>

      <div className={`text-xs font-medium whitespace-nowrap group-hover:hidden ${!email.isRead ? 'text-gray-900' : 'text-gray-500'}`}>
        {email.timestamp}
      </div>
    </div>
  );
};

export default EmailRow;
