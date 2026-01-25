"use client";

import { useRouter } from "next/navigation";
import { Sparkles, Home } from "lucide-react";

export default function HomeBangkhen() {
  const router = useRouter();

  return (
    <main className="min-h-screen font-sans text-neutral-900 bg-white relative">

      {/* ================= BACK BUTTON ================= */}
      <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[100]">
        <button
          onClick={() => router.back()}
          className="group relative flex items-center gap-2 sm:gap-3 md:gap-4
                     pl-4 sm:pl-5 md:pl-6 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3
                     bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10
                     text-white rounded-full md:rounded-[2rem]
                     overflow-hidden transition-all duration-500
                     hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                     active:scale-95 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-100%]
                            bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3b82f6_360deg)]
                            animate-[spin_4s_linear_infinite]" />
          </div>

          <div className="absolute inset-[1px] bg-[#0a0a0a]/90 rounded-full md:rounded-[2rem] -z-10" />

          <div className="relative flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-black uppercase
                             tracking-[0.2em] sm:tracking-[0.3em]
                             text-blue-400 group-hover:text-white transition-colors">
              ย้อนกลับ
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                            flex items-center justify-center
                            bg-white/5 border border-white/10 rounded-full
                            group-hover:bg-blue-600 group-hover:border-blue-400
                            transition-all duration-300">
              <Home size={18} className="scale-75 sm:scale-90 md:scale-100
                                         group-hover:rotate-[360deg]
                                         transition-transform duration-700" />
            </div>
          </div>
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[80svh] sm:min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="https://i.postimg.cc/TYBX520M/144398697-3601529719902301-1346572400068098228-n.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Baan Bangkhen Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24
                        max-w-4xl text-white pt-24 sm:pt-28 md:pt-0">
          <div className="flex items-center gap-2 text-blue-400 font-bold
                          uppercase text-xs tracking-widest mb-4">
            <Sparkles size={16} /> Vintage Destination
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl
                         font-black mb-4 sm:mb-6 leading-tight">
            บ้านบางเขน
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200
                        leading-relaxed max-w-2xl">
            แหล่งท่องเที่ยวแนววินเทจสไตล์ย้อนยุค 90’s 
            สัมผัสความทรงจำและบรรยากาศวันวานใจกลางกรุงเทพมหานคร
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-10 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-neutral-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://i.postimg.cc/PxgSjD24/bdab3e6c-dee8-4c8f-8c97-7edf1c86ba86-original.jpg",
            "https://i.postimg.cc/nhS5WXfV/dab0bc38-efc4-48a7-88f9-1d02e69c29d2-original.jpg",
            "https://i.postimg.cc/6pqbCB2h/b-a-nbang-khen-2.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-2xl
                         shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={src}
                className="w-full h-full object-cover
                           hover:scale-110 transition-transform duration-700"
                alt="Gallery item"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24
                          max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                           font-black tracking-tight text-neutral-900">
              จุดเริ่มต้นของ <br />
              <span className="text-blue-600">บ้านบางเขน</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl
                          text-neutral-600 leading-relaxed">
              บ้านบางเขนสร้างขึ้นโดย <strong className="text-neutral-900">คุณสมพงษ์ (เฮียกล้วย)</strong> 
              ด้วยความหลงใหลในของสะสมโบราณ เพื่อให้คนรุ่นหลังได้สัมผัสวิถีชีวิตย้อนยุค 
              ผ่านการจัดแสดงร้านค้าจำลองและสิ่งของที่หาชมได้ยากในปัจจุบัน
            </p>
            <div className="h-1 w-16 sm:w-20 bg-blue-600 rounded-full" />
          </div>

          <div className="lg:w-1/2 relative group w-full">
            <div className="absolute -inset-3 sm:-inset-4
                            bg-blue-500/10 rounded-[3rem]
                            blur-2xl group-hover:bg-blue-500/20
                            transition-colors" />
            <img
              src="https://i.postimg.cc/CMJW8Prb/14-1xcsafasfagxgg.jpg"
              className="relative w-full
                         h-[300px] sm:h-[400px] md:h-[500px]
                         object-cover rounded-[2rem] sm:rounded-[2.5rem]
                         shadow-2xl border-8 border-white"
              alt="Story image"
            />
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-8 md:px-16 lg:px-24
                          max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-[3rem]
                        overflow-hidden shadow-2xl border border-neutral-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.123456789!2d100.5855!3d13.8744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUyJzI3LjgiTiAxMDDCsDM1JzA3LjgiRQ!5e0!3m2!1sth!2sth!4v123456789"
            className="w-full h-[280px] sm:h-[350px] md:h-[450px] border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

    </main>
  );
}
