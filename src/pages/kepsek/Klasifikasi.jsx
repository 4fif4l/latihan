import React from 'react';
import Sidebar from '../../components/Sidebar';

const Klasifikasi = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="kepsek" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Klasifikasi Guru</h1>
        <p className="text-gray-600 mb-6">Klasifikasi: Rajin, Sedang, Perlu Pembinaan</p>
        <div className="card">
          <p className="text-gray-600">Tabel klasifikasi guru berdasarkan K-Means</p>
        </div>
      </div>
    </div>
  );
};

export default Klasifikasi;
