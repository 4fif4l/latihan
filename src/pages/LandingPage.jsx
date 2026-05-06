import React from 'react';
import { Link } from 'react-router-dom';
import { School, Users, Award, BookOpen } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <School className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">SMP Islam Daarul Qolam</span>
            </div>
            <Link to="/login" className="btn-primary bg-white/20 hover:bg-white/30">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sistem Penilaian Kinerja Guru
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Platform terintegrasi untuk mengelola dan menilai kinerja guru dengan metode SAW dan K-Means Clustering
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login" className="btn-primary bg-white text-blue-900 hover:bg-white/90">
              Masuk ke Sistem
            </Link>
            <a href="#profil" className="btn-secondary bg-transparent border-2 border-white hover:bg-white/20">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>

      {/* Profil Sekolah Section */}
      <div id="profil" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card bg-white/10 backdrop-blur-md border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Profil Sekolah</h2>
            <div className="w-24 h-1 bg-white/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <School className="h-8 w-8 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Nama Sekolah</h3>
                  <p className="text-white/80">SMP Islam Daarul Qolam</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <BookOpen className="h-8 w-8 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visi</h3>
                  <p className="text-white/80">
                    Menjadi sekolah unggulan yang menghasilkan generasi islami, berakhlak mulia, 
                    berprestasi, dan siap menghadapi tantangan global.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Misi</h3>
                  <ul className="text-white/80 space-y-2 list-disc list-inside">
                    <li>Menyelenggarakan pendidikan berkualitas berbasis Islam</li>
                    <li>Mengembangkan potensi akademik dan non-akademik siswa</li>
                    <li>Membentuk karakter islami dan berakhlak mulia</li>
                    <li>Meningkatkan kompetensi guru secara berkelanjutan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Fitur Unggulan</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sistem kami dilengkapi dengan berbagai fitur untuk mendukung penilaian kinerja guru yang komprehensif
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300">
            <Users className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Manajemen Data Guru</h3>
            <p className="text-white/70">
              Kelola data guru dengan lengkap termasuk profil, mata pelajaran, dan status kepegawaian
            </p>
          </div>
          
          <div className="card bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300">
            <Award className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Penilaian SAW & K-Means</h3>
            <p className="text-white/70">
              Metode Simple Additive Weighting dan K-Means Clustering untuk penilaian yang objektif
            </p>
          </div>
          
          <div className="card bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300">
            <BookOpen className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Absensi Face Recognition</h3>
            <p className="text-white/70">
              Sistem absensi modern menggunakan teknologi pengenalan wajah untuk akurasi tinggi
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white/70">
            <p>&copy; 2024 SMP Islam Daarul Qolam. All rights reserved.</p>
            <p className="mt-2">Sistem Penilaian Kinerja Guru</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
