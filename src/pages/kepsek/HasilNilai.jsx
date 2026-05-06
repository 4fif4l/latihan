import React from 'react';
import Sidebar from '../../components/Sidebar';

const HasilNilai = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="kepsek" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Hasil Nilai Guru</h1>
        <p className="text-gray-600 mb-6">Input nilai Sosial dan Profesional, hitung hasil, export Excel/PDF</p>
        <div className="card">
          <p className="text-gray-600">Form input nilai dan tabel hasil dengan tombol export</p>
        </div>
      </div>
    </div>
  );
};

export default HasilNilai;
