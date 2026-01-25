"use client";

import { useEffect, useState, useRef } from "react";

const places = [
  {
    name: "มหาวิทยาลัยเกษตรศาสตร์ (บางเขน)",
    desc: "เป็นสถาบันอุดมศึกษาทางการเกษตรแห่งแรกของไทย ก่อตั้งขึ้นเมื่อ พ.ศ. 2487 โดดเด่นด้วยบรรยากาศร่มรื่นและนวัตกรรมทางการเกษตร",
    image: "/HowtoKU08.jpg",
    map: "https://www.google.com/maps?q=มหาวิทยาลัยเกษตรศาสตร์ บางเขน&output=embed",
  },
  {
    name: "วัดพระศรีมหาธาตุวรมหาวิหาร",
    desc: "พระอารามหลวงชั้นเอกที่มีความสำคัญยิ่ง เป็นสัญลักษณ์แห่งประวัติศาสตร์การเมืองไทยและการเผยแผ่ศาสนา",
    image: "/watphrasimahathat_view1.jpg",
    map: "https://www.google.com/maps?q=วัดพระศรีมหาธาตุวรมหาวิหาร&output=embed",
  },
  {
    name: "บ้านบางเขน",
    desc: "แหล่งเรียนรู้วิถีชีวิตในอดีต รวบรวมของสะสมโบราณและมุมถ่ายรูปย้อนยุคที่หาดูได้ยากในปัจจุบัน",
    image: "/ban-bang-khen.jpg",
    map: "https://www.google.com/maps?q=บ้านบางเขน,บางเขน,กรุงเทพมหานคร,ประเทศไทย&output=embed",
  },
  {
    name: "สวนวัชรเบญจทัศ (สวนรถไฟ)",
    desc: "สวนสาธารณะขนาดใหญ่ใจกลางกรุงเทพฯ พื้นที่สีเขียวที่เหมาะสำหรับการปั่นจักรยานและพักผ่อนหย่อนใจ",
    image: "/45e492e4-0a01-4f45-a7ed-1f2790cbbd0a.jpg",
    map: "https://www.google.com/maps?q=สวนวัชรเบญจทัศ (สวนรถไฟ)&output=embed",
  },
  {
    name: "พิพิธภัณฑ์กองทัพอากาศ",
    desc: "พิพิธภัณฑ์ที่รวบรวมประวัติศาสตร์การบินและอากาศยานหายากของไทย พร้อมการจัดแสดงที่น่าตื่นตาตื่นใจ",
    image: "/6f1aee8d-c883-4afd-8f96-e48d45ec0f1b.jpg",
    map: "https://www.google.com/maps?q=พิพิธภัณฑ์กองทัพอากาศและการบินแห่งชาติ&output=embed",
  },
];

export default function Explore() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const place = places[index];

  const filteredPlaces = places.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const target = filteredPlaces[0];
    if (!target) return;
    setIndex(places.findIndex(p => p.name === target.name));
    setSearchQuery("");
    setShowResults(false);
  };

  useEffect(() => {
    if (paused || searchQuery) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % places.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, searchQuery]);

  return (
    <section
      id="Explore"
      className="bg-[#f8f9fa] py-16 md:py-24 px-4 md:px-24 overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
  <h3
    className="
      text-3xl md:text-5xl
      font-extrabold
      mb-4
      leading-tight md:leading-[1.15]
      tracking-tight
      text-black
    "
  >
    ค้นหาและสำรวจบางเขน
  </h3>
        <p className="text-sm md:text-lg text-gray-500">
          สำรวจแลนด์มาร์คสำคัญและพื้นที่ประวัติศาสตร์
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
        {/* MAP */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="bg-white p-3 md:p-4 rounded-3xl shadow-xl">
            <div className="h-[280px] md:h-[550px] rounded-2xl overflow-hidden">
              <iframe
                key={place.map}
                src={place.map}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
          <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-xl">
            <div className="h-48 md:h-64 overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 md:p-8">
              <h5 className="text-lg md:text-2xl font-bold text-white mb-2">
                {place.name}
              </h5>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 mb-6">
                {place.desc}
              </p>

              <button
                onClick={() => setPaused(!paused)}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm"
              >
                {paused ? "▶ เล่นต่อ" : "⏸ หยุดชั่วคราว"}
              </button>
            </div>
          </div>

          {/* SEARCH */}
          <div className="flex gap-3">
            <button
              onClick={handleSearch}
              className="p-4 rounded-xl bg-white border hover:bg-black hover:text-white"
            >
              🔍
            </button>
<input
  ref={inputRef}
  type="text"
  placeholder="ค้นหาสถานที่..."
  value={searchQuery}
  onChange={(e) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  }}
  className="
    flex-1 p-4 rounded-xl border
    text-neutral-900
    placeholder:text-neutral-400
    bg-white
    focus:outline-none
    focus:ring-2 focus:ring-black/10
  "
/>
          </div>
        </div>
      </div>
    </section>
  );
}
