import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, ArrowLeft, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) navigate('/admin/login');
    const stored = localStorage.getItem('clientRequests');
    if (stored) setRequests(JSON.parse(stored));
  }, [navigate]);

  const handleDelete = (id) => {
    const updated = requests.filter(r => r.id !== id);
    setRequests(updated);
    localStorage.setItem('clientRequests', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/admin/dashboard" className="flex items-center text-zinc-600 hover:text-zinc-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-xl font-bold text-zinc-900">Manage Client Requests</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{request.firstName} {request.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(request.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminRequests;