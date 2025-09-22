import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', content: '', author: '', date: '', category: '', image: '', readTime: '' });

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) navigate('/admin/login');
    const stored = localStorage.getItem('blog');
    if (stored) setPosts(JSON.parse(stored));
  }, [navigate]);

  const savePosts = (newPosts) => {
    setPosts(newPosts);
    localStorage.setItem('blog', JSON.stringify(newPosts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...form, id: Date.now() };
    if (editing) {
      savePosts(posts.map(p => p.id === editing.id ? { ...newPost, id: editing.id } : p));
    } else {
      savePosts([...posts, newPost]);
    }
    setForm({ title: '', content: '', author: '', date: '', category: '', image: '', readTime: '' });
    setEditing(null);
  };

  const handleDelete = (id) => {
    savePosts(posts.filter(p => p.id !== id));
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
            <h1 className="text-xl font-bold text-zinc-900">Manage Blog Posts</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-zinc-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">{editing ? 'Edit' : 'Add'} Post</h2>
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
              placeholder="Content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
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
            <input
              type="text"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Read Time"
              value={form.readTime}
              onChange={(e) => setForm({ ...form, readTime: e.target.value })}
              className="w-full p-3 border border-zinc-300 rounded-lg"
              required
            />
            <button type="submit" className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
              {editing ? 'Update' : 'Add'} Post
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg border border-zinc-200 p-6">
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-zinc-600 mb-4">{post.content.substring(0, 100)}...</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditing(post);
                    setForm(post);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
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

export default AdminBlog;