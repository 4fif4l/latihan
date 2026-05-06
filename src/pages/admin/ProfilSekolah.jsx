import React from 'react';
import Sidebar from '../../components/Sidebar';

const ProfilSekolah = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Profil Sekolah</h1>
        <p className="text-gray-600 mb-6">Update profil sekolah untuk halaman utama</p>
        <div className="card">
          <p className="text-gray-600">Form update profil sekolah</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilSekolah;
