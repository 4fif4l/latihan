import React from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, Calculator, Save } from 'lucide-react';

const ManajemenNilai = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Manajemen Nilai</h1>
          <p className="text-gray-600">Kelola nilai guru dengan metode SAW dan K-Means Clustering</p>
        </div>

        <div className="grid gap-6">
          {/* Input Nilai Section */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-gray-800">Input Nilai Guru</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nama Guru</label>
                  <select className="input-field">
                    <option>Pilih Guru</option>
                    <option>Ahmad Fauzi - Matematika</option>
                    <option>Siti Nurhaliza - Bahasa Indonesia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mata Pelajaran</label>
                  <input type="text" className="input-field" placeholder="Otomatis terisi" readOnly />
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-700 mb-4">Kriteria Penilaian</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Pedagogik (RPP/Modul Ajar)</label>
                    <input type="number" min="0" max="100" className="input-field" placeholder="0-100" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Sosial</label>
                    <input type="number" min="0" max="100" className="input-field" placeholder="0-100" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Profesional</label>
                    <input type="number" min="0" max="100" className="input-field" placeholder="0-100" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Kompetensi</label>
                    <input type="number" min="0" max="100" className="input-field" placeholder="0-100" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Kehadiran (%)</label>
                    <input type="number" min="0" max="100" className="input-field" placeholder="0-100" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="btn-primary flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Hitung dengan SAW
                </button>
                <button className="btn-success flex items-center gap-2">
                  <Save className="h-5 w-5" />
                  Simpan Nilai
                </button>
              </div>
            </div>
          </div>

          {/* Hasil Perhitungan Section */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Hasil Perhitungan SAW</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guru</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pedagogik</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sosial</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profesional</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kompetensi</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kehadiran</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Klasifikasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Ahmad Fauzi</td>
                    <td className="px-6 py-4">85</td>
                    <td className="px-6 py-4">90</td>
                    <td className="px-6 py-4">88</td>
                    <td className="px-6 py-4">92</td>
                    <td className="px-6 py-4">95%</td>
                    <td className="px-6 py-4 font-semibold">89.5</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Rajin</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManajemenNilai;
