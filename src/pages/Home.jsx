import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Youtube,
  Facebook,
  MessageSquare,
  Music,
  LayoutDashboard
} from 'lucide-react';

const apps = [
  { name: 'Gmail', path: '/gmail', icon: Mail, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'YouTube', path: '/youtube', icon: Youtube, color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'Facebook', path: '/facebook', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'WhatsApp', path: '/whatsapp', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-50' },
  { name: 'YouTube Music', path: '/musicyoutube', icon: Music, color: 'text-red-500', bg: 'bg-gray-900' },
  { name: 'Admin Dashboard', path: '/admin', icon: LayoutDashboard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Multi-App Replica Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {apps.map((app) => (
          <Link
            key={app.name}
            to={app.path}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className={`p-4 rounded-xl ${app.bg} mb-4 group-hover:scale-110 transition-transform`}>
              <app.icon className={`w-12 h-12 ${app.color}`} />
            </div>
            <span className="text-xl font-semibold text-gray-800">{app.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
