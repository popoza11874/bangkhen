"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";
import {
  Save,
  ArrowLeft,
  Image as ImageIcon,
  AlignLeft,
  MapPin,
  Loader2,
  Users,
  Tag,
  Link as LinkIcon,
  X,
  Sparkles,
} from "lucide-react";

export default function EditPlacePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Popular");
  const [people, setPeople] = useState("");
  const [location, setLocation] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchPlace = async () => {
      const { data, error } = await supabase
        .from("places")
        .select("name, description, image, category, people, location, slug")
        .eq("id", id)
        .maybeSingle();

      if (error || !data) {
        Swal.fire({
          icon: "error",
          title: "ไม่พบข้อมูล",
          text: "ระบบไม่พบสถานที่ที่ต้องการแก้ไข",
          background: "#0d1117",
          color: "#fff",
          confirmButtonColor: "#3b82f6",
        });
        router.replace("/admin/dashboard/places");
        return;
      }

      setName(data.name || "");
      setDescription(data.description || "");
      setImage(data.image || "");
      setCategory(data.category || "Popular");
      setPeople(data.people || "");
      setLocation(data.location || "");
      setSlug(data.slug || "");
      setLoading(false);
    };
    fetchPlace();
  }, [id, router]);

  const handleUpdate = async () => {
    if (!id) return;
    if (!name.trim()) {
      return Swal.fire({
        title: "กรุณากรอกชื่อสถานที่",
        icon: "warning",
        background: "#0d1117",
        color: "#fff",
        confirmButtonColor: "#3b82f6",
      });
    }

    setSaving(true);
    const { error } = await supabase
      .from("places")
      .update({
        name: name.trim(),
        description,
        image,
        category,
        people,
        location,
        slug,
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "บันทึกไม่สำเร็จ",
        text: error.message,
        background: "#0d1117",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    await Swal.fire({
      icon: "success",
      title: "บันทึกสำเร็จ!",
      background: "#0d1117",
      color: "#fff",
      showConfirmButton: false,
      timer: 1500,
    });

    router.push("/admin/dashboard/places");
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4 bg-[#0d1117]">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
        <p className="text-gray-400 font-medium">กำลังโหลดข้อมูลสถานที่...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-4 md:p-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> ย้อนกลับ
            </button>
            <h1 className="text-4xl font-extrabold text-white flex items-center gap-3">
              <span className="text-blue-500">✏️</span> แก้ไข <span className="text-blue-500">สถานที่</span>
            </h1>
          </div>
          
          <button
            onClick={handleUpdate}
            disabled={saving}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-2xl transition-all font-bold flex items-center gap-3 text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95"
          >
            {saving ? <Loader2 size={22} className="animate-spin" /> : <Save size={22} />}
            {saving ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Main Form (Left Side) */}
          <div className="xl:col-span-8 space-y-8">
            <div className="bg-[#161b22]/50 backdrop-blur-xl border border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="ชื่อสถานที่" icon={<MapPin className="text-blue-400" />}>
                  <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="ระบุชื่อสถานที่" />
                </Field>
                <Field label="สลัก (SLUG)" icon={<LinkIcon className="text-purple-400" />}>
                  <input className={inputClass} value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="URL-friendly-name" />
                </Field>
                <Field label="ทำเลที่ตั้ง" icon={<MapPin className="text-blue-500" />}>
                  <input className={inputClass} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="เช่น โซนประตู 1" />
                </Field>
                <Field label="จำนวนคนที่รองรับ" icon={<Users className="text-blue-300" />}>
                  <input className={inputClass} value={people} onChange={(e) => setPeople(e.target.value)} placeholder="เช่น 500 คน" />
                </Field>
              </div>

              {/* Category Selection */}
              <div className="mt-10 space-y-4">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <Tag size={14} className="text-blue-500" /> หมวดหมู่
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Popular", "Campus", "History"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-6 py-3 rounded-2xl border-2 transition-all font-semibold text-sm
                        ${category === cat 
                          ? "bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                          : "bg-transparent border-gray-800 text-gray-500 hover:border-blue-500/40"}`}
                    >
                      {cat === "Popular" ? "ยอดนิยม" : cat === "Campus" ? "ภายในวิทยาเขต" : "ประวัติศาสตร์"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Field label="รายละเอียด" icon={<AlignLeft className="text-gray-400" />}>
                  <textarea rows={6} className={`${inputClass} resize-none`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="รายละเอียดสถานที่..." />
                </Field>
              </div>
            </div>
          </div>

          {/* Sidebar Image (Right Side) */}
          <div className="xl:col-span-4">
            <div className="bg-[#161b22]/50 border border-gray-800 rounded-[2.5rem] p-8 shadow-xl sticky top-8">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <ImageIcon size={14} className="text-blue-400" /> รูปภาพหน้าปก (16:9)
              </label>
              
              <div className="relative aspect-video w-full bg-[#0d1117] rounded-[1.5rem] mb-8 border-2 border-dashed border-gray-800 flex items-center justify-center overflow-hidden group">
                {image ? (
                  <>
                    <img src={image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Preview" />
                    <button 
                      onClick={() => setImage("")} 
                      className="absolute top-3 right-3 p-2 bg-black/60 rounded-full hover:bg-red-500 transition-all z-10"
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-gray-700">
                    <ImageIcon size={48} strokeWidth={1} />
                    <span className="text-xs font-bold tracking-widest uppercase">ยังไม่มีรูปภาพ</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Field label="IMAGE URL" icon={null}>
                  <input className={inputClass} placeholder="https://example.com/image.jpg" value={image} onChange={(e) => setImage(e.target.value)} />
                </Field>
                <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                  <Sparkles size={18} className="text-blue-400 shrink-0" />
                  <p className="text-[11px] text-blue-400/70 leading-relaxed">
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

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 ml-1">
        {icon} {label}
      </label>
      {children}
    </div>
  );
}

const inputClass = 
  "w-full bg-[#0d1117]/80 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder:text-gray-800 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-medium";