import React from 'react';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Download,
  BarChart3,
  Settings,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Mail,
  Calendar,
  LogOut
} from 'lucide-react';
import { adminStats } from '../mockData';

function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">AdminPro</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <SidebarLink icon={LayoutDashboard} label="Dashboard" active />
          <SidebarLink icon={Users} label="Customers" />
          <SidebarLink icon={ShoppingCart} label="Orders" />
          <SidebarLink icon={BarChart3} label="Analytics" />
          <SidebarLink icon={Mail} label="Messages" badge="4" />
          <SidebarLink icon={Calendar} label="Schedule" />
          <div className="pt-4 pb-2 px-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">System</div>
          <SidebarLink icon={Settings} label="Settings" />
          <SidebarLink icon={LogOut} label="Logout" color="text-red-500 hover:bg-red-50" />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-indigo-50 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
              J
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold truncate">Jules Engineer</span>
              <span className="text-xs text-indigo-600 truncate">Super Admin</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="h-20 px-8 flex items-center justify-between bg-white border-b border-gray-100 shrink-0 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2 outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-[1px] h-8 bg-gray-200" />
            <div className="flex items-center gap-3 cursor-pointer group">
              <img src="https://i.pravatar.cc/150?u=me" className="w-10 h-10 rounded-xl" alt="Avatar" />
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-semibold group-hover:text-indigo-600 transition-colors">Jules</span>
                <span className="text-xs text-gray-500">Engineer</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Page Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
              <p className="text-gray-500">Welcome back, here's what's happening with your store today.</p>
            </div>
            <button
              onClick={() => alert('All source code for the 8 replicas is available in the repository. In a production environment, this would generate a .zip archive.')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all active:scale-95 shrink-0"
            >
              <Download className="w-5 h-5" />
              Download All Codes
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminStats.overview.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>

          {/* Table and Chart Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-lg">Recent Orders</h3>
                <button className="text-indigo-600 text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {adminStats.recentOrders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group text-sm">
                        <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-4">{order.customer}</td>
                        <td className="px-6 py-4 font-semibold">{order.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                            order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{order.date}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 hover:bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="w-5 h-5 text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Progress / Goals */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
              <h3 className="font-bold text-lg mb-4">Monthly Goal</h3>
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#4f46e5" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="70" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">75%</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Achieved</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <ProgressItem label="Sales" value="82%" color="bg-indigo-600" />
                <ProgressItem label="Leads" value="45%" color="bg-blue-500" />
                <ProgressItem label="Returning" value="62%" color="bg-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon: Icon, label, active = false, badge, color = 'text-gray-500 hover:bg-gray-50 hover:text-indigo-600' }) {
  return (
    <div className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all group ${
      active ? 'bg-indigo-50 text-indigo-700 font-semibold' : color
    }`}>
      <div className="flex items-center gap-3">
        <Icon className={`w-5 h-5 ${active ? 'text-indigo-600' : 'group-hover:text-indigo-600 transition-colors'}`} />
        <span className="text-[15px]">{label}</span>
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

function StatCard({ stat }) {
  const isPositive = stat.trend.startsWith('+');
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${
          isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {stat.trend}
        </div>
      </div>
      <div className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</div>
      <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
        <div className={`h-full w-2/3 ${
          stat.color === 'blue' ? 'bg-blue-500' :
          stat.color === 'green' ? 'bg-green-500' :
          stat.color === 'purple' ? 'bg-purple-500' :
          'bg-orange-500'
        }`} />
      </div>
    </div>
  );
}

function ProgressItem({ label, value, color }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-gray-500">{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: value }} />
      </div>
    </div>
  );
}

export default Admin;
