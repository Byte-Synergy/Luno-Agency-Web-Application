import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Target, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    clients: 500,
    awards: 50,
    growth: 200,
    success: 98,
  });

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Manage Services', path: '/admin/services', icon: Settings },
    { name: 'Manage Pricing', path: '/admin/pricing', icon: TrendingUp },
    { name: 'Manage Portfolio', path: '/admin/portfolio', icon: Award },
    { name: 'Manage Blog', path: '/admin/blog', icon: Target },
    { name: 'Manage Requests', path: '/admin/requests', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-zinc-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center text-zinc-600 hover:text-zinc-900"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { icon: Users, value: stats.clients, label: 'Clients' },
            { icon: Award, value: stats.awards, label: 'Awards' },
            { icon: TrendingUp, value: `${stats.growth}%`, label: 'Growth' },
            { icon: Target, value: `${stats.success}%`, label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200">
              <div className="flex items-center">
                <stat.icon className="w-8 h-8 text-rose-600 mr-4" />
                <div>
                  <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                  <div className="text-zinc-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="bg-white p-6 rounded-lg border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center">
                <item.icon className="w-8 h-8 text-rose-600 mr-4" />
                <span className="text-lg font-semibold text-zinc-900">{item.name}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;