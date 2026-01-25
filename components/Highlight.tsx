import Link from "next/link";

export default function Highlight() {
  return (
    <section
      id="Highlight"
      className="relative w-full min-h-[100vh] md:h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/c086e2db-513d-433c-8c09-4728a38ccbed.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      <div className="relative z-10 h-full px-6 md:px-24 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">

          {/* TEXT */}
          <div className="text-white max-w-xl">
            <span className="text-xs md:text-sm text-white/70 tracking-wider">
              เลือก
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight">
              พิพิธภัณฑ์การฝึกหัดครูไทย
            </h2>

            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              พิพิธภัณฑ์การฝึกหัดครูไทย
              จัดตั้งขึ้นเพื่อรวบรวมและเผยแพร่ประวัติความเป็นมาของ
              การฝึกครูและการศึกษาไทย ตั้งแต่อดีตจนถึงปัจจุบัน
              เพื่อเป็นแหล่งเรียนรู้ทางการศึกษา
            </p>

            <Link href="/teacher-training">
              <button className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-green-300 text-black text-sm font-medium shadow-md hover:scale-105 transition">
                สำรวจแหล่งท่องเที่ยวแห่งประวัติศาสตร์
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm md:max-w-lg h-[240px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img2.pic.in.th/20120210162204DRGv.jpg"
                alt="พิพิธภัณฑ์การฝึกหัดครูไทย"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
