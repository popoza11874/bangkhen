"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ImageIcon, LayoutGrid, Sparkles, FolderOpen, Search, Maximize2, X } from "lucide-react";

type MediaItem = {
  image: string;
  name: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // เก็บค่าที่พิมพ์

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("places")
        .select("image, name")
        .not("image", "is", null);

      if (!error && data) {
        setImages(data);
      }
      setLoading(false);
    };

    fetchImages();
  }, []);

  // Logic สำหรับการค้นหา: กรองชื่อที่ตรงกับ searchTerm
  const filteredImages = images.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#0d1117]">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 text-sm font-bold tracking-widest uppercase">Loading Gallery...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-6 md:p-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-6 pb-8 border-b border-gray-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-tighter">
              <Sparkles size={14} /> Media Assets
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight">
              คลังสื่อ <span className="text-gray-500 font-light">| แกลเลอรี</span>
            </h1>
            <p className="text-gray-500 text-sm font-medium">จัดการและตรวจสอบรูปภาพทั้งหมดในฐานข้อมูล</p>
          </div>

          <div className="flex items-center gap-4 bg-[#161b22] border border-gray-800 py-2 px-6 rounded-2xl shadow-lg">
            <FolderOpen className="text-blue-500" size={20} />
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-bold uppercase">Total Files</p>
              <p className="text-xl font-black text-white leading-none">{images.length}</p>
            </div>
          </div>
        </header>

        {/* Search Bar - แก้ไขให้พิมพ์ได้แล้ว */}
        <div className="relative max-w-md group">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${searchTerm ? 'text-blue-500' : 'text-gray-600'}`} size={18} />
          <input 
            type="text" 
            placeholder="ค้นหาชื่อรูปภาพ..." 
            className="w-full bg-[#161b22] border border-gray-800 rounded-xl py-3 pl-12 pr-10 text-sm focus:border-blue-500/50 outline-none transition-all focus:ring-1 focus:ring-blue-500/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // อัปเดตค่าเมื่อพิมพ์
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-800 rounded-full text-gray-500"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Gallery Grid - เปลี่ยนมาใช้ filteredImages.map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((item, i) => (
            <div
              key={i}
              className="group bg-[#161b22] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" size={24} />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold truncate group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-3">
                   <span className="text-[10px] text-gray-600 font-bold uppercase tracking-wider bg-gray-900 px-2 py-1 rounded-md">JPG / PNG</span>
                   <LayoutGrid size={14} className="text-gray-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* กรณีหาไม่เจอ */}
        {filteredImages.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-gray-800 rounded-[2rem]">
            <Search className="mx-auto text-gray-800 mb-4" size={48} />
            <p className="text-gray-600 font-medium tracking-wide">ไม่พบรูปภาพที่ชื่อ "{searchTerm}"</p>
          </div>
        )}
      </div>

      
    </div>
  );
}