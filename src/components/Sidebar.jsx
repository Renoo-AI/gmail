import React from 'react';
import { Pencil, Inbox, Star, Clock, Send, File, ChevronDown } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, count, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-6 py-1.5 rounded-r-full cursor-pointer group ${
        isActive ? 'bg-red-100 text-red-700 font-bold' : 'hover:bg-gray-100 text-gray-600'
      }`}
    >
      <div className="flex items-center space-x-4">
        <Icon size={18} className={isActive ? 'text-red-700' : 'text-gray-600'} />
        <span className="text-sm">{label}</span>
      </div>
      {count && <span className={`text-xs ${isActive ? 'text-red-700' : 'text-gray-600'}`}>{count}</span>}
    </div>
  );
};

const Sidebar = ({ activeFolder, setActiveFolder, onCompose }) => {
  const folders = [
    { id: 'inbox', icon: Inbox, label: 'Inbox', count: 12 },
    { id: 'starred', icon: Star, label: 'Starred' },
    { id: 'snoozed', icon: Clock, label: 'Snoozed' },
    { id: 'sent', icon: Send, label: 'Sent' },
    { id: 'drafts', icon: File, label: 'Drafts', count: 2 },
  ];

  return (
    <div className="w-64 pt-4 pr-4 bg-white h-full overflow-y-auto flex flex-col">
      <div className="px-2 mb-4">
        <button
          onClick={onCompose}
          className="flex items-center space-x-3 px-6 py-4 bg-red-100 hover:shadow-lg transition-shadow rounded-2xl cursor-pointer"
        >
          <Pencil size={20} className="text-red-700" />
          <span className="text-sm font-medium text-red-900">Compose</span>
        </button>
      </div>

      <div className="flex-1">
        {folders.map((folder) => (
          <SidebarItem
            key={folder.id}
            icon={folder.icon}
            label={folder.label}
            count={folder.count}
            isActive={activeFolder === folder.id}
            onClick={() => setActiveFolder(folder.id)}
          />
        ))}

        <div className="flex items-center space-x-4 px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-r-full cursor-pointer mt-1">
          <ChevronDown size={18} />
          <span className="text-sm">More</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
