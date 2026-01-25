"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // ใช้ไอคอนจาก lucide แทนลูกศรธรรมดา
import { motion, AnimatePresence } from "framer-motion"; // ถ้าไม่มีให้ลบส่วนที่เป็น <motion.div> ออกได้ครับ

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // โชว์ปุ่มเมื่อเลื่อนลงมาเกิน 400px
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] group"
          aria-label="Back to top"
        >
          {/* Background Layer with Glow */}
          <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Main Button Body */}
          <div className="relative flex items-center justify-center w-14 h-14 
                        bg-[#161b22]/80 backdrop-blur-xl 
                        border border-white/10 group-hover:border-blue-500/50
                        text-white rounded-2xl shadow-2xl
                        transition-all duration-300 overflow-hidden"
          >
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <ArrowUp 
              size={24} 
              className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300" 
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}