import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, BookOpen, School, UserCog, Settings, 
  LogOut, BarChart3, FileText, Award, Star, ClipboardCheck,
  Camera, Upload, FileUp, User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getMenuItems = () => {
    switch(role) {
      case 'admin':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
          { icon: Users, label: 'Data Guru', path: '/admin/data-guru' },
          { icon: BookOpen, label: 'Manajemen Nilai', path: '/admin/manajemen-nilai' },
          { icon: UserCog, label: 'Data Kepala Sekolah', path: '/admin/data-kepala-sekolah' },
          { icon: Settings, label: 'Update Data Sekolah', path: '/admin/update-data-sekolah' },
          { icon: School, label: 'Profil Sekolah', path: '/admin/profil-sekolah' },
        ];
      case 'kepsek':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/kepsek/dashboard' },
          { icon: BarChart3, label: 'Grafik Absensi', path: '/kepsek/grafik-absensi' },
          { icon: FileText, label: 'Hasil Nilai Guru', path: '/kepsek/hasil-nilai' },
          { icon: Award, label: 'Klasifikasi Guru', path: '/kepsek/klasifikasi' },
          { icon: Star, label: 'Guru Terbaik', path: '/kepsek/guru-terbaik' },
        ];
      case 'guru':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/guru/dashboard' },
          { icon: ClipboardCheck, label: 'Absensi', path: '/guru/absensi' },
          { icon: FileUp, label: 'Input Pedagogik', path: '/guru/input-pedagogik' },
          { icon: Camera, label: 'Daftarkan Wajah', path: '/guru/daftar-wajah' },
          { icon: Upload, label: 'Bukti Mengajar', path: '/guru/bukti-mengajar' },
          { icon: Award, label: 'Input Kompetensi', path: '/guru/input-kompetensi' },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 min-h-screen text-white">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <School className="h-8 w-8 text-cyan-400" />
          <div>
            <h2 className="font-bold text-lg">SMP Islam</h2>
            <p className="text-xs text-white/70">Daarul Qolam</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-sm">{user?.name || 'User'}</p>
            <p className="text-xs text-white/70 capitalize">{role}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={index}
              to={item.path}
              className={isActive ? 'sidebar-link-active' : 'sidebar-link'}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="sidebar-link text-red-300 hover:text-red-200 hover:bg-red-500/20 w-full"
        >
          <LogOut className="h-5 w-5" />
          <span>Keluar</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
