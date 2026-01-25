"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

type Place = {
  id: string;
  name: string;
  category: string;
  image: string | null;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

  // ✅ 1. เพิ่ม State สำหรับจัดการ Modal ต่างๆ
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string, name: string } | null>(null);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('th-TH'));
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('th-TH'));
    }, 1000);

    const fetchPlaces = async () => {
      const { data, error } = await supabase
        .from("places")
        .select("id, name, category, image")
        .order("id", { ascending: false });

      if (!error) setPlaces(data || []);
      setLoading(false);
    };

    fetchPlaces();
    return () => clearInterval(timer);
  }, []);

  // ✅ 2. ฟังก์ชันยืนยันการลบ
  const confirmDelete = async () => {
    if (!itemToDelete) return;
    await supabase.from("places").delete().eq("id", itemToDelete.id);
    setPlaces((prev) => prev.filter((x) => x.id !== itemToDelete.id));
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const filteredPlaces = places.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalImages = places.filter((p) => p.image).length;

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8 relative">
      
      {/* --- Header Section --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gray-900/20 p-6 rounded-3xl border border-gray-800 backdrop-blur-md">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white italic underline decoration-blue-500/50">DASHBOARD</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            ยินดีต้อนรับกลับ, คุณ Admin 👋
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button onClick={() => router.push("/admin/dashboard/media")} className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-2xl font-bold border border-gray-700 transition-all">
            🖼 คลังสื่อ
          </button>
          <button
            onClick={() => router.push("/admin/dashboard/stats")}
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-2xl font-bold border border-gray-700 transition-all"
          >
            📊 สถิติ
          </button>
          
          {/* ปุ่ม Logout ที่ปรับใหม่ */}
          <button 
            onClick={() => setShowLogoutModal(true)} 
            className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-5 py-3 rounded-2xl font-bold border border-red-500/20 transition-all flex items-center gap-2"
          >
            🚪 ออกจากระบบ
          </button>
        </div>
      </header>

      {/* --- Stats Grid --- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="สถานที่ทั้งหมด" value={places.length} icon="📍" color="text-blue-400" />
        <StatCard title="รูปภาพในระบบ" value={totalImages} icon="📷" color="text-emerald-400" />
        <StatCard title="หมวดหมู่" value={new Set(places.map(p => p.category)).size} icon="📁" color="text-orange-400" />
        
        <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 backdrop-blur-md flex flex-col justify-between hover:border-green-500/30 transition-all group relative overflow-hidden">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">System Status</p>
            <div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded-lg">
              <div className="relative h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative block h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-[10px] text-green-500 font-black tracking-tighter italic">Online</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-black text-white group-hover:text-green-500 transition-colors uppercase tracking-tight">ระบบออนไลน์</p>
            <p className="text-[10px] text-gray-500 mt-1 font-mono tracking-wider">TIME: {currentTime}</p>
          </div>
        </div>
      </section>

      {/* --- Main Table Area --- */}
      <section className="bg-gray-900/30 border border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
        <div className="p-6 border-b border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/[0.01]">
          <h2 className="text-xl font-bold flex items-center gap-2 text-gray-200">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> รายการสถานที่ทั้งหมด
          </h2>
          <input
            type="text"
            placeholder="ค้นหาชื่อสถานที่..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-white"
          />
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="py-24 text-center text-gray-500 animate-pulse font-medium">กำลังโหลด...</div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-[0.2em] bg-white/[0.03]">
                  <th className="px-8 py-4 font-bold">สถานที่</th>
                  <th className="px-8 py-4 font-bold">หมวดหมู่</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {filteredPlaces.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-800 overflow-hidden border border-gray-700/50 group-hover:border-blue-500/50 transition-all">
                          {p.image ? <img src={p.image} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-600">NO IMG</div>}
                        </div>
                        <span className="font-bold text-gray-200 group-hover:text-blue-400 transition-colors">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">{p.category || "ทั่วไป"}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* ✅ 3. UI: DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowDeleteModal(false)}></div>
          <div className="relative bg-[#0d1117] border border-gray-800 w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-[2rem] flex items-center justify-center text-3xl mb-6 border border-red-500/20">🗑️</div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">ยืนยันการลบ?</h3>
              <p className="text-gray-400 text-sm mb-8">คุณแน่ใจว่าต้องการลบ <span className="text-red-400 font-bold italic underline">"{itemToDelete?.name}"</span> ใช่ไหม? ข้อมูลนี้จะหายไปถาวร</p>
              <div className="flex w-full gap-3">
                <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-4 rounded-2xl bg-gray-800 hover:bg-gray-700 text-white font-bold transition-all">ยกเลิก</button>
                <button onClick={confirmDelete} className="flex-1 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-lg shadow-red-900/30">ยืนยันลบข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ 4. UI: LOGOUT MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowLogoutModal(false)}></div>
          <div className="relative bg-[#0d1117] border border-gray-800 w-full max-w-sm rounded-[2.5rem] p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-500/10 text-blue-500 rounded-[2rem] flex items-center justify-center text-3xl mb-6 border border-blue-500/20">🚪</div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">LOGOUT?</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">ต้องการออกจากระบบ <br/><span className="text-blue-400 font-bold uppercase tracking-widest">Travel Admin</span> หรือไม่?</p>
              <div className="flex flex-col w-full gap-3">
                <button onClick={async () => { await supabase.auth.signOut(); router.push("/admin/login"); }} className="w-full py-4 rounded-2xl bg-white text-black font-black hover:bg-gray-200 transition-all">ยืนยันออกจากระบบ</button>
                <button onClick={() => setShowLogoutModal(false)} className="w-full py-4 rounded-2xl bg-transparent hover:bg-white/5 text-gray-500 font-bold transition-all">กลับสู่ระบบ</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ... (StatCard Component คงเดิม)
function StatCard({ title, value, icon, color }: { title: string; value: string | number; icon: string; color: string }) {
  return (
    <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 backdrop-blur-md relative overflow-hidden group hover:border-gray-700 transition-all">
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">{title}</p>
          <p className={`text-4xl font-black mt-3 ${color} tracking-tighter`}>{value}</p>
        </div>
        <div className="text-2xl bg-white/5 w-10 h-10 flex items-center justify-center rounded-xl border border-white/5 opacity-80 group-hover:opacity-100 transition-all">{icon}</div>
      </div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl"></div>
    </div>
  );
}