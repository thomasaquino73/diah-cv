import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import NavbarTop from "@/components/layouts/navbar";
import Footer4 from "@/components/smoothui/footer-4";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="min-h-screen flex flex-col font-sans`}">
        <div className="container mx-auto bg-grey-100 font-sans min-h-screen p-10">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer4 />
    </>
  );
}
