import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { School, LogIn, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !password) {
      setError('Username dan password harus diisi');
      setLoading(false);
      return;
    }

    const result = await login(username, password);
    
    if (result.success) {
      // Redirect based on role
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'kepsek') {
        navigate('/kepsek/dashboard');
      } else if (user.role === 'guru') {
        navigate('/guru/dashboard');
      }
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-md">
              <School className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SMP Islam Daarul Qolam</h1>
          <p className="text-white/80">Sistem Penilaian Kinerja Guru</p>
        </div>

        {/* Login Card */}
        <div className="card bg-white/10 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <LogIn className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-semibold text-white">Masuk</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-white/90 mb-2 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field bg-white/20 border-white/30 text-white placeholder-white/50"
                placeholder="Masukkan username"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-white/90 mb-2 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field bg-white/20 border-white/30 text-white placeholder-white/50 pr-12"
                  placeholder="Masukkan password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled={loading} />
                <span className="text-white/80 text-sm">Ingat saya</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Lupa Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary bg-white text-blue-900 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed py-3"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900"></div>
                  Memproses...
                </span>
              ) : (
                'Masuk'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/70 text-center text-sm">
              Belum punya akun? Hubungi administrator untuk membuat akun
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-white/70 hover:text-white transition duration-200">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
