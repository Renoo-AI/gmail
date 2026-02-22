import React from 'react';
import { Square, ChevronDown, RefreshCcw, MoreVertical, ChevronLeft, ChevronRight, Inbox, Tag, Users, Info } from 'lucide-react';
import EmailRow from './EmailRow';

const EmailList = ({ emails, onEmailSelect, onToggleStar, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'primary', icon: Inbox, label: 'Primary', color: 'text-blue-600', activeBg: 'border-blue-600' },
    { id: 'promotions', icon: Tag, label: 'Promotions', color: 'text-green-600', activeBg: 'border-green-600' },
    { id: 'social', icon: Users, label: 'Social', color: 'text-blue-400', activeBg: 'border-blue-400' },
    { id: 'updates', icon: Info, label: 'Updates', color: 'text-orange-600', activeBg: 'border-orange-600' },
  ];

  const filteredEmails = emails.filter(email => email.category === activeTab);

  return (
    <div className="flex-1 bg-white overflow-y-auto flex flex-col">
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
          <span>1-50 of 124</span>
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

      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-4 px-4 py-3 min-w-[200px] border-b-4 transition-colors cursor-pointer ${
              activeTab === tab.id
                ? `${tab.activeBg} ${tab.color}`
                : 'border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            <tab.icon size={18} />
            <span className={`text-sm ${activeTab === tab.id ? 'font-bold' : ''}`}>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col flex-1">
        {filteredEmails.map((email) => (
          <EmailRow
            key={email.id}
            email={email}
            onSelect={onEmailSelect}
            onToggleStar={onToggleStar}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
