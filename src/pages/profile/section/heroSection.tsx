"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/router";

export default function HeroSection() {
  const { push } = useRouter();
  const handlerProject = () => {
    push("https://wa.me/6285591634682");
  };
  const handlerCV = () => {
    push("/cv");
  };
  return (
    <section className="relative overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="relative container mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <span className="text-xs tracking-[0.35em] text-muted-foreground">
            PROFILE
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <br />
            <span className="block mt-2">Diah Susanti.</span>
          </h1>

          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            Saya adalah seorang profesional dengan pengalaman kerja lebih dari
            20 tahun di bidang administrasi, purchasing, dan keuangan. Terbiasa
            bekerja dengan rapi, teliti, dan bertanggung jawab dalam mengelola
            data, dokumen, serta laporan administrasi dan keuangan. Saya mampu
            bekerja secara mandiri maupun dalam tim, memiliki komitmen kerja
            yang baik, serta siap berkontribusi secara maksimal untuk mendukung
            operasional perusahaan.
          </p>

          {/* INFO CARDS */}
          {/* <div className="mt-8 flex flex-wrap gap-4">
            <InfoCard label="FOCUS" value="Cloud & Software Engineer" />
            <InfoCard label="EXPERIENCE" value="~5 Years" />
          </div> */}

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <button
              onClick={() => handlerProject()}
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white hover:bg-black/90 transition delay-150 duration-300 ease-in-out"
            >
              Hubungi saya <ArrowDown size={18} />
            </button>
            <button
              onClick={() => handlerCV()}
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 hover:bg-muted transition delay-150 duration-300 ease-in-out"
            >
              Lihat CV <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center  ">
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-purple-200 blur-3xl opacity-40" />

            {/* avatar */}
            <div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px] rounded-full border-4 border-white bg-white overflow-hidden drop-shadow-md">
              <Image
                src="/diah.jpeg"
                alt="Profile"
                fill
                className="object-cover animate-pulse duration-300"
              />
            </div>

            {/* badge */}
            <div className="absolute bottom-6 right-0 flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-xs font-medium">OPEN TO WORK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
