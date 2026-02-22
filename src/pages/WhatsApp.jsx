import React, { useState } from 'react';
import {
  Search,
  MoreVertical,
  MessageSquare,
  Phone,
  Video,
  Paperclip,
  Smile,
  Mic,
  CheckCheck,
  Filter,
  Users
} from 'lucide-react';
import { whatsappChats } from '../mockData';

function WhatsApp() {
  const [selectedChat, setSelectedChat] = useState(whatsappChats[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="h-screen bg-[#f0f2f5] flex items-center justify-center p-0 lg:p-4 overflow-hidden font-sans antialiased">
      <div className="w-full h-full lg:max-w-[1600px] lg:h-[calc(100vh-40px)] bg-white shadow-2xl flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[450px] border-r border-gray-200 flex flex-col bg-white shrink-0">
          <header className="h-[60px] bg-[#f0f2f5] px-4 flex items-center justify-between shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <img src="https://i.pravatar.cc/150?u=me" alt="Me" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-6 text-gray-500">
              <Users className="w-6 h-6 cursor-pointer" />
              <MessageSquare className="w-6 h-6 cursor-pointer" />
              <MoreVertical className="w-6 h-6 cursor-pointer" />
            </div>
          </header>

          <div className="px-3 py-2 shrink-0">
            <div className="bg-[#f0f2f5] flex items-center px-3 py-1.5 rounded-lg">
              <Search className="w-5 h-5 text-gray-500 mr-4" />
              <input
                type="text"
                placeholder="Search or start new chat"
                className="bg-transparent outline-none text-sm w-full py-1"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {whatsappChats.map(chat => (
              <ChatListItem
                key={chat.id}
                chat={chat}
                active={selectedChat.id === chat.id}
                onClick={() => setSelectedChat(chat)}
              />
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-[#efeae2] relative overflow-hidden">
          {/* Wallpaper pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

          {selectedChat ? (
            <>
              <header className="h-[60px] bg-[#f0f2f5] px-4 flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <img src={selectedChat.avatar} alt={selectedChat.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 leading-tight">{selectedChat.name}</span>
                    <span className="text-xs text-gray-500">{selectedChat.online ? 'online' : 'last seen recently'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-500">
                  <Video className="w-6 h-6 cursor-pointer" />
                  <Phone className="w-5 h-5 cursor-pointer" />
                  <div className="w-[1px] h-6 bg-gray-300 mx-1" />
                  <Search className="w-5 h-5 cursor-pointer" />
                  <MoreVertical className="w-6 h-6 cursor-pointer" />
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-6 space-y-2 z-10 flex flex-col">
                <div className="self-center bg-white/90 text-[11px] font-medium text-gray-500 uppercase px-3 py-1 rounded-lg shadow-sm mb-4">
                  Today
                </div>
                {selectedChat.messages.map(msg => (
                  <MessageBubble key={msg.id} message={msg} />
                ))}
              </div>

              <footer className="h-[62px] bg-[#f0f2f5] px-4 flex items-center gap-3 z-10 shrink-0">
                <Smile className="w-7 h-7 text-gray-500 cursor-pointer" />
                <Paperclip className="w-6 h-6 text-gray-500 cursor-pointer -rotate-45" />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="w-full bg-white rounded-lg px-4 py-2 outline-none text-[15px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Mic className="w-7 h-7 text-gray-500 cursor-pointer" />
              </footer>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
              <div className="bg-gray-200 p-8 rounded-full mb-6">
                <MessageSquare className="w-16 h-16 text-gray-400" />
              </div>
              <h2 className="text-3xl font-light text-gray-600 mb-2">WhatsApp Web</h2>
              <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                Send and receive messages without keeping your phone online.<br />
                Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
              </p>
              <div className="mt-20 flex items-center gap-2 text-gray-400 text-sm">
                <span className="bg-gray-400 h-[1px] w-20" />
                End-to-end encrypted
                <span className="bg-gray-400 h-[1px] w-20" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatListItem({ chat, active, onClick }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
        active ? 'bg-[#f0f2f5]' : 'hover:bg-[#f5f6f6]'
      }`}
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
        <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col border-b border-gray-100 pb-3 min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <span className="font-semibold text-gray-900 truncate">{chat.name}</span>
          <span className={`text-[11px] ${chat.unread > 0 ? 'text-[#25d366] font-semibold' : 'text-gray-500'}`}>
            {chat.timestamp}
          </span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-1 overflow-hidden">
            {chat.messages && chat.messages[chat.messages.length - 1].sender === 'me' && (
              <CheckCheck className="w-4 h-4 text-blue-400 shrink-0" />
            )}
            <span className="text-sm text-gray-500 truncate">{chat.lastMessage}</span>
          </div>
          {chat.unread > 0 && (
            <div className="bg-[#25d366] text-white text-[11px] font-bold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
              {chat.unread}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }) {
  const isMe = message.sender === 'me';
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} w-full`}>
      <div className={`max-w-[85%] sm:max-w-[65%] px-2 py-1.5 rounded-lg shadow-sm relative group ${
        isMe ? 'bg-[#dcf8c6] rounded-tr-none' : 'bg-white rounded-tl-none'
      }`}>
        {/* Tail */}
        <div className={`absolute top-0 w-2 h-3 ${
          isMe ? '-right-2 bg-[#dcf8c6] [clip-path:polygon(0_0,0_100%,100%_0)]' : '-left-2 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]'
        }`} />

        <div className="flex items-end gap-2 pr-2">
          <span className="text-[14.5px] text-gray-900 break-words">{message.text}</span>
          <div className="flex items-center gap-1 shrink-0 pt-1">
            <span className="text-[10px] text-gray-500 uppercase">{message.time}</span>
            {isMe && <CheckCheck className="w-4 h-4 text-blue-400" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsApp;
