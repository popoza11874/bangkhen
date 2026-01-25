type NewsCardProps = {
  image?: string;
  title: string;
  desc: string;
  people?: string;
  location?: string;
};

export function NewsCard({
  image,
  title,
  desc,
  people,
  location,
}: NewsCardProps) {

  // ✅ clean + fallback image
  const bgImage =
    image && image.trim() !== ""
      ? image.trim()
      : "/placeholder.jpg"; // 👉 ใส่รูป fallback ไว้ใน public/

  return (
    <div className="relative h-[420px] rounded-2xl overflow-hidden group bg-gray-200">
      
      {/* image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-white/80 line-clamp-2 mb-4">
          {desc}
        </p>

        <div className="flex items-center gap-4 text-xs text-white/80">
          {people && <span>👥 {people}</span>}
          {location && <span>📍 {location}</span>}
        </div>
      </div>
    </div>
  );
}
