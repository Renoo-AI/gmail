import React, { useState } from 'react';
import {
  Menu,
  Search,
  Mic,
  Video,
  Bell,
  User,
  Home as HomeIcon,
  PlaySquare,
  Clock,
  ThumbsUp,
  ChevronRight,
  History,
  Library,
  Flame,
  Music2,
  Gamepad2,
  Trophy
} from 'lucide-react';
import { videos } from '../mockData';

function YouTube() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ["All", "Music", "Gaming", "Live", "JavaScript", "React", "Mixes", "Computers", "Programming", "Podcasts", "News"];

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-4 h-14 sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="bg-red-600 p-1 rounded-lg">
              <PlaySquare className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter">YouTube</span>
          </div>
        </div>

        <div className="flex-1 max-w-[720px] flex items-center gap-4 px-4">
          <div className="flex flex-1 items-center">
            <div className="flex flex-1 items-center border border-gray-300 rounded-l-full px-4 py-1.5 focus-within:border-blue-500 ml-10">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-gray-50 border border-l-0 border-gray-300 rounded-r-full px-5 py-1.5 hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full">
            <Mic className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1.5 right-1.5 bg-red-600 text-white text-[10px] font-medium px-1.5 rounded-full border-2 border-white">
              9+
            </span>
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              J
            </div>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 overflow-y-auto px-3 py-2 hidden lg:block">
          <div className="space-y-1 pb-4 border-b border-gray-100">
            <SidebarItem icon={HomeIcon} label="Home" active />
            <SidebarItem icon={PlaySquare} label="Shorts" />
            <SidebarItem icon={Library} label="Subscriptions" />
          </div>

          <div className="space-y-1 py-4 border-b border-gray-100">
            <div className="px-3 py-2 flex items-center gap-2 font-medium text-lg">
              You <ChevronRight className="w-4 h-4" />
            </div>
            <SidebarItem icon={History} label="History" />
            <SidebarItem icon={PlaySquare} label="Your videos" />
            <SidebarItem icon={Clock} label="Watch later" />
            <SidebarItem icon={ThumbsUp} label="Liked videos" />
          </div>

          <div className="space-y-1 py-4">
            <div className="px-3 py-2 font-medium text-lg mb-1">Explore</div>
            <SidebarItem icon={Flame} label="Trending" />
            <SidebarItem icon={Music2} label="Music" />
            <SidebarItem icon={Gamepad2} label="Gaming" />
            <SidebarItem icon={Trophy} label="Sports" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          {/* Categories bar */}
          <div className="sticky top-0 bg-white z-40 px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0 ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 p-4">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-5 px-3 py-2.5 rounded-xl transition-colors ${
      active ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'
    }`}>
      <Icon className={`w-6 h-6 ${active ? 'fill-black' : ''}`} />
      <span className="text-sm tracking-wide">{label}</span>
    </button>
  );
}

function VideoCard({ video }) {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          12:45
        </div>
      </div>
      <div className="flex gap-3 px-1">
        <img
          src={video.avatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-base leading-snug line-clamp-2 mb-1">
            {video.title}
          </h3>
          <div className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {video.channel}
          </div>
          <div className="text-sm text-gray-600">
            {video.views} • {video.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTube;
