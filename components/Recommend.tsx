import { Card } from "./Card";
import Link from "next/link";

export default function Recommend() {
  return (
    <section
      id="Recommend"
      className="bg-white px-6 md:px-24 py-20 md:py-40 relative overflow-hidden font-sans"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-10%] text-[25vw] md:text-[15vw] font-black text-neutral-100 opacity-20 select-none pointer-events-none tracking-tighter">
        แนะนำ
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-20 md:mb-32">
          <div className="flex flex-col gap-2 mb-6 md:mb-8">
            <span className="text-red-600 font-bold text-xs md:text-sm tracking-[0.3em] uppercase">
              // คัดสรรพิเศษ
            </span>
            <div className="h-[2px] w-16 md:w-20 bg-red-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Title */}
            <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-neutral-950 leading-[0.9] tracking-tighter">
              จุด <br />
              <span className="inline-block md:translate-x-20 text-red-600">
                เด่น.
              </span>
            </h2>

            <div className="lg:pt-20">
              <p className="text-xl md:text-3xl text-neutral-950 leading-tight font-black mb-4 md:mb-6 italic">
                "บางเขนในมุมมองที่คุณไม่เคยเห็น"
              </p>
              <p className="text-base md:text-xl text-neutral-600 leading-relaxed max-w-md font-medium border-l-4 border-neutral-100 pl-6 md:pl-8">
                เราคัดสรรสถานที่ที่เปี่ยมด้วยเอกลักษณ์และเรื่องราว
                เพื่อให้ทุกการเดินทางของคุณมีความหมายมากกว่าแค่การไปเยือน
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 relative">

          {/* Card 01 */}
          <div className="group relative">
            <div className="hidden md:block absolute -top-10 left-0 text-[120px] font-black text-neutral-50 group-hover:text-red-50 transition-all duration-700 z-0">
              ๐๑
            </div>
            <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-4">
              <Link href="/pa-klang-pa">
                <Card
                  image="1726734267746-AW_--04.jpg"
                  title="ตลาดลับกลางป่า"
                  desc="สัมผัสกลิ่นอายชุมชนตลาดยามค่ำคืนที่มีอายุกว่า 100 ปี"
                />
              </Link>
              <div className="mt-4 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Card 02 */}
          <div className="group relative lg:mt-32">
            <div className="hidden md:block absolute -top-10 left-0 text-[120px] font-black text-neutral-50 group-hover:text-red-50 transition-all duration-700 z-0">
              ๐๒
            </div>
            <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-4">
              <Link href="/air-force">
                <Card
                  image="https://img5.pic.in.th/file/secure-sv1/969924_3317678038170_527200805_n.jpg"
                  title="พิพิธภัณฑ์กองทัพอากาศ"
                  desc="ทะยานสู่ประวัติศาสตร์การบินไทยที่รวมอากาศยานหายากที่สุด"
                />
              </Link>
              <div className="mt-4 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Card 03 */}
          <div className="group relative lg:mt-16">
            <div className="hidden md:block absolute -top-10 left-0 text-[120px] font-black text-neutral-50 group-hover:text-red-50 transition-all duration-700 z-0">
              ๐๓
            </div>
            <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-4">
              <Link href="/home-made">
                <Card
                  image="https://img5.pic.in.th/file/secure-sv1/77e66583cbd6d6ba22e2d2c61f5b961b.jpg"
                  title="โอยั๊วะ Home Made"
                  desc="โอเอซิสกลางกรุงกับอาหารสไตล์ฟิวชันในบ้านไม้สุดคลาสสิก"
                />
              </Link>
              <div className="mt-4 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 md:mt-40 flex justify-center">
          <button className="group relative px-10 md:px-20 py-4 md:py-6 border border-neutral-200 overflow-hidden bg-white hover:border-neutral-950 transition-all duration-500">
            <div className="absolute inset-0 w-0 bg-neutral-950 transition-all duration-500 group-hover:w-full" />
            <span className="relative z-10 text-neutral-950 group-hover:text-white font-black tracking-widest text-sm md:text-lg">
              สำรวจสถานที่ทั้งหมด
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
