import React from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { Users, BookOpen, Award, TrendingUp, School } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { icon: Users, label: 'Total Guru', value: '24', color: 'bg-blue-500' },
    { icon: BookOpen, label: 'Mata Pelajaran', value: '18', color: 'bg-green-500' },
    { icon: Award, label: 'Penilaian Bulan Ini', value: '156', color: 'bg-purple-500' },
    { icon: TrendingUp, label: 'Rata-rata Kinerja', value: '87.5%', color: 'bg-orange-500' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Admin</h1>
          <p className="text-gray-600">Selamat datang, {user?.name || 'Administrator'}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-full`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* School Info Card */}
        <div className="card mb-8">
          <div className="flex items-center gap-3 mb-4">
            <School className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">Informasi Sekolah</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Nama Sekolah</p>
              <p className="font-semibold text-gray-800">SMP Islam Daarul Qolam</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">NPSN</p>
              <p className="font-semibold text-gray-800">20401234</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Alamat</p>
              <p className="font-semibold text-gray-800">Jl. Pendidikan No. 123, Jakarta</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Telepon</p>
              <p className="font-semibold text-gray-800">(021) 1234-5678</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Data guru diperbarui</p>
                    <p className="text-sm text-gray-500">{index + 1} jam yang lalu</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Admin</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
