export default function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* CONTENT */}
      <div className="px-6 md:px-24 py-16 md:py-24
                      grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

        {/* COLUMN 1 */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-wide">
            ท่องเที่ยวบางเขน
          </h3>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            เว็บไซต์แนะนำสถานที่สำคัญทางประวัติศาสตร์
            วัฒนธรรม และการท่องเที่ยวในเขตบางเขน
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-4">
            เมนู
          </h4>
          <ul className="space-y-3 text-white/70 text-sm md:text-base">
            <li className="hover:text-white transition cursor-pointer">สำรวจ</li>
            <li className="hover:text-white transition cursor-pointer">ประวัติศาสตร์</li>
            <li className="hover:text-white transition cursor-pointer">เที่ยวไหนดี</li>
            <li className="hover:text-white transition cursor-pointer">อัพเดตสถานที่</li>
            <li className="hover:text-white transition cursor-pointer">ติดต่อเรา</li>
            <li className="hover:text-white transition cursor-pointer">เกี่ยวกับเรา</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-4">
            ติดต่อ
          </h4>
          <ul className="space-y-3 text-white/70 text-sm md:text-base">
            <li>📍 เขตบางเขน กรุงเทพมหานคร</li>
            <li>📧 zxcvbngunzapan@gmail.com</li>
            <li>📞 08X-XXX-XXXX</li>
          </ul>

          {/* SOCIAL */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm">
              Facebook
            </button>
            <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm">
              Instagram
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 text-center text-white/50 text-xs md:text-sm">
        © 2026 เว็บไซต์แนะนำสถานที่สำคัญเขตบางเขน | เพื่อการศึกษา
      </div>

    </footer>
  );
}
