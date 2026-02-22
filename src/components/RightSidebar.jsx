import React from 'react';
import { Plus } from 'lucide-react';

const RightSidebar = () => {
  const tools = [
    { name: 'Calendar', icon: 'https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png' },
    { name: 'Keep', icon: 'https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png' },
    { name: 'Tasks', icon: 'https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png' },
    { name: 'Contacts', icon: 'https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png' },
  ];

  return (
    <div className="w-14 border-l border-gray-100 flex flex-col items-center py-4 space-y-6 bg-white">
      {tools.map((tool) => (
        <button key={tool.name} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors" title={tool.name}>
          <img src={tool.icon} alt={tool.name} className="w-5 h-5" />
        </button>
      ))}
      <div className="w-8 border-t border-gray-100 my-2"></div>
      <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
        <Plus size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default RightSidebar;
