import React from 'react';
import Sidebar from '../../components/Sidebar';

const GuruTerbaik = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="kepsek" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Guru Terbaik</h1>
        <p className="text-gray-600 mb-6">Daftar guru terbaik berdasarkan hasil perhitungan</p>
        <div className="card">
          <p className="text-gray-600">Ranking guru terbaik akan ditampilkan di sini</p>
        </div>
      </div>
    </div>
  );
};

export default GuruTerbaik;
