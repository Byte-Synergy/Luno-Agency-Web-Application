import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', features: '' });

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) navigate('/admin/login');
    const stored = localStorage.getItem('services');
    if (stored) setServices(JSON.parse(stored));
  }, [navigate]);

  const saveServices = (newServices) => {
    setServices(newServices);
    localStorage.setItem('services', JSON.stringify(newServices));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newService = { ...form, id: Date.now(), features: form.features.split(',') };
    if (editing) {
      saveServices(services.map(s => s.id === editing.id ? { ...newService, id: editing.id } : s));
    } else {
      saveServices([...services, newService]);
    }
    setForm({ title: '', description: '', features: '' });
    setEditing(null);
  };

  const handleDelete = (id) => {
    saveServices(services.filter(s => s.id !== id));
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
            <h1 className="text-xl font-bold text-zinc-900">Manage Services</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-zinc-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">{editing ? 'Edit' : 'Add'} Service</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Features (comma-separated)"
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <button type="submit" className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
              {editing ? 'Update' : 'Add'} Service
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg border border-zinc-200 p-6">
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-zinc-600 mb-4">{service.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditing(service);
                    setForm({ title: service.title, description: service.description, features: service.features.join(',') });
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminServices;