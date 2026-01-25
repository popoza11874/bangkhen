"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function WatPhraSriPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen font-sans text-neutral-900 bg-white overflow-x-hidden relative">

      {/* --- PREMIUM BACK BUTTON (STAYS ON SCREEN) --- */}
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
            hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,44,44,0.4)]
            active:scale-95
          "
        >
          {/* เอฟเฟกต์แสงเรืองสีแดง */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/20 to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 group-hover:bg-red-600 group-hover:border-red-400 transition-all duration-300">
              <Home size={16} className="group-hover:rotate-[360deg] transition-transform duration-700" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-200 group-hover:text-white transition-colors">
              ย้อนกลับ
            </span>
          </div>
        </button>
      </nav>

      {/* --- HERO SECTION (ข้อมูลเดิม 100%) --- */}
      <section className="
        relative
        min-h-[85vh] sm:min-h-screen
        flex items-center
        overflow-hidden
      ">
        <img
          src="/watphrasimahathat_view1.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Wat Phra Sri View"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="
          relative z-10
          px-6 sm:px-8 md:px-24
          max-w-4xl text-white
          pt-24 sm:pt-32 md:pt-0
        ">
          <div className="w-16 sm:w-20 h-1 bg-red-600 mb-6 sm:mb-8" />
          <h1 className="
            text-4xl sm:text-6xl md:text-8xl
            font-black mb-6
            leading-tight
          ">
            วัดพระศรีมหาธาตุ <br />
            <span className="text-red-500">วรมหาวิหาร</span>
          </h1>
          <p className="
            text-lg sm:text-xl md:text-2xl
            text-gray-300
            max-w-2xl
            leading-relaxed
          ">
            สถาปัตยกรรมแห่งอุดมการณ์ และเครื่องหมายแห่งประชาธิปไตย
            หัวใจสำคัญทางประวัติศาสตร์การเมืองไทย
          </p>
        </div>
      </section>

      {/* --- GALLERY (ข้อมูลเดิม 100%) --- */}
      <section className="py-10 sm:py-12 px-4 md:px-8 bg-neutral-100">
        <div className="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-2
        ">
          {[
            "/temple-of-wat-phra-si-rattana-mahathat-hop-inn-hotel_standard.jpg",
            "/gp66e16c1c48e7b.jpg",
            "/(2020)_วัดพระศรีมหาธาตุวรมหาวิหาร_เขตบางเขน_กรุงเทพมหานคร_(3).jpg",
            "/7-2.jpg",
            "/wat-phra-sri-mahathat-night-view-599x400.jpg",
            "/10-26.jpg",
          ].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* --- STORY (ข้อมูลเดิม 100%) --- */}
      <section className="py-24 sm:py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="
          flex flex-col
          lg:flex-row
          gap-14 lg:gap-20
          items-center
        ">
          <div className="lg:w-1/2 space-y-8 sm:space-y-10">
            <h2 className="
              text-4xl sm:text-5xl md:text-7xl
              font-bold text-neutral-800
              leading-tight
            ">
              จุดเริ่มต้น <br />
              <span className="text-neutral-400">ของศรัทธาใหม่</span>
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-neutral-500">
              <p>
                วัดพระศรีมหาธาตุวรมหาวิหาร ได้รับการแต่งตั้งเป็นพระอารามหลวงชั้นเอก
                เมื่อปี พ.ศ. 2485 เป็นวัดที่มีความสำคัญอย่างยิ่งในยุคสร้างชาติ
              </p>
              <p className="border-l-4 border-red-500 pl-6 italic">
                "เครื่องหมายแห่งการเฉลิมฉลองชัยชนะของการเปลี่ยนแปลงระบอบการปกครอง
                ศูนย์รวมจิตใจประชาชนในยุคประชาธิปไตย"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src="/fcd3f03a-2a20-40d4-9904-ec517e2ea2c7.jpg"
              className="
                w-full
                h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]
                object-cover
                rounded-[2rem] sm:rounded-[3rem]
                shadow-2xl
              "
              alt="Inside Temple"
            />
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE (ข้อมูลเดิม 100%) --- */}
      <section className="
        bg-neutral-900
        py-24 sm:py-32
        px-6 md:px-24
        text-white
        overflow-visible lg:overflow-hidden
      ">
        <div className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-12
          gap-14 lg:gap-16
        ">
          <div className="lg:col-span-7">
            <img
              src="/7f3962d8-8b7e-46cd-aadd-49160fbf45d6.jpg"
              className="
                w-full
                h-[320px] sm:h-[420px] md:h-[520px] lg:h-[700px]
                object-cover
                rounded-3xl
              "
              alt="Pagoda"
            />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-red-500">
              มรดกจากคณะทูต
            </h3>
            <div className="space-y-6 text-base sm:text-lg text-gray-400">
              <p>
                ในสมัยที่คณะรัฐบาลส่งทูตพิเศษ นำโดย พลเรือตรี ถวัลย์ ธำรงนาวาสวัสดิ์
                ไปยังประเทศอินเดีย ทำให้เราได้รับมรดกทางศาสนาล้ำค่ามาประดิษฐาน ณ ที่นี่
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold">01/</span>
                  <p><strong className="text-white">พระบรมสารีริกธาตุ</strong> จากมหาสถูปสาญจี</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold">02/</span>
                  <p><strong className="text-white">กิ่งพระศรีมหาโพธิ์</strong> 5 กิ่ง จากพุทธคยา</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold">03/</span>
                  <p><strong className="text-white">ดินสังเวชนียสถาน</strong> จากสถานที่สำคัญทั้ง 4 แห่ง</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP (ข้อมูลเดิม 100%) --- */}
      <section className="pb-24 sm:pb-32 px-6 md:px-24">
        <div className="
          max-w-7xl mx-auto
          bg-neutral-50
          rounded-[2.5rem] sm:rounded-[4rem]
          p-6 sm:p-8 md:p-16
          border border-neutral-200
        ">
          <div className="
            grid grid-cols-1 lg:grid-cols-12
            gap-14 lg:gap-16
          ">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                <h2 className="text-2xl sm:text-3xl font-bold">Location Guide</h2>
              </div>
              <div className="
                h-[300px] sm:h-[400px] md:h-[500px]
                rounded-[2rem] sm:rounded-[3rem]
                overflow-hidden
                shadow-inner
              ">
                <iframe
                  src="https://www.google.com/maps?q=วัดพระศรีมหาธาตุวรมหาวิหาร&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-4 text-center space-y-6 sm:space-y-8">
              <h4 className="text-xl font-bold">วัดพระศรีมหาธาตุฯ บางเขน</h4>
              <p className="text-neutral-500">ถ.พหลโยธิน แขวงอนุสาวรีย์</p>
              <a
                href="https://maps.google.com/?q=วัดพระศรีมหาธาตุวรมหาวิหาร"
                target="_blank"
                className="
                  inline-block
                  bg-neutral-900 text-white
                  px-10 sm:px-12
                  py-4 sm:py-5
                  rounded-full
                  font-bold
                  hover:bg-red-600
                  transition-all
                "
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