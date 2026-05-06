import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { School, Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !email) {
      setError('Username dan email harus diisi');
      setLoading(false);
      return;
    }

    const result = await forgotPassword(username, email);
    
    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="card bg-white/10 backdrop-blur-md border border-white/20 text-center">
            <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Permintaan Terkirim!</h2>
            <p className="text-white/80 mb-6">
              Instruksi untuk reset password telah dikirim ke email Anda. 
              Silakan periksa kotak masuk Anda.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="btn-primary bg-white text-blue-900 hover:bg-white/90 w-full"
            >
              Kembali ke Login
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold text-white mb-2">Lupa Password</h1>
          <p className="text-white/80">Masukkan username dan email untuk reset password</p>
        </div>

        {/* Forgot Password Card */}
        <div className="card bg-white/10 backdrop-blur-md border border-white/20">
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
                disabled={loading || success}
              />
            </div>

            <div>
              <label className="block text-white/90 mb-2 font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field bg-white/20 border-white/30 text-white placeholder-white/50 pl-10"
                  placeholder="Masukkan email"
                  disabled={loading || success}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full btn-primary bg-white text-blue-900 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed py-3"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900"></div>
                  Memproses...
                </span>
              ) : (
                'Kirim Instruksi Reset'
              )}
            </button>
          </form>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <Link 
            to="/login" 
            className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
