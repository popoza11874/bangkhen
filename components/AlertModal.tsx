"use client";

import { useEffect } from "react";

type AlertModalProps = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};

export default function AlertModal({
  message,
  type = "error",
  onClose,
}: AlertModalProps) {
  const isSuccess = type === "success";

  // ปิด Modal อัตโนมัติถ้าเป็น success (เช่น หลังจาก 2 วินาที)
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={!isSuccess ? onClose : undefined}
      />

      {/* Modal Card */}
      <div className="relative bg-[#161b22]/90 border border-white/5 backdrop-blur-2xl text-white w-full max-w-[360px] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform animate-in zoom-in-95 duration-200">
        <div className="flex flex-col items-start">
          
          {/* Success State */}
          {isSuccess ? (
            <div className="w-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-[#00e676] text-xl font-bold tracking-tight">
                  เข้าสู่ระบบสำเร็จ
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-medium leading-relaxed ml-11">
                {message}
              </p>
            </div>
          ) : (
            /* Error State */
            <div className="w-full">
              <div className="flex items-center gap-3 mb-4 text-red-400">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                  <span className="text-lg">⚠️</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">แจ้งเตือน</h3>
              </div>
              
              <p className="text-gray-300 text-sm font-medium mb-8 ml-11">
                {message}
              </p>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold shadow-lg shadow-red-900/20 transition-all active:scale-[0.98]"
              >
                ตกลง
              </button>
            </div>
          )}
          
        </div>

        {/* ตกแต่งด้วยแสงเรืองรองจางๆ */}
        <div className={`absolute -z-10 inset-0 blur-3xl opacity-10 rounded-full ${isSuccess ? 'bg-emerald-500' : 'bg-red-500'}`} />
      </div>
    </div>
  );
}