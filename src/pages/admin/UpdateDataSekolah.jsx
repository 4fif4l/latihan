import React from 'react';
import Sidebar from '../../components/Sidebar';

const UpdateDataSekolah = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Update Data Sekolah</h1>
        <p className="text-gray-600 mb-6">Perbarui data sekolah</p>
        <div className="card">
          <p className="text-gray-600">Form update data sekolah</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateDataSekolah;
