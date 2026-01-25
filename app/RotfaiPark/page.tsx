"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function SuanRotFaiPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen font-sans text-neutral-900 bg-white relative">

      {/* ================= BACK BUTTON ================= */}
      <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[100]">
        <button
          onClick={() => router.back()}
          className="group relative flex items-center gap-3 sm:gap-4
                     pl-4 sm:pl-5 md:pl-6 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3
                     bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10
                     text-white rounded-full md:rounded-[2rem]
                     overflow-hidden transition-all duration-500
                     hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]
                     active:scale-95"
        >
          <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-100%]
                            bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#22c55e_360deg)]
                            animate-[spin_4s_linear_infinite]" />
          </div>

          <div className="absolute inset-[1px] bg-[#0a0a0a]/90 rounded-full md:rounded-[2rem] -z-10" />

          <div className="relative flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-black uppercase
                             tracking-[0.2em] sm:tracking-[0.3em]
                             text-green-400 group-hover:text-white transition-colors">
              ย้อนกลับ
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                            flex items-center justify-center
                            bg-white/5 border border-white/10 rounded-full
                            group-hover:bg-green-600 group-hover:border-green-400
                            transition-all duration-300">
              <Home size={18} className="scale-75 sm:scale-90 md:scale-100
                                         group-hover:rotate-[360deg]
                                         transition-transform duration-700" />
            </div>
          </div>
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] sm:h-screen flex items-center overflow-hidden">
        <img
          src="https://img2.pic.in.th/d501eb2b6c044c2dab67c4152f1a6b0d.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Suan Rot Fai Park"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl text-white pt-24 sm:pt-28 md:pt-0">
          <div className="w-16 sm:w-20 h-1 bg-green-500 mb-6 sm:mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
            สวนวชิรเบญจทัศ <br />
            <span className="text-green-400">สวนรถไฟ บางเขน</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            พื้นที่สีเขียวขนาดใหญ่ใจกลางกรุงเทพฯ 
            ศูนย์รวมธรรมชาติ การพักผ่อน และลมหายใจของเมือง
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-neutral-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            "https://img5.pic.in.th/file/secure-sv1/a214e8faf3984a92a49111ae25bffd1d.jpg",
            "https://img2.pic.in.th/WEB_-03.jpg",
            "https://img5.pic.in.th/file/secure-sv1/imagesb71addefd6d9449d.jpg",
            "https://img5.pic.in.th/file/secure-sv1/DSC02386-1500x1000.jpg",
            "https://img5.pic.in.th/file/secure-sv1/43f11358-040d-c038-be07-59eac2a55dae.jpg",
            "https://img2.pic.in.th/DSC02507-1-1500x1000.jpg",
          ].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden hover:opacity-80 transition-opacity">
              <img src={src} className="w-full h-full object-cover" alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2 space-y-6 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-800 leading-tight">
              จากพื้นที่รถไฟ <br />
              <span className="text-neutral-400">สู่สวนของประชาชน</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed">
              <p>
                สวนวชิรเบญจทัศ หรือสวนรถไฟ เดิมเป็นที่ดินของการรถไฟแห่งประเทศไทย 
                ก่อนพัฒนาเป็นสวนสาธารณะขนาดใหญ่ เพื่อเป็นปอดแห่งใหม่ของกรุงเทพฯ
              </p>
              <p className="border-l-4 border-green-500 pl-4 sm:pl-6 italic">
                "พื้นที่ที่เปลี่ยนจากโครงสร้างอุตสาหกรรม 
                สู่ภูมิทัศน์แห่งชีวิตและการพักผ่อนของคนเมือง"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src="https://img2.pic.in.th/WEB_-03.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px]
                         object-cover rounded-2xl sm:rounded-[3rem] shadow-2xl"
              alt="Lake in Park"
            />
          </div>
        </div>
      </section>

      {/* ================= NATURE ================= */}
      <section className="
        bg-neutral-900 py-20 sm:py-32
        px-4 sm:px-8 md:px-16 lg:px-24
        text-white relative
        overflow-visible lg:overflow-hidden
      ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/43f11358-040d-c038-be07-59eac2a55dae.jpg"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[700px]
                         object-cover rounded-3xl"
              alt="Cycling Track"
            />
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">
              ระบบนิเวศกลางเมือง
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              ภายในสวนประกอบด้วยทะเลสาบ เส้นทางจักรยาน และพื้นที่ชุ่มน้ำ 
              ที่ช่วยฟื้นฟูสมดุลสิ่งแวดล้อมในเขตเมือง
            </p>
            <ul className="space-y-5 text-base sm:text-lg text-gray-400">
              <li className="flex gap-4">
                <span className="text-green-400 font-bold">01/</span>
                <p><strong className="text-white">เส้นทางปั่นจักรยาน</strong> รอบสวนกว่า 3 กม.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-green-400 font-bold">02/</span>
                <p><strong className="text-white">สวนพฤกษศาสตร์</strong> และพันธุ์ไม้ท้องถิ่น</p>
              </li>
              <li className="flex gap-4">
                <span className="text-green-400 font-bold">03/</span>
                <p><strong className="text-white">ทะเลสาบใหญ่</strong> สำหรับดูนกและพักผ่อน</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/-442cdf616977a70a9.jpg"
            className="w-full rounded-2xl sm:rounded-[2rem] shadow-xl"
            alt="Sunset"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                        font-light text-neutral-400 leading-snug">
            "พื้นที่ที่หลอมรวมธรรมชาติ กีฬา และความสงบ 
            เข้ากับจังหวะชีวิตของมหานคร"
          </p>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="pb-20 sm:pb-32 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto bg-neutral-50
                        rounded-3xl sm:rounded-[4rem]
                        p-6 sm:p-10 md:p-16 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h2 className="text-xl sm:text-3xl font-bold">Location Guide</h2>
              </div>
              <div className="h-[300px] sm:h-[400px] md:h-[500px]
                              rounded-2xl sm:rounded-[3rem]
                              overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=สวนรถไฟ+บางเขน&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4 text-center space-y-6 sm:space-y-8">
              <h4 className="text-lg sm:text-xl font-bold">
                สวนวชิรเบญจทัศ (สวนรถไฟ)
              </h4>
              <p className="text-neutral-500">เขตจตุจักร กรุงเทพมหานคร</p>
              <a
                href="https://maps.google.com/?q=สวนรถไฟ+บางเขน"
                target="_blank"
                className="inline-block bg-neutral-900 text-white
                           px-8 sm:px-12 py-4 sm:py-5
                           rounded-full font-bold
                           hover:bg-green-600 transition-all"
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
