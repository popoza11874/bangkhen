"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { NewsCard } from "./NewsCard";

type Place = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  people: string;
  location: string;
  slug: string;
};

export default function NewsSection() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      const { data, error } = await supabase
        .from("places")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data) {
        setPlaces(data);
      }
      setLoading(false);
    };

    fetchPlaces();
  }, []);

  if (loading) return null;

  return (
    <section
      id="NewsSection"
      className="bg-white px-6 md:px-24 py-24 md:py-40 relative overflow-hidden"
    >
      {/* HEADER (เหมือนเดิม) */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-8xl font-black mb-20">
          LATEST <span className="text-neutral-300">MOVEMENTS.</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {places.map((p, i) => (
            <div key={p.id}>
              <div className="mb-6 flex justify-between items-end border-b pb-4">
                <span className="text-red-600 font-mono font-bold">
                  {String(i + 1).padStart(2, "0")} / {p.category}
                </span>
                <span className="text-xs text-neutral-400 font-bold">
                  UPDATE NOW
                </span>
              </div>

              <Link href={`/${p.slug}`}>
                <NewsCard
                  image={p.image}
                  title={p.name}
                  desc={p.description}
                  people={p.people}
                  location={p.location}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
