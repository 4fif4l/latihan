import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { Plus, Edit, Trash2, Search, RefreshCcw, UserCheck, UserX } from 'lucide-react';

const DataGuru = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingGuru, setEditingGuru] = useState(null);

  // Sample data - in production, this would come from API
  const [guruList, setGuruList] = useState([
    { id: 1, nama: 'Ahmad Fauzi', mapel: 'Matematika', status: 'Guru Tetap', jenisKelamin: 'Laki-laki', email: 'ahmad@school.com', noHp: '081234567890', pendidikan: 'S1 Pendidikan Matematika', alamat: 'Jakarta', wajahTerdaftar: true },
    { id: 2, nama: 'Siti Nurhaliza', mapel: 'Bahasa Indonesia', status: 'Guru Honor', jenisKelamin: 'Perempuan', email: 'siti@school.com', noHp: '081234567891', pendidikan: 'S1 Pendidikan Bahasa', alamat: 'Bandung', wajahTerdaftar: false },
    { id: 3, nama: 'Budi Santoso', mapel: 'IPA', status: 'Guru Tetap', jenisKelamin: 'Laki-laki', email: 'budi@school.com', noHp: '081234567892', pendidikan: 'S1 Biologi', alamat: 'Surabaya', wajahTerdaftar: true },
  ]);

  const [formData, setFormData] = useState({
    nama: '', mapel: '', status: 'Guru Tetap', jenisKelamin: 'Laki-laki',
    email: '', noHp: '', pendidikan: '', alamat: '', password: ''
  });

  const handleOpenModal = (guru = null) => {
    if (guru) {
      setEditingGuru(guru);
      setFormData(guru);
    } else {
      setEditingGuru(null);
      setFormData({
        nama: '', mapel: '', status: 'Guru Tetap', jenisKelamin: 'Laki-laki',
        email: '', noHp: '', pendidikan: '', alamat: '', password: ''
      });
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingGuru) {
      setGuruList(guruList.map(g => g.id === editingGuru.id ? { ...formData, id: editingGuru.id, wajahTerdaftar: editingGuru.wajahTerdaftar } : g));
    } else {
      setGuruList([...guruList, { ...formData, id: Date.now(), wajahTerdaftar: false }]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data guru ini?')) {
      setGuruList(guruList.filter(g => g.id !== id));
    }
  };

  const handleResetPassword = (guru) => {
    const newPassword = prompt(`Masukkan password baru untuk ${guru.nama}:`);
    if (newPassword) {
      alert(`Password untuk ${guru.nama} telah direset`);
    }
  };

  const filteredGuru = guruList.filter(g => 
    g.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.mapel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Guru</h1>
          <p className="text-gray-600">Kelola data guru SMP Islam Daarul Qolam</p>
        </div>

        {/* Action Bar */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari guru berdasarkan nama atau mata pelajaran..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <button onClick={() => handleOpenModal()} className="btn-primary flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Tambah Guru
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Pelajaran</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wajah Terdaftar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredGuru.map((guru) => (
                  <tr key={guru.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{guru.nama}</div>
                      <div className="text-sm text-gray-500">{guru.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{guru.mapel}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        guru.status === 'Guru Tetap' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {guru.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{guru.jenisKelamin}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {guru.wajahTerdaftar ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <UserCheck className="h-4 w-4" /> Terdaftar
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600">
                          <UserX className="h-4 w-4" /> Belum
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button onClick={() => handleOpenModal(guru)} className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button onClick={() => handleResetPassword(guru)} className="text-orange-600 hover:text-orange-900" title="Reset Password">
                          <RefreshCcw className="h-5 w-5" />
                        </button>
                        <button onClick={() => handleDelete(guru.id)} className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editingGuru ? 'Edit Data Guru' : 'Tambah Guru Baru'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" required value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mata Pelajaran</label>
                    <input type="text" required value={formData.mapel} onChange={(e) => setFormData({...formData, mapel: e.target.value})} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Status</label>
                    <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="input-field">
                      <option value="Guru Tetap">Guru Tetap</option>
                      <option value="Guru Honor">Guru Honor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Jenis Kelamin</label>
                    <select value={formData.jenisKelamin} onChange={(e) => setFormData({...formData, jenisKelamin: e.target.value})} className="input-field">
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">No. HP</label>
                    <input type="tel" required value={formData.noHp} onChange={(e) => setFormData({...formData, noHp: e.target.value})} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Pendidikan</label>
                    <input type="text" required value={formData.pendidikan} onChange={(e) => setFormData({...formData, pendidikan: e.target.value})} className="input-field" />
                  </div>
                  {!editingGuru && (
                    <div>
                      <label className="block text-gray-700 mb-2">Password</label>
                      <input type="password" required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="input-field" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Alamat</label>
                  <textarea required value={formData.alamat} onChange={(e) => setFormData({...formData, alamat: e.target.value})} className="input-field" rows="3"></textarea>
                </div>
                <div className="flex gap-4 justify-end pt-4">
                  <button type="button" onClick={() => setShowModal(false)} className="btn-secondary bg-gray-300 hover:bg-gray-400 text-gray-800">
                    Batal
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingGuru ? 'Update' : 'Simpan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataGuru;
