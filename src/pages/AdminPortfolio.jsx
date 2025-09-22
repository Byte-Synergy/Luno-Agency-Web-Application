import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminPortfolio = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', category: '', description: '', image: '', results: '', gallery: '', video: '', link: '' });

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) navigate('/admin/login');
    const stored = localStorage.getItem('portfolio');
    if (stored) setProjects(JSON.parse(stored));
  }, [navigate]);

  const saveProjects = (newProjects) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio', JSON.stringify(newProjects));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { ...form, id: Date.now(), results: form.results.split(','), gallery: form.gallery.split(',') };
    if (editing) {
      saveProjects(projects.map(p => p.id === editing.id ? { ...newProject, id: editing.id } : p));
    } else {
      saveProjects([...projects, newProject]);
    }
    setForm({ title: '', category: '', description: '', image: '', results: '', gallery: '', video: '', link: '' });
    setEditing(null);
  };

  const handleDelete = (id) => {
    saveProjects(projects.filter(p => p.id !== id));
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
            <h1 className="text-xl font-bold text-zinc-900">Manage Portfolio</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-zinc-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">{editing ? 'Edit' : 'Add'} Project</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
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
              placeholder="Cover Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Results (comma-separated)"
              value={form.results}
              onChange={(e) => setForm({ ...form, results: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Gallery Images (comma-separated URLs)"
              value={form.gallery}
              onChange={(e) => setForm({ ...form, gallery: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Video URL"
              value={form.video}
              onChange={(e) => setForm({ ...form, video: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
            <button type="submit" className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
              {editing ? 'Update' : 'Add'} Project
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg border border-zinc-200 p-6">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-600 mb-4">{project.description}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditing(project);
                    setForm({ ...project, results: project.results.join(','), gallery: project.gallery.join(',') });
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
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

export default AdminPortfolio;