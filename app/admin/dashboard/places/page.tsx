"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";
import { Plus, Edit3, Trash2, Search, MapPin, MoreVertical, Sparkles } from "lucide-react";

type Place = {
  id: string;
  name: string;
  image: string;
  category: string;
};

const categoryColors: Record<string, string> = {
  Popular: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Campus: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  History: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Default: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

export default function PlacesPage() {
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  useEffect(() => { fetchPlaces(); }, []);

  const fetchPlaces = async () => {
    const { data } = await supabase.from("places").select("id, name, image, category").order("id", { ascending: false });
    setPlaces(data || []);
  };

  const filteredPlaces = places.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCat === "All" || p.category === selectedCat;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-6 md:p-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header - เรียบหรู ไม่ใหญ่เกินไป */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
              <Sparkles className="text-blue-500" size={28} /> จัดการสถานที่
            </h1>
            <p className="text-gray-500 text-sm font-medium">จัดการข้อมูลและรูปภาพสถานที่ในระบบ</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Search Bar ทรงแคปซูล */}
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text"
                placeholder="ค้นหา..."
                className="w-full bg-[#161b22] border border-gray-800 rounded-full py-2.5 pl-11 pr-4 text-sm focus:border-blue-500 outline-none transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => router.push("/admin/dashboard/create")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 shrink-0"
            >
              <Plus size={18} /> เพิ่ม
            </button>
          </div>
        </div>

        {/* Categories Tab - กระชับลง */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Popular", "Campus", "History"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
                selectedCat === cat 
                ? "bg-white text-black border-white" 
                : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600"
              }`}
            >
              {cat === "All" ? "ทั้งหมด" : cat}
            </button>
          ))}
        </div>

        {/* Grid Content - เห็นภาพกว้างขึ้นในหน้าเดียว */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((p) => (
              <div key={p.id} className="group bg-[#161b22] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={p.name} />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border backdrop-blur-md ${categoryColors[p.category] || categoryColors.Default}`}>
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white truncate group-hover:text-blue-400 transition-colors">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-[10px] font-medium uppercase tracking-tighter">
                      <MapPin size={12} className="text-blue-500" /> Location ID: #{p.id.slice(0, 6)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-gray-800/50">
                    <button 
                      onClick={() => router.push(`/admin/dashboard/edit/${p.id}`)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-800/50 hover:bg-blue-600 hover:text-white rounded-xl text-xs font-bold transition-all"
                    >
                      <Edit3 size={14} /> แก้ไข
                    </button>
                    <button 
                      onClick={() => handleDelete(p)}
                      className="p-2.5 bg-gray-800/50 hover:bg-red-600 text-gray-400 hover:text-white rounded-xl transition-all"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-3">
              <Search size={40} className="mx-auto text-gray-800" />
              <p className="text-gray-600 font-medium">ไม่พบข้อมูลที่ต้องการ</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  async function handleDelete(p: Place) {
    const result = await Swal.fire({
      title: "ลบข้อมูล?",
      text: `ยืนยันการลบ "${p.name}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ลบเลย",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#ef4444",
      background: "#161b22",
      color: "#fff"
    });

    if (result.isConfirmed) {
      await supabase.from("places").delete().eq("id", p.id);
      setPlaces(prev => prev.filter(item => item.id !== p.id));
      Swal.fire({ title: "ลบสำเร็จ", icon: "success", background: "#161b22", color: "#fff", showConfirmButton: false, timer: 1000 });
    }
  }
}