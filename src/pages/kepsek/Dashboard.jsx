import React from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="kepsek" />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Kepala Sekolah</h1>
          <p className="text-gray-600">Selamat datang, {user?.name || 'Kepala Sekolah'}</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Guru</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Rata-rata Kinerja</p>
                <p className="text-3xl font-bold">87.5%</p>
              </div>
              <TrendingUp className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Guru Rajin</p>
                <p className="text-3xl font-bold">18</p>
              </div>
              <Award className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Kehadiran Hari Ini</p>
                <p className="text-3xl font-bold">92%</p>
              </div>
              <BarChart3 className="h-12 w-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Grafik Nilai Kriteria</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart akan ditampilkan di sini (terintegrasi dengan semua nilai kriteria)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
