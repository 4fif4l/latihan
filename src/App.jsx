import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminDataGuru from './pages/admin/DataGuru';
import AdminManajemenNilai from './pages/admin/ManajemenNilai';
import AdminDataKepalaSekolah from './pages/admin/DataKepalaSekolah';
import AdminUpdateDataSekolah from './pages/admin/UpdateDataSekolah';
import AdminProfilSekolah from './pages/admin/ProfilSekolah';

// Kepala Sekolah Pages
import KepsekDashboard from './pages/kepsek/Dashboard';
import KepsekGrafikAbsensi from './pages/kepsek/GrafikAbsensi';
import KepsekHasilNilai from './pages/kepsek/HasilNilai';
import KepsekKlasifikasi from './pages/kepsek/Klasifikasi';
import KepsekGuruTerbaik from './pages/kepsek/GuruTerbaik';

// Guru Pages
import GuruDashboard from './pages/guru/Dashboard';
import GuruAbsensi from './pages/guru/Absensi';
import GuruInputPedagogik from './pages/guru/InputPedagogik';
import GuruDaftarWajah from './pages/guru/DaftarWajah';
import GuruBuktiMengajar from './pages/guru/BuktiMengajar';
import GuruInputKompetensi from './pages/guru/InputKompetensi';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/data-guru" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDataGuru />
            </ProtectedRoute>
          } />
          <Route path="/admin/manajemen-nilai" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminManajemenNilai />
            </ProtectedRoute>
          } />
          <Route path="/admin/data-kepala-sekolah" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDataKepalaSekolah />
            </ProtectedRoute>
          } />
          <Route path="/admin/update-data-sekolah" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminUpdateDataSekolah />
            </ProtectedRoute>
          } />
          <Route path="/admin/profil-sekolah" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminProfilSekolah />
            </ProtectedRoute>
          } />

          {/* Kepala Sekolah Routes */}
          <Route path="/kepsek/dashboard" element={
            <ProtectedRoute allowedRoles={['kepsek']}>
              <KepsekDashboard />
            </ProtectedRoute>
          } />
          <Route path="/kepsek/grafik-absensi" element={
            <ProtectedRoute allowedRoles={['kepsek']}>
              <KepsekGrafikAbsensi />
            </ProtectedRoute>
          } />
          <Route path="/kepsek/hasil-nilai" element={
            <ProtectedRoute allowedRoles={['kepsek']}>
              <KepsekHasilNilai />
            </ProtectedRoute>
          } />
          <Route path="/kepsek/klasifikasi" element={
            <ProtectedRoute allowedRoles={['kepsek']}>
              <KepsekKlasifikasi />
            </ProtectedRoute>
          } />
          <Route path="/kepsek/guru-terbaik" element={
            <ProtectedRoute allowedRoles={['kepsek']}>
              <KepsekGuruTerbaik />
            </ProtectedRoute>
          } />

          {/* Guru Routes */}
          <Route path="/guru/dashboard" element={
            <ProtectedRoute allowedRoles={['guru']}>
              <GuruDashboard />
            </ProtectedRoute>
          } />
          <Route path="/guru/absensi" element={
            <ProtectedRoute allowedRoles={['guru']}>
              <GuruAbsensi />
            </ProtectedRoute>
          } />
          <Route path="/guru/input-pedagogik" element={
            <ProtectedRoute allowedRoles={['guru']}>
              <GuruInputPedagogik />
            </ProtectedRoute>
          } />
          <Route path="/guru/daftar-wajah" element={
            <ProtectedRoute allowedRoles={['guru']}>
              <GuruDaftarWajah />
            </ProtectedRoute>
          } />
          <Route path="/guru/bukti-mengajar" element={
            <ProtectedRoute allowedRoles={['guru']}>
              <GuruBuktiMengajar />
            </ProtectedRoute>
          } />
          <Route path="/guru/input-kompetensi" element={
            <ProtectedRoute allowedRoles={['guru']}>
              <GuruInputKompetensi />
            </ProtectedRoute>
          } />

          {/* Unauthorized Route */}
          <Route path="/unauthorized" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="card text-center">
                <h1 className="text-3xl font-bold text-danger mb-4">Akses Ditolak</h1>
                <p className="text-gray-600 mb-4">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
                <button onClick={() => window.history.back()} className="btn-primary">
                  Kembali
                </button>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
