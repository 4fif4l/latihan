import React from 'react';
import Sidebar from '../../components/Sidebar';

const DataKepalaSekolah = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Kepala Sekolah</h1>
        <p className="text-gray-600 mb-6">Kelola data kepala sekolah</p>
        <div className="card">
          <p className="text-gray-600">Halaman CRUD Kepala Sekolah</p>
        </div>
      </div>
    </div>
  );
};

export default DataKepalaSekolah;
