import { Footer, Navbar, Wrapper } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../next-seo.config";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <DefaultSeo {...defaultSEOConfig} />
      <Navbar />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </div>
  );
}
