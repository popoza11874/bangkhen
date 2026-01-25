"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function TaladLapKlangPaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen font-sans text-neutral-900 bg-black relative">

      {/* ================= BACK BUTTON ================= */}
      <nav className="fixed top-4 right-4 sm:top-8 sm:right-8 z-[100]">
        <button
          onClick={() => router.back()}
          className="group relative flex items-center gap-3 sm:gap-4
                     pl-4 sm:pl-6 pr-3 sm:pr-4 py-2.5 sm:py-3
                     bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10
                     text-white rounded-[2rem] overflow-hidden transition-all duration-500
                     hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]
                     active:scale-95"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#f97316_360deg)] animate-[spin_4s_linear_infinite]" />
          </div>
          <div className="absolute inset-[1px] bg-[#0a0a0a]/90 rounded-[2rem] -z-10" />

          <div className="relative flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-orange-400">
              ย้อนกลับ
            </span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                            bg-white/5 border border-white/10 rounded-full
                            group-hover:bg-orange-500 transition-all duration-300">
              <Home size={16} className="sm:size-[18px]" />
            </div>
          </div>
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] sm:h-screen flex items-center overflow-hidden">
        <img
          src="https://img2.pic.in.th/1726734267746-AW_--04.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Talad Lap Klang Pa Bangkhen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl text-white">
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mb-6 sm:mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
            ตลาดลับกลางป่า <br />
            <span className="text-orange-400">บางเขน</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            ตลาดกลางคืนท่ามกลางธรรมชาติ  
            แสงไฟ อาหาร เสียงดนตรี และบรรยากาศที่ซ่อนตัวอยู่ในผืนป่าเมือง
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-neutral-950">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            "https://img5.pic.in.th/file/secure-sv1/1726734392669-AW_-01.jpg",
            "https://img2.pic.in.th/1a8191e5fe924d098f735485c62e79d3.jpg",
            "https://img2.pic.in.th/1726734537162-AW_-05.jpg",
            "https://img5.pic.in.th/file/secure-sv1/528686814_754603623854258_4822043653854683989_n.jpg",
            "https://img5.pic.in.th/file/secure-sv1/1726734560203-AW_-06.jpg",
            "https://img2.pic.in.th/a7c05142cb8e48bb89bb55702a0aa724.jpg",
          ].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden hover:opacity-80 transition-opacity">
              <img src={src} className="w-full h-full object-cover" alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 space-y-6 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              จากป่ารกร้าง <br />
              <span className="text-neutral-400">สู่ตลาดลับของคนเมือง</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-400">
              <p>
                ตลาดลับกลางป่า บางเขน คือพื้นที่สร้างสรรค์ที่ผสานอาหาร ดนตรี 
                และธรรมชาติเข้าด้วยกัน เกิดเป็นแหล่งแฮงเอาท์กลางคืน
                ที่มีเอกลักษณ์ไม่เหมือนใครในกรุงเทพฯ
              </p>
              <p className="border-l-4 border-orange-500 pl-4 sm:pl-6 italic">
                "แสงไฟอุ่น ๆ ท่ามกลางต้นไม้สูง  
                กับเสียงหัวเราะของผู้คนในคืนวันศุกร์"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src="https://img2.pic.in.th/1a8191e5fe924d098f735485c62e79d3.jpg"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]
                         object-cover rounded-2xl sm:rounded-[3rem] shadow-2xl"
              alt="Food Zone"
            />
          </div>
        </div>
      </section>

      {/* ================= ZONE (แก้หาย + Responsive) ================= */}
      <section className="
        bg-neutral-900 py-20 sm:py-32
        px-4 sm:px-8 md:px-16 lg:px-24
        text-white relative
        overflow-visible lg:overflow-hidden
      ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/528686814_754603623854258_4822043653854683989_n.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[700px]
                         object-cover rounded-3xl"
              alt="Live Music"
            />
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
              โซนไฮไลต์
            </h3>
            <ul className="space-y-5 text-base sm:text-lg text-gray-400">
              <li className="flex gap-4">
                <span className="text-orange-400 font-bold">01/</span>
                <p><strong className="text-white">โซนอาหาร</strong> สตรีทฟู้ด & คาเฟ่</p>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-400 font-bold">02/</span>
                <p><strong className="text-white">ดนตรีสด</strong> โฟล์ก แจ๊ส อินดี้</p>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-400 font-bold">03/</span>
                <p><strong className="text-white">พื้นที่สีเขียว</strong> เดินเล่น ถ่ายรูป</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="pb-20 sm:pb-32 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
        <div className="max-w-7xl mx-auto bg-neutral-950 rounded-3xl sm:rounded-[4rem]
                        p-6 sm:p-10 md:p-16 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                <h2 className="text-xl sm:text-3xl font-bold">Location Guide</h2>
              </div>
              <div className="h-[300px] sm:h-[400px] md:h-[500px]
                              rounded-2xl sm:rounded-[3rem] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=ตลาดลับกลางป่า+บางเขน&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4 text-center space-y-6 sm:space-y-8">
              <h4 className="text-lg sm:text-xl font-bold">ตลาดลับกลางป่า บางเขน</h4>
              <p className="text-neutral-500">เขตบางเขน กรุงเทพมหานคร</p>
              <a
                href="https://maps.google.com/?q=ตลาดลับกลางป่า+บางเขน"
                target="_blank"
                className="inline-block bg-orange-500 text-black
                           px-8 sm:px-12 py-4 sm:py-5
                           rounded-full font-bold hover:bg-orange-400 transition-all"
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
