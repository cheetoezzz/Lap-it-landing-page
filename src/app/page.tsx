import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQs from "./components/Faqs";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./components/About";
import Pricing from "./Pricing/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <FAQs/>
    <About/>
    <Pricing/>
    <Footer/>
    </>
  );
}
