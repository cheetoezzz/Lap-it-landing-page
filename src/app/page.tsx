
import About from "./components/About";
import FAQs from "./components/Faqs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FAQs/>
    <Features/>
    <About/>
    <Pricing/>
    <Footer/>
    </>
  );
}
export default page
