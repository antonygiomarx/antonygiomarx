import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import About from "@components/About";
import Card from "@components/Card";
import Footer from "@components/Footer";
import Skills from "@components/Skills";
import { data } from "@config/config";

function Index() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <>
      <Head>
        <title>Antony Giomar | Fullstack Developer 🐱‍👤</title>
        <link rel="shortcut icon" href="favicon.ico" />
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
          <Card name={data.name} title={data.title} social={data.social} />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About
            title={data.about.title}
            description={data.about.description}
          />
          <Skills skills={data.skills} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index;
