import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantage from "@/components/Advantage";
import Testimonial from "@/components/Testimonial";
import { Pricing } from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Advantage/>
      <Testimonial/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </div>
  );
}
