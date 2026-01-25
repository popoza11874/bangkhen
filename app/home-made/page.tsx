"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function OYuaHomeMadePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen font-sans text-neutral-900 bg-white relative">

      {/* ================= PREMIUM BACK BUTTON (STAYS ON SCREEN) ================= */}
      <nav className="fixed z-[100] top-8 right-4 md:right-8">
        <button
          onClick={() => router.back()}
          className="
            group relative flex items-center gap-3
            pl-4 pr-5 py-2.5 md:pl-5 md:pr-6 md:py-3
            bg-[#0a0a0a]/80 backdrop-blur-2xl
            border border-white/20
            text-white rounded-full
            shadow-[0_20px_40px_rgba(0,0,0,0.3)]
            transition-all duration-500 ease-out
            hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]
            active:scale-95
          "
        >
          {/* เอฟเฟกต์แสงเรืองสี Amber ให้เข้ากับโทนร้าน */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300">
              <Home size={16} className="group-hover:rotate-[360deg] transition-transform duration-700" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-200 group-hover:text-white transition-colors">
              ย้อนกลับ
            </span>
          </div>
        </button>
      </nav>

      {/* ================= HERO (ข้อมูลเดิม 100%) ================= */}
      <section className="relative min-h-[100svh] sm:h-screen flex items-center overflow-hidden">
        <img 
          src="https://img5.pic.in.th/file/secure-sv1/470131394_966026635548052_4596675357541792440_n.jpg" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
          alt="OYua Home Made Bangkhen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        
        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl text-neutral-900 pt-24 sm:pt-28 md:pt-0">
          <div className="w-16 sm:w-20 h-1 bg-amber-500 mb-6 sm:mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
            โอยั๊วะ <br />
            <span className="text-amber-600">Home Made</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed font-light">
            ขนมโฮมเมดสไตล์จีนร่วมสมัย  
            ความเรียบง่าย อบอุ่น และรสชาติจากความตั้งใจ
          </p>
        </div>
      </section>

      {/* ================= GALLERY (ข้อมูลเดิม 100%) ================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-neutral-50">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            "https://img2.pic.in.th/470151301_966026832214699_4454435757050864483_n.jpg",
            "https://img5.pic.in.th/file/secure-sv1/470170496_966026725548043_7226898821068321665_n.jpg",
            "https://img2.pic.in.th/470140952_966027022214680_1214624040026561332_n.jpg",
            "https://img5.pic.in.th/file/secure-sv1/470156634_966027118881337_7641603060464031950_n.jpg",
            "https://img5.pic.in.th/file/secure-sv1/470153507_966027055548010_7747301614476287538_n.jpg",
            "https://img2.pic.in.th/470138573_966027032214679_6160493593601405360_n.jpg",
          ].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden hover:opacity-80 transition-opacity">
              <img src={src} className="w-full h-full object-cover" alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= STORY (ข้อมูลเดิม 100%) ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 space-y-6 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              สูตรลับจากครัว <br />
              <span className="text-neutral-400">สู่ร้านเล็ก ๆ ในบางเขน</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed">
              <p>
                โอยั๊วะ Home Made คือร้านขนมและเครื่องดื่มที่เกิดจากสูตรดั้งเดิมของครอบครัว  
                เน้นวัตถุดิบคุณภาพ ความพิถีพิถัน และรสชาติที่ให้ความรู้สึกเหมือนได้กลับบ้าน
              </p>
              <p className="border-l-4 border-amber-500 pl-4 sm:pl-6 italic">
                "ความสุขเรียบง่าย ที่เริ่มจากเตาอบเล็ก ๆ และหัวใจของคนทำขนม"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src="https://img2.pic.in.th/470151301_966026832214699_4454435757050864483_n.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px]
                         object-cover rounded-2xl sm:rounded-[3rem] shadow-2xl"
              alt="Kitchen"
            />
          </div>
        </div>
      </section>

      {/* ================= MENU HIGHLIGHT (ข้อมูลเดิม 100%) ================= */}
      <section
        className="
          bg-neutral-100 py-20 sm:py-32
          px-4 sm:px-8 md:px-16 lg:px-24
          relative overflow-visible
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/470156634_966027118881337_7641603060464031950_n.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[700px]
                         object-cover rounded-3xl"
              alt="Dessert"
            />
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600">
              เมนูแนะนำ
            </h3>
            <ul className="space-y-5 text-base sm:text-lg text-neutral-600">
              <li className="flex gap-4">
                <span className="text-amber-500 font-bold">01/</span>
                <p><strong>ขนมโบราณสูตรจีน</strong> ทำสดใหม่ทุกวัน</p>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 font-bold">02/</span>
                <p><strong>ขนมอบโฮมเมด</strong> สไตล์ฟิวชัน</p>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 font-bold">03/</span>
                <p><strong>ชาและกาแฟ</strong> โทนอุ่น ดื่มสบาย</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FINAL (ข้อมูลเดิม 100%) ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/470153507_966027055548010_7747301614476287538_n.jpg"
            className="w-full rounded-2xl sm:rounded-[2rem] shadow-xl"
            alt="Store"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                        font-light text-neutral-400 leading-snug">
            "ความอร่อยที่ไม่ต้องปรุงแต่ง  
            แค่จริงใจ ก็พอ"
          </p>
        </div>
      </section>

      {/* ================= MAP (ข้อมูลเดิม 100%) ================= */}
      <section className="pb-20 sm:pb-32 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto bg-neutral-50
                        rounded-3xl sm:rounded-[4rem]
                        p-6 sm:p-10 md:p-16 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                <h2 className="text-xl sm:text-3xl font-bold">Location Guide</h2>
              </div>
              <div className="h-[300px] sm:h-[400px] md:h-[500px]
                              rounded-2xl sm:rounded-[3rem]
                              overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=โอยั๊วะ+Home+Made+บางเขน&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4 text-center space-y-6 sm:space-y-8">
              <h4 className="text-lg sm:text-xl font-bold">โอยั๊วะ Home Made</h4>
              <p className="text-neutral-500">เขตบางเขน กรุงเทพมหานคร</p>
              <a
                href="https://maps.google.com/?q=โอยั๊วะ+Home+Made+บางเขน"
                target="_blank"
                className="inline-block bg-amber-500 text-white
                           px-8 sm:px-12 py-4 sm:py-5
                           rounded-full font-bold
                           hover:bg-amber-600 transition-all"
              >
                START NAVIGATION
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}