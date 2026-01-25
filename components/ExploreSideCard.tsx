"use client";

import { useEffect, useState } from "react";

const places = [
  {
    title: "มหาวิทยาลัยเกษตรศาสตร์ (บางเขน)",
    desc: "เป็นสถาบันอุดมศึกษาทางการเกษตรแห่งแรกของไทย ก่อตั้งขึ้นเมื่อ พ.ศ. 2487",
    image: "/kasetsart-university-scholarship-01.jpg",
  },
  {
    title: "วัดพระศรีมหาธาตุวรมหาวิหาร",
    desc: "วัดสำคัญประจำเขตบางเขน และเป็นสถานที่ทางประวัติศาสตร์",
    image: "/watphrasimahathat_view1.jpg",
  },
  {
    title: "ตลาดนัดบางเขน",
    desc: "ชุมชนตลาดยามค่ำคืนที่มีอายุกว่า 100 ปี",
    image: "/ban-bang-khen.jpg",
  },
];

export default function ExploreSideCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % places.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const place = places[index];

  return (
    <div className="w-[380px] bg-[#0B1530] rounded-2xl overflow-hidden shadow-lg">
      <img
        src={place.image}
        alt={place.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6 text-white">
        <p className="text-xs text-white/60 mb-2">About</p>

        <h3 className="text-lg font-semibold mb-2">
          {place.title}
        </h3>

        <p className="text-sm text-white/80 leading-relaxed mb-4">
          {place.desc}
        </p>

        <div className="flex gap-3">
          <button className="flex-1 bg-white text-black rounded-full py-2 text-sm font-medium">
            ค้นหาในบางเขน
          </button>
          <button className="px-4 rounded-full bg-white/10 text-white text-sm">
            สำรวจ
          </button>
        </div>
      </div>
    </div>
  );
}
