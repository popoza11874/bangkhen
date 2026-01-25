"use client";

import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function ContentManagePage() {
  const router = useRouter();

  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">🗂️ จัดการเนื้อหา</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="สถานที่ท่องเที่ยว"
          desc="เพิ่ม / แก้ไข / ลบสถานที่"
          onClick={() => router.push("/admin/dashboard")}
        />

        <Card
          title="ข่าว / ประวัติ"
          desc="จัดการบทความ"
          onClick={() => router.push("/admin/dashboard/content/news")}
        />

        <Card
          title="หมวดหมู่"
          desc="จัดการประเภทเนื้อหา"
          onClick={() => alert("ทำต่อได้")}
        />
      </div>
    </main>
  );
}

function Card({ title, desc, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 cursor-pointer"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
