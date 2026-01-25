"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import AlertModal from "@/components/AlertModal";

export const dynamic = "force-dynamic";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      setAlert({ message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง", type: "error" });
      setLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError || profile.role !== "admin") {
      await supabase.auth.signOut();
      setAlert({ message: "คุณไม่มีสิทธิ์เข้าใช้งานในส่วนผู้ดูแลระบบ", type: "error" });
      setLoading(false);
      return;
    }

    setAlert({ message: "กำลังเข้าสู่ระบบผู้ดูแลระบบ...", type: "success" });
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 1200);
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105 opacity-40"
        style={{ backgroundImage: "url('https://i.postimg.cc/TYBX520M/144398697-3601529719902301-1346572400068098228-n.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/60 to-black" />

      {/* Login Card */}
      <div className="relative z-20 w-full max-w-md p-4">
        <div className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl text-white">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              Login <span className="text-blue-500">Admin</span>
            </h1>
            <p className="text-gray-400 text-sm">ยินดีต้อนรับเข้าสู่ระบบจัดการการท่องเที่ยว</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1 text-gray-300">Email Address</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="name@travel.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1 text-gray-300">Password</label>
              <input
                type="password"
                className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* ปุ่มเปลี่ยนเป็นสี Blue-600 เพื่อให้เข้ากับ Dashboard */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" />
                  กำลังตรวจสอบ...
                </span>
              ) : "Sign In"}
            </button>
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p className="text-xs">
              &copy; 2026 Travel Admin Panel. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Glow Effect รัศมีสีน้ำเงินจางๆ */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {alert && (
        <AlertModal
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </main>
  );
}