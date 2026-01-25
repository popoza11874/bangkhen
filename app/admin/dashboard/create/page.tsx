"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";
import { 
  Save, ArrowLeft, Image as ImageIcon, AlignLeft, MapPin, 
  Loader2, Users, Tag, Link as LinkIcon, PlusCircle, 
  Star, School, Landmark, Sparkles
} from "lucide-react";

export default function CreatePlace() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ 
    name: "", slug: "", description: "", image: "", 
    category: "Popular", people: "", location: "" 
  });

  const categories = [
    { id: "Popular", label: "ยอดนิยม", icon: <Star size={16} /> },
    { id: "Campus", label: "ภายในวิทยาเขต", icon: <School size={16} /> },
    { id: "History", label: "ประวัติศาสตร์", icon: <Landmark size={16} /> },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const updates: any = { [name]: value };
    if (name === "name" && !form.slug) {
      updates.slug = value.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\wก-๙-]+/g, "");
    }
    setForm(prev => ({ ...prev, ...updates }));
  };

  const handleSave = async () => {
    if (!form.name.trim()) return Swal.fire({ title: "กรุณาระบุชื่อสถานที่", icon: "warning", background: "#0d1117", color: "#fff", confirmButtonColor: "#3b82f6" });
    setLoading(true);
    const { error } = await supabase.from("places").insert(form);
    setLoading(false);
    
    if (error) return Swal.fire({ title: "เกิดข้อผิดพลาด", text: error.message, icon: "error", background: "#0d1117", color: "#fff" });
    
    Swal.fire({ 
      icon: 'success', 
      title: 'บันทึกสำเร็จ!', 
      background: "#0d1117", 
      color: "#fff",
      showConfirmButton: false,
      timer: 1500 
    }).then(() => router.push("/admin/dashboard/places"));
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-6 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-[1400px] mx-auto"> {/* ขยายความกว้างสูงสุดของหน้าจอ */}
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="space-y-2">
            <button onClick={() => router.back()} className="group flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-all">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> ย้อนกลับ
            </button>
            <h1 className="text-4xl font-extrabold text-white flex items-center gap-3">
              <PlusCircle className="text-blue-500" size={36} />
              เพิ่ม <span className="text-blue-500">สถานที่ใหม่</span>
            </h1>
          </div>
          <button 
            onClick={handleSave} 
            disabled={loading}
            className="group px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95 disabled:opacity-50"
          >
            <span className="flex items-center gap-2 text-lg">
              {loading ? <Loader2 className="animate-spin" size={22} /> : <Save size={22} />}
              บันทึกข้อมูล
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* ฝั่งฟอร์ม (8 ส่วน) */}
          <div className="xl:col-span-8 space-y-8">
            <div className="bg-[#161b22]/50 backdrop-blur-xl border border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="ชื่อสถานที่" name="name" icon={<MapPin className="text-blue-400"/>} value={form.name} onChange={handleChange} placeholder="ระบุชื่อสถานที่" />
                <Input label="สลัก (Slug)" name="slug" icon={<LinkIcon className="text-cyan-400"/>} value={form.slug} onChange={handleChange} placeholder="URL-friendly-name" />
                <Input label="ทำเลที่ตั้ง" name="location" icon={<MapPin className="text-blue-500"/>} value={form.location} onChange={handleChange} placeholder="เช่น โซนประตู 1" />
                <Input label="จำนวนคนที่รองรับ" name="people" icon={<Users className="text-blue-300"/>} value={form.people} onChange={handleChange} placeholder="เช่น 500 คน" />
              </div>

              <div className="mt-10 space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 ml-1">
                  <Tag size={14} className="text-blue-500" /> หมวดหมู่
                </label>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, category: cat.id }))}
                      className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all font-semibold
                        ${form.category === cat.id 
                          ? "bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                          : "bg-transparent border-gray-800 text-gray-500 hover:border-blue-500/40"}`}
                    >
                      {cat.icon}
                      <span className="text-sm">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 ml-1">
                  <AlignLeft size={14} className="text-blue-500" /> รายละเอียด
                </label>
                <textarea 
                  name="description" 
                  rows={6} 
                  className={inputClass + " resize-none"} 
                  value={form.description} 
                  onChange={handleChange} 
                  placeholder="รายละเอียดสถานที่..."
                />
              </div>
            </div>
          </div>

          {/* ฝั่งพรีวิวรูปภาพ (4 ส่วน) - ปรับให้กว้างขึ้น */}
          <div className="xl:col-span-4 space-y-6">
            <div className="bg-[#161b22]/50 border border-gray-800 rounded-[2.5rem] p-8 shadow-xl sticky top-8">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <ImageIcon size={14} className="text-blue-400" /> รูปภาพหน้าปก (16:9)
              </label>
              
              {/* ปรับเป็น aspect-video เพื่อความกว้าง */}
              <div className="aspect-video w-full bg-[#0d1117] rounded-[1.5rem] mb-8 border-2 border-dashed border-gray-800 flex items-center justify-center overflow-hidden group hover:border-blue-500/50 transition-all shadow-inner">
                {form.image ? (
                  <img src={form.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Preview" />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-gray-700">
                    <ImageIcon size={56} strokeWidth={1} />
                    <span className="text-xs font-bold tracking-widest">ยังไม่มีรูปภาพ</span>
                  </div>
                )}
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-gray-600 uppercase ml-1">Image URL</label>
                   <input 
                    name="image" 
                    className={inputClass + " py-4 text-xs"} 
                    placeholder="https://example.com/image.jpg" 
                    value={form.image} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-blue-400/80">
                  <Sparkles size={18} />
                  <p className="text-[11px] font-medium leading-relaxed">
                    ใช้รูปภาพแนวนอนเพื่อให้แสดงผลในหน้าเว็บได้กว้างและสวยงามที่สุด
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const Input = ({ label, name, icon, value, onChange, placeholder }: any) => (
  <div className="space-y-3">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 ml-1">
      {icon} {label}
    </label>
    <input name={name} className={inputClass} value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

const inputClass = "w-full bg-[#0d1117]/80 border border-gray-800 rounded-2xl px-5 py-4 text-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-gray-800 text-sm font-medium";