import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import NavbarTop from "@/components/layouts/navbar";
import Footer4 from "@/components/smoothui/footer-4";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="container mx-auto min-h-screen flex flex-col font-sans">
        <Component {...pageProps} />
      </main>
      <Footer4 />
    </>
  );
}
