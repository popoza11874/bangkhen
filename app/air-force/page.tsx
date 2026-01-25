"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function AirForceMuseumPage() {
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
            hover:border-sky-500/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]
            active:scale-95
          "
        >
          {/* เอฟเฟกต์แสงเรืองสีฟ้า Sky Blue */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 group-hover:bg-sky-600 group-hover:border-sky-400 transition-all duration-300">
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
          src="https://img2.pic.in.th/wyia3h.jpg" 
          className="absolute inset-0 w-full h-full object-cover scale-105" 
          alt="Royal Thai Air Force Museum"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl text-white pt-24 sm:pt-28 md:pt-0">
          <div className="w-16 sm:w-20 h-1 bg-sky-500 mb-6 sm:mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
            พิพิธภัณฑ์กองทัพอากาศ <br />
            <span className="text-sky-400">และการบินแห่งชาติ</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            ศูนย์รวมประวัติศาสตร์การบินไทย 
            เทคโนโลยีการทหาร และเกียรติภูมิแห่งน่านฟ้า
          </p>
        </div>
      </section>

      {/* ================= GALLERY (ข้อมูลเดิม 100%) ================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-neutral-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            "https://img5.pic.in.th/file/secure-sv1/8dfd39cbb4bb452da56795fa2dc573c4.webp",
            "https://img2.pic.in.th/30CEBC5532B6434D873141C9AA5BF62E.jpg",
            "https://img2.pic.in.th/hk5gys.jpg",
            "https://img2.pic.in.th/wyia3h.jpg",
            "https://img5.pic.in.th/file/secure-sv1/521607_3317805921367_1710878485_n.jpg",
            "https://img5.pic.in.th/file/secure-sv1/7e58556b8ffac3ff932b9cb04bef8c56.jpg",
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-800 leading-tight">
              กำเนิดกองทัพอากาศ <br />
              <span className="text-neutral-400">ของชาติไทย</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed">
              <p>
                พิพิธภัณฑ์กองทัพอากาศและการบินแห่งชาติ 
                จัดแสดงประวัติศาสตร์การบินตั้งแต่ยุคเริ่มต้นของสยาม 
                จนถึงเทคโนโลยีการบินสมัยใหม่
              </p>
              <p className="border-l-4 border-sky-500 pl-4 sm:pl-6 italic">
                "บันทึกเกียรติยศของนักบินและอากาศยาน 
                ผู้พิทักษ์น่านฟ้าไทยตลอดกาล"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/7e58556b8ffac3ff932b9cb04bef8c56.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px]
                         object-cover rounded-2xl sm:rounded-[3rem] shadow-2xl"
              alt="Exhibition Hall"
            />
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY (ข้อมูลเดิม 100%) ================= */}
      <section
        className="
          bg-neutral-900 py-20 sm:py-32
          px-4 sm:px-8 md:px-16 lg:px-24
          text-white relative
          overflow-visible lg:overflow-hidden
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/521607_3317805921367_1710878485_n.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[700px]
                         object-cover rounded-3xl"
              alt="Aircraft Display"
            />
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-400">
              เทคโนโลยีแห่งน่านฟ้า
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              ภายในพิพิธภัณฑ์จัดแสดงอากาศยานรบ เครื่องบินฝึก 
              และยุทโธปกรณ์ที่สะท้อนพัฒนาการด้านการบินของกองทัพอากาศไทย
            </p>
            <ul className="space-y-5 text-base sm:text-lg text-gray-400">
              <li className="flex gap-4">
                <span className="text-sky-400 font-bold">01/</span>
                <p><strong className="text-white">เครื่องบินรบ</strong> ตั้งแต่ยุคใบพัดถึงเจ็ต</p>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-bold">02/</span>
                <p><strong className="text-white">เครื่องบินฝึก</strong> ของนักเรียนนายเรืออากาศ</p>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-bold">03/</span>
                <p><strong className="text-white">ยุทโธปกรณ์</strong> และระบบอากาศยาน</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FINAL (ข้อมูลเดิม 100%) ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/8dfd39cbb4bb452da56795fa2dc573c4.webp"
            className="w-full rounded-2xl sm:rounded-[2rem] shadow-xl"
            alt="Museum Evening"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                        font-light text-neutral-400 leading-snug">
            "ปีกเหล็กที่โบยบินเพื่อปกป้องแผ่นดิน 
            และจารึกประวัติศาสตร์ของชาติไว้บนท้องฟ้า"
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
                <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
                <h2 className="text-xl sm:text-3xl font-bold">Location Guide</h2>
              </div>
              <div className="h-[300px] sm:h-[400px] md:h-[500px]
                              rounded-2xl sm:rounded-[3rem]
                              overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=พิพิธภัณฑ์กองทัพอากาศ&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4 text-center space-y-6 sm:space-y-8">
              <h4 className="text-lg sm:text-xl font-bold">พิพิธภัณฑ์กองทัพอากาศ</h4>
              <p className="text-neutral-500">ถ.พหลโยธิน เขตดอนเมือง กรุงเทพมหานคร</p>
              <a
                href="https://maps.google.com/?q=พิพิธภัณฑ์กองทัพอากาศ"
                target="_blank"
                className="inline-block bg-neutral-900 text-white
                           px-8 sm:px-12 py-4 sm:py-5
                           rounded-full font-bold
                           hover:bg-sky-600 transition-all"
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