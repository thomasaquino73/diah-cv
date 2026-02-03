export default function WorkSection() {
  return (
    <>
      <div className="container mx-auto bg-grey-100 font-sans min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-2 text-foreground ">
          Work Experience
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          An overview of my professional work experience, focusing on
          responsibilities, technical expertise, and contributions to
          organizational goals.
        </p>
        {/* {/* Timeline  */}
        <div className="w-full">
          {/* Heading */}
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-muted-foreground-1">
              August 2025 – December 2025
            </h3>
          </div>
          {/* End Heading */}
          {/* Item */}
          <div className="flex gap-x-3 ">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-surface-3"></div>
              </div>
            </div>
            {/* End Icon */}

            {/* Right Content */}
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-medium text-foreground">
                Berita Jakarta
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
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Jakarta, Indonesia
                </span>
              </h3>
              <small className="text-xs  text-gray-500">
                Backend Developer
              </small>
              {/* <p className="mt-1 text-sm md:text-base text-muted-foreground"></p> */}
              <p className="mt-1 text-sm md:text-2xl">
                Played a key role in the development and maintenance of the
                backend system for the official news portal of the DKI Jakarta
                Provincial Government. Responsible for ensuring application
                stability, security, and optimal performance to support fast and
                accurate public information delivery.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none"
              >
                <div className="mt-2 -ms-1 flex flex-wrap gap-2">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Laravel
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    MySQL
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Bootstrap
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    JavaScript
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    CSS
                  </span>
                </div>
              </button>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}

          {/* Heading */}
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-muted-foreground-1">
              Feb 2023 – Agustus 2025
            </h3>
          </div>
          {/* End Heading */}

          {/* Item */}
          <div className="flex gap-x-3 ">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-surface-3"></div>
              </div>
            </div>
            {/* End Icon */}

            {/* Right Content */}
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-medium text-foreground">
                Freelance Project
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
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Jakarta, Indonesia
                </span>
              </h3>
              <small className="text-xs  text-gray-500">
                Backend Developer
              </small>
              <p className="mt-1 text-sm md:text-2xl">
                Handled various web-based application development projects based
                on client requirements, with a focus on system efficiency,
                usability, and application scalability.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none"
              >
                <div className="mt-2 -ms-1 flex flex-wrap gap-2">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Laravel
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    MySQL
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Bootstrap
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    JavaScript
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    CSS
                  </span>
                </div>
              </button>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Heading */}
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-muted-foreground-1">
              Mei 2021 - Feb 2023
            </h3>
          </div>
          {/* End Heading */}

          {/* Item */}
          <div className="flex gap-x-3 ">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-surface-3"></div>
              </div>
            </div>
            {/* End Icon */}

            {/* Right Content */}
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-medium text-foreground">
                PT. CHARISE DEO INDONESIA
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
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Tangerang Selatan, Indonesia
                </span>
              </h3>
              <small className="text-xs  text-gray-500">IT Staff</small>
              <p className="mt-1 text-sm md:text-2xl">
                Responsible for managing IT infrastructure as well as developing
                company applications and websites to support internal
                operations.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none"
              >
                <div className="mt-2 -ms-1 flex flex-wrap gap-2">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Codeigniter
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    MySQL
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Bootstrap
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    JavaScript
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    CSS
                  </span>
                </div>
              </button>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Heading */}
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-muted-foreground-1">
              Feb 2023 – Agustus 2025
            </h3>
          </div>
          {/* End Heading */}

          {/* Item */}
          <div className="flex gap-x-3 ">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-surface-3"></div>
              </div>
            </div>
            {/* End Icon */}

            {/* Right Content */}
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-medium text-foreground">
                PT. SARANA ANUGERAH PERDANA
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
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Tangerang Selatan, Indonesia
                </span>
              </h3>
              <small className="text-xs  text-gray-500">
                Backend Developer
              </small>
              <p className="mt-1 text-sm md:text-2xl">
                Responsible for managing IT infrastructure as well as developing
                company applications and websites to support internal
                operations.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg text-muted-foreground-1 hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none"
              >
                <div className="mt-2 -ms-1 flex flex-wrap gap-2">
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Laravel
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Codeigniter
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    MySQL
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    Bootstrap
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    JavaScript
                  </span>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium transition-colors border-border text-muted-foreground hover:text-foreground hover:border-foreground/30">
                    CSS
                  </span>
                </div>
              </button>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
        </div>
        {/* End Timeline */}
      </div>
    </>
  );
}
