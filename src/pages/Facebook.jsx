import React, { useState } from 'react';
import {
  Search,
  Home,
  Users,
  Play,
  Store,
  Menu,
  Bell,
  MessageCircle,
  Video,
  Image as ImageIcon,
  Smile,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Flag,
  Settings
} from 'lucide-react';
import { facebookPosts } from '../mockData';

function Facebook() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* Header */}
      <header className="h-14 bg-white shadow-sm flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-2 flex-1">
          <div className="bg-blue-600 p-1.5 rounded-full">
            <FacebookIcon className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="bg-gray-100 flex items-center px-3 py-2 rounded-full hidden md:flex max-w-[280px] w-full">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input type="text" placeholder="Search Facebook" className="bg-transparent outline-none w-full text-[15px]" />
          </div>
        </div>

        <nav className="flex items-center justify-center flex-1 h-full max-w-[680px]">
          <NavItem icon={Home} active />
          <NavItem icon={Users} />
          <NavItem icon={Play} />
          <NavItem icon={Store} />
          <NavItem icon={Users} label="Groups" />
        </nav>

        <div className="flex items-center justify-end gap-2 flex-1">
          <HeaderBtn icon={Menu} />
          <HeaderBtn icon={MessageCircle} />
          <HeaderBtn icon={Bell} />
          <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer overflow-hidden border border-gray-100 ml-1">
            <img src="https://i.pravatar.cc/150?u=me" alt="Me" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <div className="flex justify-between pt-4 max-w-[1920px] mx-auto">
        {/* Left Sidebar */}
        <aside className="w-[360px] hidden xl:block sticky top-18 h-[calc(100vh-72px)] overflow-y-auto px-2">
          <SidebarItem img="https://i.pravatar.cc/150?u=me" label="Jules" />
          <SidebarItem icon={Users} label="Friends" color="text-blue-500" />
          <SidebarItem icon={Bookmark} label="Saved" color="text-purple-500" />
          <SidebarItem icon={Users} label="Groups" color="text-blue-600" />
          <SidebarItem icon={Store} label="Marketplace" color="text-blue-400" />
          <SidebarItem icon={Play} label="Video" color="text-blue-500" />
          <SidebarItem icon={Flag} label="Pages" color="text-orange-500" />
          <SidebarItem icon={Settings} label="Settings" color="text-gray-500" />
        </aside>

        {/* Main Feed */}
        <main className="flex-1 max-w-[680px] px-4 space-y-4 pb-10">
          {/* Stories */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            <CreateStoryCard />
            <StoryCard name="Jane Smith" img="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=300&fit=crop" avatar="https://i.pravatar.cc/150?u=jane" />
            <StoryCard name="John Doe" img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=300&fit=crop" avatar="https://i.pravatar.cc/150?u=john" />
            <StoryCard name="Alex" img="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=200&h=300&fit=crop" avatar="https://i.pravatar.cc/150?u=alex" />
          </div>

          {/* Create Post */}
          <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
            <div className="flex gap-2 border-b border-gray-100 pb-3">
              <img src="https://i.pravatar.cc/150?u=me" className="w-10 h-10 rounded-full" />
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full text-left px-4 text-gray-500 transition-colors">
                What's on your mind, Jules?
              </button>
            </div>
            <div className="flex justify-between pt-1">
              <PostAction icon={Video} label="Live video" color="text-red-500" />
              <PostAction icon={ImageIcon} label="Photo/video" color="text-green-500" />
              <PostAction icon={Smile} label="Feeling/activity" color="text-yellow-500" />
            </div>
          </div>

          {/* Posts */}
          {facebookPosts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="w-[360px] hidden lg:block sticky top-18 h-[calc(100vh-72px)] overflow-y-auto px-4">
          <div className="flex justify-between items-center text-gray-500 font-semibold mb-2">
            <span>Contacts</span>
            <div className="flex gap-2">
              <Search className="w-4 h-4 cursor-pointer" />
              <MoreHorizontal className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
          <Contact name="Jane Smith" avatar="https://i.pravatar.cc/150?u=jane" online />
          <Contact name="John Doe" avatar="https://i.pravatar.cc/150?u=john" online />
          <Contact name="Alex Johnson" avatar="https://i.pravatar.cc/150?u=alex" />
          <Contact name="Mom" avatar="https://i.pravatar.cc/150?u=mom" online />
        </aside>
      </div>
    </div>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function NavItem({ icon: Icon, active = false, label }) {
  return (
    <div className={`flex-1 flex items-center justify-center cursor-pointer group h-full relative`}>
      <div className={`p-3 rounded-xl transition-colors w-full flex items-center justify-center ${active ? '' : 'hover:bg-gray-100'}`}>
        <Icon className={`w-7 h-7 ${active ? 'text-blue-600' : 'text-gray-500'}`} />
      </div>
      {active && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded-t-full" />}
    </div>
  );
}

function HeaderBtn({ icon: Icon }) {
  return (
    <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
      <Icon className="w-6 h-6 text-gray-700" />
    </button>
  );
}

function SidebarItem({ icon: Icon, label, img, color }) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-xl cursor-pointer transition-colors">
      {img ? (
        <img src={img} className="w-9 h-9 rounded-full" />
      ) : (
        <Icon className={`w-9 h-9 p-1.5 ${color}`} />
      )}
      <span className="font-medium text-[15px]">{label}</span>
    </div>
  );
}

function CreateStoryCard() {
  return (
    <div className="w-28 sm:w-36 h-48 sm:h-60 bg-white rounded-xl shadow-sm border border-gray-200 shrink-0 cursor-pointer overflow-hidden group">
      <div className="h-[75%] overflow-hidden bg-gray-100">
        <img src="https://i.pravatar.cc/150?u=me" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="relative h-[25%] flex flex-col items-center justify-center pt-2">
        <div className="absolute -top-5 bg-blue-600 p-1.5 rounded-full border-4 border-white">
          <Menu className="w-5 h-5 text-white" />
        </div>
        <span className="text-xs font-semibold mt-1">Create Story</span>
      </div>
    </div>
  );
}

function StoryCard({ name, img, avatar }) {
  return (
    <div className="w-28 sm:w-36 h-48 sm:h-60 rounded-xl shadow-sm shrink-0 cursor-pointer overflow-hidden relative group">
      <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-600 overflow-hidden">
        <img src={avatar} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-3 left-3 text-white font-semibold text-xs drop-shadow-md">
        {name}
      </div>
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
    </div>
  );
}

function PostAction({ icon: Icon, label, color }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg transition-colors">
      <Icon className={`w-6 h-6 ${color}`} />
      <span className="text-gray-500 font-semibold text-sm">{label}</span>
    </button>
  );
}

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <img src={post.avatar} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="font-semibold text-[15px] hover:underline cursor-pointer">{post.user}</span>
            <span className="text-xs text-gray-500">{post.timestamp} • 🌎</span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="px-4 pb-3 text-[15px]">
        {post.content}
      </div>

      {post.image && (
        <div className="max-h-[600px] overflow-hidden bg-gray-50 border-y border-gray-50">
          <img src={post.image} className="w-full object-contain" />
        </div>
      )}

      <div className="px-4 py-2.5 flex items-center justify-between text-gray-500 text-[15px]">
        <div className="flex items-center gap-1">
          <div className="bg-blue-500 p-1 rounded-full">
            <ThumbsUp className="w-3 h-3 text-white fill-white" />
          </div>
          <span>{likesCount}</span>
        </div>
        <div className="flex gap-3">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      <div className="px-1 py-1 border-t border-gray-100 flex">
        <PostActionBtn
          icon={ThumbsUp}
          label="Like"
          active={isLiked}
          onClick={toggleLike}
        />
        <PostActionBtn icon={MessageSquare} label="Comment" />
        <PostActionBtn icon={Share2} label="Share" />
      </div>
    </div>
  );
}

function PostActionBtn({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-sm ${
        active ? 'text-blue-600' : 'text-gray-500'
      }`}
    >
      <Icon className={`w-5 h-5 ${active ? 'fill-blue-600' : ''}`} />
      <span>{label}</span>
    </button>
  );
}

function Contact({ name, avatar, online }) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-xl cursor-pointer relative">
      <div className="relative">
        <img src={avatar} className="w-9 h-9 rounded-full" />
        {online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        )}
      </div>
      <span className="font-medium text-[15px]">{name}</span>
    </div>
  );
}

export default Facebook;
