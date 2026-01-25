"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";
export default function CreatePlace() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSave = async () => {
    await supabase.from("places").insert({
      title,
      description,
      image,
    });

    router.push("/admin/dashboard/places");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">➕ เพิ่มสถานที่</h1>

      <div className="space-y-4 max-w-xl">
        <input
          className="w-full p-3 rounded bg-gray-800"
          placeholder="ชื่อสถานที่"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-gray-800"
          placeholder="URL รูปภาพ"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          className="w-full p-3 rounded bg-gray-800"
          placeholder="ประวัติ / รายละเอียด"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="bg-green-600 px-6 py-3 rounded-xl font-bold"
        >
          💾 บันทึก
        </button>
      </div>
    </>
  );
}
