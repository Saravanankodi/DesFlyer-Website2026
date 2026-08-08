import { motion } from "framer-motion";

export default function MuseumCard({
  title,
  year,
  image,
  color = "#5A8DFF",
  active,
}) {
  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.88,
        opacity: active ? 1 : 0.45,
        y: active ? -25 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="relative flex-shrink-0 w-[320px] h-[470px]"
    >
      {/* Heading */}

      <div className="absolute -top-20 left-0 z-30">
        <h2 className="text-3xl font-black">{title}</h2>
        <p className="text-gray-500">{year}</p>
      </div>

      {/* Glow */}

      <div
        className="absolute inset-0 rounded-t-[170px] blur-3xl opacity-40"
        style={{
          background: color,
        }}
      />

      {/* Card */}

      <div
        className="relative h-full overflow-hidden rounded-t-[170px] border border-white/50"
        style={{
          background: `linear-gradient(180deg,
          ${color}55,
          rgba(255,255,255,.45))`,
          backdropFilter: "blur(18px)",
        }}
      >
        <img
          src={image}
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Frost */}

        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

        {/* Reflection */}

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>
    </motion.div>
  );
}