"use client";

import { motion } from "framer-motion";
const educations = [
  {
    school: "SMEA PGRI 16 CIKOKOL",
    location: "Tangerang",
  },
  {
    school: "SMPN 197 KEDOYA",
    location: "Jakarta",
  },
  {
    school: "SDN GATAK 1 DELANGGU",
    location: "Jawa Tengah",
  },
];

export default function EducationSection() {
  return (
    <section className="container mx-auto font-sans py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Pendidikan
        </h1>
        <p className="text-sm text-muted-foreground-1 mt-2">
          Riwayat pendidikan formal yang membentuk dasar keahlian dan
        pengembangan profesional saya.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Neon Line */}
        <div className="absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-start md:items-center"
            >
              {/* Glowing Dot */}
              <div className="relative z-10 mb-6">
                <div className="size-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_#8b5cf6]" />
              </div>

              {/* Glass Card */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 w-full text-left md:text-center shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition">
                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  {edu.year}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2">
                  {edu.school}
                </h3>
                <p className="text-sm text-muted-foreground-1">
                  {edu.major}
                </p>
                <p className="text-xs text-muted-foreground-2 mt-2">
                  📍 {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
