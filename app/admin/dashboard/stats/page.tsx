"use client";

import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabaseClient";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// 1. กำหนด Interface เพื่อให้ TypeScript รู้จักโครงสร้างข้อมูล
interface Place {
  id: string;
  name: string;
  category: string;
  image: string | null;
  location?: string;
}

interface ChartData {
  name: string;
  value: number;
}

export default function StatsPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await supabase.from("places").select("*");
      if (data) setPlaces(data as Place[]);
      setLoading(false);
    };
    fetchStats();
  }, []);

  // 2. ใช้ useMemo เพื่อคำนวณสถิติและระบุ Type ให้ชัดเจน (แก้ Error unknown)
  const stats = useMemo(() => {
    const total = places.length;
    const withImg = places.filter((p) => p.image).length;
    
    // คำนวณหมวดหมู่
    const cats = places.reduce((acc: Record<string, number>, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});

    const catData: ChartData[] = Object.entries(cats).map(([name, value]) => ({
      name,
      value,
    }));

    // คำนวณสถานที่ยอดนิยม
    const byLoc = places.reduce((acc: Record<string, number>, p) => {
      if (!p.location) return acc;
      acc[p.location] = (acc[p.location] || 0) + 1;
      return acc;
    }, {});
    const topLoc = Object.entries(byLoc).sort((a, b) => b[1] - a[1])[0] || ["-", 0];

    return {
      total,
      withImg,
      topLoc,
      catData: catData.sort((a, b) => b.value - a.value),
      pieData: [
        { name: "มีรูปภาพ", value: withImg },
        { name: "ไม่มีรูปภาพ", value: total - withImg },
      ],
      latest: [...places].slice(-5).reverse(),
    };
  }, [places]);

  if (loading) return <div className="min-h-[400px] flex items-center justify-center text-indigo-500 animate-pulse font-bold text-sm">กำลังคำนวณสถิติ...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-10 text-white min-h-screen">
      <header>
        <h1 className="text-4xl font-extrabold flex items-center gap-3 italic uppercase tracking-tighter">
          <span className="bg-indigo-500/20 p-2 rounded-xl not-italic">📊</span> 
          Dashboard Stats
        </h1>
        <p className="text-gray-500 mt-2 text-sm tracking-widest uppercase">System Analytics Overview</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="สถานที่ทั้งหมด" value={stats.total} icon="📍" color="bg-blue-500" />
        <StatCard 
          title="ความสมบูรณ์ข้อมูล" 
          value={`${stats.total > 0 ? ((stats.withImg / stats.total) * 100).toFixed(0) : 0}%`} 
          icon="⚡" 
          color="bg-emerald-500" 
          subtext={`มีรูป ${stats.withImg} จาก ${stats.total} รายการ`} 
        />
        <StatCard title="พื้นที่ยอดนิยม" value={stats.topLoc[1]} icon="🏆" color="bg-orange-500" subtext={stats.topLoc[0] as string} />
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartBox title="หมวดหมู่ทั้งหมด">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.catData}>
              <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{background: '#111827', border: 'none', borderRadius: '12px'}} />
              <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </ChartBox>
        <ChartBox title="สัดส่วนรูปภาพ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={stats.pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                <Cell fill="#10b981" />
                <Cell fill="#1f2937" />
              </Pie>
              <Tooltip contentStyle={{background: '#111827', border: 'none', borderRadius: '12px'}} />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-sm font-bold mb-6 uppercase text-indigo-400 tracking-widest">Classification</h2>
          <div className="space-y-4">
            {stats.catData.map((c) => (
              <div key={c.name} className="space-y-1">
                <div className="flex justify-between text-xs font-bold uppercase">
                  <span className="text-gray-400">{c.name}</span>
                  <span className="text-indigo-400">{c.value} รายการ</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${(c.value / stats.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-sm font-bold mb-6 uppercase text-emerald-400 tracking-widest">Recent Activity</h2>
          <div className="space-y-3">
            {stats.latest.map((p) => (
              <div key={p.id} className="flex items-center gap-4 bg-gray-800/30 border border-gray-700/50 rounded-xl p-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
                  {p.image ? <img src={p.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="" /> : <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">NO PIC</div>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate uppercase">{p.name}</p>
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">{p.category}</p>
                </div>
                <div className="text-indigo-500 text-xs">→</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// แก้ไข Error: Cannot find name 'h2' และระบุ Type สำหรับ Component ย่อย
const StatCard = ({ title, value, icon, color, subtext }: { title: string, value: any, icon: string, color: string, subtext?: string }) => (
  <div className="relative overflow-hidden bg-gray-900/40 border border-gray-800 rounded-2xl p-6 transition-colors hover:border-gray-700">
    <div className={`absolute top-0 right-0 w-20 h-20 ${color} opacity-[0.03] -mr-8 -mt-8 rounded-full blur-3xl`} />
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{title}</p>
        <p className="text-4xl font-black italic mt-1">{value}</p>
        {subtext && <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase">{subtext}</p>}
      </div>
      <div className="text-2xl p-2 bg-gray-800/50 rounded-xl border border-gray-700/50">{icon}</div>
    </div>
  </div>
);

const ChartBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 h-[320px]">
    <h2 className="text-xs font-black mb-6 uppercase italic text-gray-400 tracking-[0.2em]">{title}</h2>
    <div className="h-[220px]">{children}</div>
  </div>
);