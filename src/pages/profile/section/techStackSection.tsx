"use client";

import InfiniteSlider from "@/components/smoothui/infinite-slider";
import Image from "next/image";

const frontendStack = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const backendStack = [
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Codeigniter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  },
];
const Tools = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Mysql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Dbeaver",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg",
  },
  {
    name: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Bruno",
    icon: "/image/bruno_app.png",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  },
];
function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-3 flex flex-col items-start">
      <h3 className="text-xs font-semibold tracking-[0.35em] text-muted-foreground">
        {title.toUpperCase()}
      </h3>
      <span className="mt-1 block h-px w-full max-w-[64px] bg-border" />
    </div>
  );
}

export default function TechStackSection() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-2">Tech Stack</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Frontend & Backend technologies I work with.
      </p>

      {/* ONE ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* FRONTEND */}
        <div className="flex flex-col">
          <SectionTitle title="Frontend" />
          <InfiniteSlider
            gap={24}
            speed={80}
            speedOnHover={0}
            className="w-full"
          >
            <div className="flex items-center gap-6">
              {frontendStack.map((item) => (
                <TechItem key={item.name} {...item} />
              ))}
            </div>
          </InfiniteSlider>
        </div>

        {/* BACKEND */}
        <div className="flex flex-col">
          <SectionTitle title="Backend" />
          <InfiniteSlider
            gap={24}
            speed={60}
            speedOnHover={0}
            reverse
            className="w-full"
          >
            <div className="flex items-center gap-6">
              {backendStack.map((item) => (
                <TechItem key={item.name} {...item} />
              ))}
            </div>
          </InfiniteSlider>
        </div>

        {/* TOOLS */}
        <div className="flex flex-col">
          <SectionTitle title="Tools" />
          <InfiniteSlider
            gap={24}
            speed={60}
            speedOnHover={0}
            className="w-full"
          >
            <div className="flex items-center gap-6">
              {Tools.map((item) => (
                <TechItem key={item.name} {...item} />
              ))}
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group min-w-[140px] h-20 flex flex-col items-center justify-center gap-2  bg-white dark:bg-zinc-900 transition hover:shadow-md">
      <Image
        src={icon}
        alt={name}
        width={36}
        height={36}
        className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
      />
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition">
        {name}
      </span>
    </div>
  );
}
