import Link from "next/link";

export default function PlacesGrid() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* ซ้ายบน */}
        <div
          className="relative h-[360px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/145371640_10220381210983902_3102347665599560609_n.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 h-full p-6 md:p-12 flex flex-col justify-center text-white max-w-xl text-center md:text-left">
            <span className="text-xs md:text-sm text-white/70 mb-2">
              เลือก
            </span>

            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              บ้านบางเขน
            </h3>

            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
              แหล่งท่องเที่ยวเชิงวัฒนธรรมสไตล์ย้อนยุค 90’s
              ในกรุงเทพฯ ที่รวบรวมบ้านไม้ ร้านค้า
              และบรรยากาศความทรงจำในอดีต
            </p>

            <Link href="/homebangkhen">
              <button className="mx-auto md:mx-0 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-green-300 text-black text-sm font-medium">
                สำรวจแหล่งท่องเที่ยวย้อนยุค
              </button>
            </Link>
          </div>
        </div>

        {/* ขวาบน */}
        <div
          className="h-[240px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/ban-bang-khen.jpg')" }}
        />

        {/* ซ้ายล่าง */}
        <div
          className="h-[240px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/50958910_10156358334558650_5607502554263977984_n.jpg')" }}
        />

        {/* ขวาล่าง */}
        <div
          className="relative h-[360px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: "url('/487312831_1113572637481069_4899296262058780294_n.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 h-full p-6 md:p-12 flex flex-col justify-center text-white max-w-xl text-center md:text-left">
            <span className="text-xs md:text-sm text-white/70 mb-2">
              เลือก
            </span>

            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              สวนวัชรเบญจทัศ (สวนรถไฟ)
            </h3>

            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
              สวนสาธารณะขนาดใหญ่ใจกลางกรุงเทพฯ
              เหมาะสำหรับพักผ่อน ออกกำลังกาย
              และกิจกรรมกลางแจ้ง
            </p>

            <Link href="/RotfaiPark">
              <button className="mx-auto md:mx-0 w-fit px-6 py-3 rounded-full bg-yellow-300 text-black text-sm font-medium">
                สำรวจแหล่งท่องเที่ยวธรรมชาติ
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
