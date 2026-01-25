"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: auth } = await supabase.auth.getUser();

      if (!auth.user) {
        router.replace("/admin/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", auth.user.id)
        .single();

      if (profile?.role !== "admin") {
        router.replace("/");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="flex min-h-screen bg-[#0f1115] text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#161b22] border-r border-gray-800 p-6 hidden md:block">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-10">
          TRAVEL ADMIN
        </div>

        <nav className="space-y-2">
          <NavItem
            title="หน้าหลัก"
            active={pathname === "/admin/dashboard"}
            onClick={() => router.push("/admin/dashboard")}
          />
          <NavItem
            title="จัดการสถานที่"
            active={pathname.startsWith("/admin/dashboard/places")}
            onClick={() => router.push("/admin/dashboard/places")}
        />

          <NavItem
            title="คลังสื่อ"
            active={pathname.includes("/media")}
            onClick={() => router.push("/admin/dashboard/media")}
          />
          <NavItem
            title="สถิติพื้นฐาน"
            active={pathname.includes("/stats")}
            onClick={() => router.push("/admin/dashboard/stats")}
          />
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}

/* ---- Sidebar Item ---- */
function NavItem({
  title,
  active,
  onClick,
}: {
  title: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 rounded-xl cursor-pointer transition
        ${
          active
            ? "bg-blue-600/10 text-blue-400 font-bold"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`}
    >
      {title}
    </div>
  );
}
