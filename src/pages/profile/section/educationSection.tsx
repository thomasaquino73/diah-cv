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
    <section className="container mx-auto font-sans py-20">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Pendidikan</h1>
      <p className="text-sm text-neutral-500 mb-12">
        Riwayat pendidikan formal yang membentuk dasar keahlian dan pengembangan
        profesional saya.
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Garis */}
        <div className="absolute top-6 left-0 right-0 h-[2px] bg-line-2 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start md:items-center"
            >
              {/* Dot */}
              <div className="size-4 rounded-full bg-surface-3 z-10 mb-4 md:mb-6" />

              {/* Card */}
              <div className="bg-background border border-line-2 rounded-xl p-5 shadow-sm w-full text-left md:text-center">
                <span className="text-xs uppercase text-muted-foreground-1">
                  {edu.year}
                </span>
                <h3 className="font-semibold text-foreground mt-1">
                  {edu.school}
                </h3>
                <p className="text-sm text-gray-500">{edu.major}</p>
                <p className="text-xs text-gray-400 mt-1">📍 {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
