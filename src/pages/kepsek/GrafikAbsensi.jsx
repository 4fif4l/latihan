import React from 'react';
import Sidebar from '../../components/Sidebar';

const GrafikAbsensi = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="kepsek" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Grafik Absensi</h1>
        <p className="text-gray-600 mb-6">Monitoring grafik absensi guru</p>
        <div className="card">
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Grafik absensi akan ditampilkan di sini</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrafikAbsensi;
