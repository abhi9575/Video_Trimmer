import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SupportedFormats from "../components/home/SupportedFormats";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <SupportedFormats />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}