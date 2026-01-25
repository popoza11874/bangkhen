// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/watphrasimahathat_view1.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div
        className="
          relative z-10
          min-h-screen
          flex flex-col md:flex-row
          items-start md:items-center
          justify-center
          px-6 md:px-24
          pt-28 md:pt-0
          gap-10
        "
      >
        {/* ฝั่งซ้าย */}
        <div className="max-w-xl">
          <h2
            className="
              font-bold
              text-4xl leading-tight
              md:text-[72px] md:leading-tight
              mb-4 md:mb-6
            "
          >
            สถานที่ท่องเที่ยว
          </h2>

          <p
            className="
              text-sm leading-relaxed
              md:text-lg
              text-white/90
            "
          >
            จากสถานที่ประวัติศาสตร์ในชุมชนบางเขน
            ไปจนถึงแลนด์มาร์คสำคัญของท้องถิ่น
            ร่วมสำรวจเรื่องราวเบื้องหลังแหล่งท่องเที่ยว
            และสัญลักษณ์ที่สะท้อนวิถีชีวิต วัฒนธรรม
            และความทรงจำของชาวบางเขน
          </p>
        </div>

        {/* marker ด้านขวา */}
        <div className="md:ml-auto max-w-sm">
          <Link
            href="/wat-phra-sri"
            className="group flex items-start gap-3 cursor-pointer"
          >
            {/* วงกลม marker */}
            <span
              className="
                mt-1 w-4 h-4
                rounded-full
                border-2 border-white
                flex items-center justify-center
                drop-shadow-md
                group-hover:scale-125
                transition
              "
            >
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>

            {/* ข้อความ */}
            <div>
              <h4 className="font-semibold group-hover:underline">
                วัดพระศรีมหาธาตุวรมหาวิหาร
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                ได้รับอนุญาตให้ตั้งเป็นสำนักสงฆ์
                เมื่อวันที่ 20 มีนาคม พ.ศ. 2484
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
