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
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
