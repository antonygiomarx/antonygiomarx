import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import About from "@components/About";
import Card from "@components/Card";
import Footer from "@components/Footer";
import Skills from "@components/Skills";
import { user } from "@config/user";

function Index() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  const { name, social, title, skills, about } = user;
  return (
    <>
      <Head>
        <title>Antony Giomar | Fullstack Developer 🐱‍👤</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="JavaScript wizard, chaotic good" />
        <meta name="keyword" content="portfolio, javascript, developer" />
        <meta
          property="og:title"
          content="Antony Giomar | Fullstack Developer"
        />
        <meta property="og:description" content="Typescript wizard" />
        <meta
          property="og:image"
          content="https://github.com/antonygiomarx/antonygiomarx/blob/main/src/static/assets/images/card.png"
        />
        <meta property="og:url" content="https://antonygiomarx.dev" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Antony Giomar | Fullstack Developer"
        />
        <meta name="twitter:description" content="Typescript wizard" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1445249652899594241/4fX9fy6C_400x400.jpg"
        />
      </Head>
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        <div data-aos="fade-down" data-aos-duration="800">
          <Card name={name} title={title} social={social} />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About title={about.title} description={about.description} />
          <Skills skills={skills} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index;
