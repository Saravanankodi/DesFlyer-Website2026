import { useState } from "react";
import { motion } from "framer-motion";
import MuseumCard from "./MuseumCard";

const galleries = [
  {
    title: "Facebook Art",
    year: "2004 - Present",
    image: "/images/logo.png",
    color: "#4F75FF",
  },
  {
    title: "Youtubism",
    year: "2005 - Present",
    image: "/images/logo.png",
    color: "#FF5757",
  },
  {
    title: "Twitt Art",
    year: "2006 - Present",
    image: "/images/logo.png",
    color: "#4A8EFF",
  },
  {
    title: "Instagramism",
    year: "2010 - Present",
    image: "/images/logo.png",
    color: "#FF6BCE",
  },
];

export default function DigitalMuseum() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-100" />

      {/* Header */}

      <div className="absolute top-10 left-12 z-50">
        <p className="tracking-[5px] text-xs text-gray-400 uppercase">
          Museum of
        </p>

        <h1 className="text-xl font-black">
          Digital Influence
        </h1>
      </div>

      {/* Gallery */}

      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex gap-28">
        {galleries.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
          >
            <MuseumCard
              {...card}
              active={active === index}
            />
          </div>
        ))}
      </div>

      {/* Floor */}

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="absolute bottom-[-280px] left-1/2 -translate-x-1/2 w-[1700px] h-[650px] rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-[0_-40px_100px_rgba(0,0,0,.08)]"
      />

      {/* Timeline */}

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-16">
        {galleries.map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center"
          >
            <div
              className={`w-3 h-3 rounded-full ${ active === i ? "bg-black" : "bg-gray-300" }`}
            />

            <div className="mt-3 text-xs text-gray-500">
              {2004 + i}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}