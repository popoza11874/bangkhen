type CardProps = {
  image: string;
  title: string;
  desc: string;
};

export function Card({ image, title, desc }: CardProps) {
  return (
    <div className="group relative h-[380px] rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-white/80">{desc}</p>
      </div>
    </div>
  );
}
