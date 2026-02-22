import React from 'react';
import { Menu, Search, HelpCircle, Settings, Grid, User } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <Menu className="text-gray-600" size={20} />
        </button>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail"
          className="h-8"
        />
      </div>

      <div className="flex-1 max-w-2xl px-4">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg focus-within:bg-white focus-within:shadow-md transition-all">
          <Search className="text-gray-500 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search mail"
            className="bg-transparent border-none focus:outline-none w-full text-gray-700"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer text-gray-600">
          <HelpCircle size={22} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer text-gray-600">
          <Settings size={22} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer text-gray-600">
          <Grid size={22} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-full cursor-pointer ml-2">
          <div className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium">
            J
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
