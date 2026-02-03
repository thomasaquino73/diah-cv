const workExperiences = [
  {
    year: "2024 - 2025",
    company: "PT ATRAN INDONESIA",
    role: "Ka. Pool",
    location: "Jakarta, Indonesia",
  },
  {
    year: "2022 - 2023",
    company: "PT. CHARISE DEO INDONESIA",
    role: "Kepala Gudang",
    location: "Tangerang, Indonesia",
  },
  {
    year: "2013 - 2020",
    company: "PT. PRATAMA ADIJAYA STEEL",
    role: "Staff Finance",
    location: "Tangerang Selatan, Indonesia",
  },
  {
    year: "2010 - 2013",
    company: "PT. DAYA SEMESTA PELANGI",
    role: "Staff Purchasing",
    location: "Tangerang, Indonesia",
  },
  {
    year: "1994 - 2000",
    company: "PT. PEARLAND",
    role: "Staff Administrasi Produk",
    location: "Jakarta, Indonesia",
  },
  {
    year: "1993 - 1994",
    company: "PT. GREAT RIVER INDUSTRIES",
    role: "Operator",
    location: "Jakarta, Indonesia",
  },
];

export default function WorkSection() {
  return (
    <section className="container mx-auto bg-grey-100 font-sans min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-2 text-foreground">
        Pengalaman Kerja
      </h1>
      <p className="text-sm text-neutral-500 mb-10">
        An overview of my professional work experience, focusing on
        responsibilities, technical expertise, and contributions to
        organizational goals.
      </p>

      <div className="w-full">
        {workExperiences.map((item, index) => (
          <div key={index}>
            {/* Heading */}
            <div className="ps-2 my-2">
              <h3 className="text-xs font-medium uppercase text-muted-foreground-1">
                {item.year}
              </h3>
            </div>

            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-surface-3" />
                </div>
              </div>

              {/* Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-medium text-foreground">
                  {item.company}
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.location}
                  </span>
                </h3>
                <small className="text-xs text-gray-500">{item.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
