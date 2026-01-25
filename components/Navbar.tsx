"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur">
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          {/* LOGO */}
          <Link
            href="/"
            className="font-bold text-white text-base md:text-lg tracking-normal"
          >
            ท่องเที่ยวบางเขน
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-sm text-white/90 font-medium">
            <li><Link className="hover:text-white" href="#Explore">สำรวจบางเขน</Link></li>
            <li><Link className="hover:text-white" href="#Highlight">ประวัติศาสตร์</Link></li>
            <li><Link className="hover:text-white" href="#Recommend">เที่ยวไหนดี</Link></li>
            <li><Link className="hover:text-white" href="#NewsSection">อัปเดตสถานที่</Link></li>
            <li><Link className="hover:text-white" href="#About">เกี่ยวกับเรา</Link></li>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0b0f14] z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-8 text-white">
          <button
            className="self-end text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <nav className="flex flex-col gap-6 text-lg font-medium leading-relaxed">
            <Link onClick={() => setOpen(false)} href="#Explore">สำรวจบางเขน</Link>
            <Link onClick={() => setOpen(false)} href="#Highlight">ประวัติศาสตร์</Link>
            <Link onClick={() => setOpen(false)} href="#Recommend">เที่ยวไหนดี</Link>
            <Link onClick={() => setOpen(false)} href="#NewsSection">อัปเดตสถานที่</Link>
            <Link onClick={() => setOpen(false)} href="#Subscribe">ติดต่อเรา</Link>
            <Link onClick={() => setOpen(false)} href="#About">เกี่ยวกับเรา</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
