import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminPricing = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', period: '/month', description: '', features: '', recommended: false });

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) navigate('/admin/login');
    const stored = localStorage.getItem('pricing');
    if (stored) setPlans(JSON.parse(stored));
  }, [navigate]);

  const savePlans = (newPlans) => {
    // Ensure only one recommended
    const hasRecommended = newPlans.some(p => p.recommended);
    if (!hasRecommended && newPlans.length > 0) {
      newPlans[0].recommended = true;
    }
    setPlans(newPlans);
    localStorage.setItem('pricing', JSON.stringify(newPlans));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = { ...form, id: Date.now(), features: form.features.split(',') };
    if (editing) {
      const updated = plans.map(p => p.id === editing.id ? { ...newPlan, id: editing.id } : p);
      savePlans(updated);
    } else {
      savePlans([...plans, newPlan]);
    }
    setForm({ name: '', price: '', period: '/month', description: '', features: '', recommended: false });
    setEditing(null);
  };

  const handleDelete = (id) => {
    savePlans(plans.filter(p => p.id !== id));
  };

  const toggleRecommended = (id) => {
    const updated = plans.map(p => ({ ...p, recommended: p.id === id }));
    savePlans(updated);
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
            <h1 className="text-xl font-bold text-zinc-900">Manage Pricing Plans</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-zinc-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">{editing ? 'Edit' : 'Add'} Plan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Period"
              value={form.period}
              onChange={(e) => setForm({ ...form, period: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
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
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={form.recommended}
                onChange={(e) => setForm({ ...form, recommended: e.target.checked })}
                className="mr-2"
              />
              Recommended Plan
            </label>
            <button type="submit" className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
              {editing ? 'Update' : 'Add'} Plan
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={`bg-white rounded-lg border p-6 ${plan.recommended ? 'border-rose-500' : 'border-zinc-200'}`}>
              {plan.recommended && <Star className="w-5 h-5 text-rose-600 mb-2" />}
              <h3 className="font-semibold mb-2">{plan.name}</h3>
              <p className="text-zinc-600 mb-4">{plan.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditing(plan);
                    setForm({ ...plan, features: plan.features.join(',') });
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(plan.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleRecommended(plan.id)}
                  className={`text-yellow-600 hover:text-yellow-800 ${plan.recommended ? 'opacity-50' : ''}`}
                >
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminPricing;