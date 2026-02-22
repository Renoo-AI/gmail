import React, { useState } from 'react';
import {
  Search,
  Home,
  Compass,
  Library,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  ThumbsUp,
  ThumbsDown,
  MoreVertical,
  Cast,
  Maximize2
} from 'lucide-react';
import { musicTracks } from '../mockData';

function YouTubeMusic() {
  const [currentTrack, setCurrentTrack] = useState(musicTracks[0]);

  return (
    <div className="h-screen bg-black text-white font-sans overflow-hidden flex flex-col">
      {/* Header */}
      <header className="h-16 px-4 flex items-center justify-between shrink-0 bg-black/95 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-1 rounded-full">
            <Play className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Music</span>
        </div>

        <nav className="flex items-center gap-8 text-lg font-medium text-gray-400">
          <button className="text-white hover:text-white transition-colors">Home</button>
          <button className="hover:text-white transition-colors">Explore</button>
          <button className="hover:text-white transition-colors">Library</button>
          <button className="hover:text-white transition-colors flex items-center gap-2">
            <Search className="w-5 h-5" /> Search
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Cast className="w-6 h-6" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=me" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-10 py-8 space-y-12">
        {/* Listen Again */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-3xl font-bold">Listen again</h2>
            <button className="text-sm font-semibold text-gray-400 border border-gray-700 px-3 py-1 rounded-full hover:bg-white/10">
              More
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {musicTracks.map(track => (
              <TrackCard
                key={track.id}
                track={track}
                onClick={() => setCurrentTrack(track)}
                active={currentTrack.id === track.id}
              />
            ))}
          </div>
        </section>

        {/* Quick Picks */}
        <section>
          <div className="mb-6">
            <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Start radio from a song</span>
            <h2 className="text-3xl font-bold mt-1">Quick picks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            {musicTracks.concat(musicTracks).map((track, i) => (
              <TrackListItem
                key={`${track.id}-${i}`}
                track={track}
                onClick={() => setCurrentTrack(track)}
                active={currentTrack.id === track.id}
              />
            ))}
          </div>
        </section>

        {/* Similar To */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mt-1">Similar to {currentTrack.artist}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {musicTracks.slice().reverse().map(track => (
              <TrackCard
                key={`sim-${track.id}`}
                track={track}
                onClick={() => setCurrentTrack(track)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Player Bar */}
      <footer className="h-20 bg-[#1d1d1d] border-t border-white/10 px-4 flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-4 min-w-[300px]">
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white"><SkipBack className="w-5 h-5 fill-current" /></button>
            <button className="p-3 bg-white text-black rounded-full hover:scale-105 transition-transform">
              <Play className="w-6 h-6 fill-current" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white"><SkipForward className="w-5 h-5 fill-current" /></button>
          </div>
          <div className="text-sm font-medium text-gray-400">
            1:24 / {currentTrack.duration}
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-2xl px-10">
          <img src={currentTrack.cover} className="w-12 h-12 rounded object-cover shadow-lg" alt={currentTrack.title} />
          <div className="flex flex-col min-w-0">
            <span className="font-semibold truncate">{currentTrack.title}</span>
            <span className="text-sm text-gray-400 truncate">{currentTrack.artist} • {currentTrack.album}</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"><ThumbsDown className="w-5 h-5" /></button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"><ThumbsUp className="w-5 h-5" /></button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 min-w-[300px]">
          <button className="p-2 text-gray-400 hover:text-white"><Volume2 className="w-5 h-5" /></button>
          <button className="p-2 text-gray-400 hover:text-white"><Repeat className="w-5 h-5" /></button>
          <button className="p-2 text-gray-400 hover:text-white"><Shuffle className="w-5 h-5" /></button>
          <button className="p-2 text-gray-400 hover:text-white"><Maximize2 className="w-5 h-5" /></button>
        </div>
      </footer>

      {/* Progress Bar (at the top of footer) */}
      <div className="absolute bottom-20 left-0 right-0 h-[2px] bg-white/10">
        <div className="h-full bg-red-600 w-1/3 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

function TrackCard({ track, onClick, active }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-square rounded-md overflow-hidden mb-3">
        <img src={track.cover} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={track.title} />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-black/60 p-4 rounded-full backdrop-blur-sm border border-white/10">
            <Play className="w-8 h-8 fill-white" />
          </div>
        </div>
        {active && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="flex items-end gap-1 h-6">
              <div className="w-1 bg-white animate-[music-bar_1s_infinite_0.1s]" />
              <div className="w-1 bg-white animate-[music-bar_1s_infinite_0.3s]" />
              <div className="w-1 bg-white animate-[music-bar_1s_infinite_0.5s]" />
            </div>
          </div>
        )}
      </div>
      <h3 className="font-semibold leading-tight line-clamp-1 group-hover:underline">{track.title}</h3>
      <p className="text-sm text-gray-400 line-clamp-1">{track.artist}</p>
    </div>
  );
}

function TrackListItem({ track, onClick, active }) {
  return (
    <div
      className={`flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer group transition-colors ${
        active ? 'bg-white/10' : ''
      }`}
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded overflow-hidden shrink-0 relative">
        <img src={track.cover} className="w-full h-full object-cover" alt={track.title} />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <Play className="w-6 h-6 fill-white text-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium truncate">{track.title}</h4>
        <p className="text-sm text-gray-400 truncate">{track.artist}</p>
      </div>
      <div className="hidden group-hover:flex items-center gap-2">
        <button className="p-2 text-gray-400 hover:text-white"><ThumbsDown className="w-4 h-4" /></button>
        <button className="p-2 text-gray-400 hover:text-white"><ThumbsUp className="w-4 h-4" /></button>
        <button className="p-2 text-gray-400 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

export default YouTubeMusic;
