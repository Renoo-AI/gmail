import React, { useState } from 'react';
import {
  Github,
  Search,
  Plus,
  Menu,
  BookOpen,
  Box,
  Star,
  GitFork,
  MapPin,
  Link as LinkIcon,
  Twitter,
  Users,
  Circle,
  ChevronDown,
  Bell,
  Inbox,
  Layout
} from 'lucide-react';
import { githubData } from '../mockData';

function GitHub() {
  const [activeTab, setActiveTab] = useState('repositories');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepos = githubData.repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="bg-[#f6f8fa] border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Menu className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-900" />
          <Github className="w-8 h-8 text-gray-900 cursor-pointer" />
          <div className="flex items-center gap-2 font-semibold text-sm">
            <span>{githubData.user.username}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Dashboard</span>
          </div>

          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 ml-4 flex-1 max-w-sm">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-transparent border-none outline-none text-sm w-full py-0.5"
            />
            <span className="text-[10px] border border-gray-300 rounded px-1 text-gray-400 font-mono">/</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Inbox className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <GitFork className="w-5 h-5 text-gray-600" />
          </button>
          <img src={githubData.user.avatar} className="w-8 h-8 rounded-full ml-2 border border-gray-200" alt="Avatar" />
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">

        {/* Left Sidebar: Profile */}
        <aside className="w-full md:w-1/4 space-y-4">
          <div className="space-y-4">
            <img src={githubData.user.avatar} className="w-full max-w-[280px] rounded-full border border-gray-200" alt="Profile" />
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{githubData.user.name}</h1>
              <h2 className="text-xl text-gray-500 font-light">{githubData.user.username}</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {githubData.user.bio}
            </p>
            <button className="w-full py-1.5 bg-[#f6f8fa] border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors">
              Edit profile
            </button>

            <div className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
              <Users className="w-4 h-4" />
              <span className="font-bold text-gray-900">{githubData.user.followers}</span>
              <span>followers</span>
              <span className="mx-1">·</span>
              <span className="font-bold text-gray-900">{githubData.user.following}</span>
              <span>following</span>
            </div>

            <div className="space-y-1 pt-2">
              <ProfileDetail icon={MapPin} text={githubData.user.location} />
              <ProfileDetail icon={LinkIcon} text={githubData.user.website} color="text-blue-600 hover:underline" />
              <ProfileDetail icon={Twitter} text={githubData.user.twitter} />
            </div>
          </div>
        </aside>

        {/* Right Content: Tabs & Repos */}
        <main className="flex-1 min-w-0">
          {/* Navigation Tabs */}
          <nav className="flex items-center border-b border-gray-200 mb-6 sticky top-0 bg-white z-10">
            <TabItem
              icon={BookOpen}
              label="Overview"
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            />
            <TabItem
              icon={Box}
              label="Repositories"
              count={githubData.repositories.length}
              active={activeTab === 'repositories'}
              onClick={() => setActiveTab('repositories')}
            />
            <TabItem
              icon={Layout}
              label="Projects"
              active={activeTab === 'projects'}
              onClick={() => setActiveTab('projects')}
            />
            <TabItem
              icon={Star}
              label="Stars"
              count="124"
              active={activeTab === 'stars'}
              onClick={() => setActiveTab('stars')}
            />
          </nav>

          {/* Tab Content */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-1 flex items-center focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                <input
                  type="text"
                  placeholder="Find a repository..."
                  className="bg-transparent border-none outline-none text-sm w-full py-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-[#f6f8fa] border border-gray-300 rounded-md text-sm font-semibold flex items-center gap-1 hover:bg-gray-100">
                  Type <ChevronDown className="w-3 h-3" />
                </button>
                <button className="px-3 py-1.5 bg-[#f6f8fa] border border-gray-300 rounded-md text-sm font-semibold flex items-center gap-1 hover:bg-gray-100">
                  Language <ChevronDown className="w-3 h-3" />
                </button>
                <button className="px-3 py-1.5 bg-[#f6f8fa] border border-gray-300 rounded-md text-sm font-semibold flex items-center gap-1 hover:bg-gray-100">
                  Sort <ChevronDown className="w-3 h-3" />
                </button>
                <button className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-semibold flex items-center gap-1 hover:bg-green-700 transition-colors">
                  <Box className="w-4 h-4" /> New
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {filteredRepos.length > 0 ? (
                filteredRepos.map((repo, i) => (
                  <RepoItem key={i} repo={repo} />
                ))
              ) : (
                <div className="py-20 text-center text-gray-500 font-semibold">
                  {githubData.user.username} doesn’t have any repositories that match.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ProfileDetail({ icon: Icon, text, color = "text-gray-700" }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${color} cursor-pointer`}>
      <Icon className="w-4 h-4 text-gray-400" />
      <span>{text}</span>
    </div>
  );
}

function TabItem({ icon: Icon, label, count, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 cursor-pointer text-sm transition-all border-b-2 ${
        active
          ? 'border-[#fd8c73] text-gray-900 font-semibold'
          : 'border-transparent text-gray-600 hover:border-gray-300'
      }`}
    >
      <Icon className="w-4 h-4 text-gray-400" />
      <span>{label}</span>
      {count && (
        <span className="bg-gray-100 text-gray-600 text-[11px] px-1.5 py-0.5 rounded-full font-medium">
          {count}
        </span>
      )}
    </div>
  );
}

function RepoItem({ repo }) {
  const [isStarred, setIsStarred] = useState(false);
  const [starsCount, setStarsCount] = useState(repo.stars);

  const toggleStar = () => {
    setIsStarred(!isStarred);
    setStarsCount(prev => isStarred ? prev - 1 : prev + 1);
  };

  return (
    <div className="py-6 space-y-2">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
              {repo.name}
            </h3>
            <span className="text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-2 py-0.5">
              {repo.visibility}
            </span>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl">
            {repo.description}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleStar}
            className={`flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-xs font-semibold transition-colors ${
              isStarred ? 'bg-yellow-50 hover:bg-yellow-100 border-yellow-300' : 'bg-[#f6f8fa] hover:bg-gray-100'
            }`}
          >
            <Star className={`w-4 h-4 ${isStarred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500'}`} />
            {isStarred ? 'Starred' : 'Star'}
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Circle className="w-3 h-3 text-yellow-500 fill-current" />
          <span>{repo.language}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <Star className={`w-4 h-4 ${isStarred ? 'text-yellow-500 fill-yellow-500' : ''}`} />
          <span>{starsCount}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <GitFork className="w-4 h-4" />
          <span>{repo.forks}</span>
        </div>
        <span>Updated {repo.updated}</span>
      </div>
    </div>
  );
}

export default GitHub;
