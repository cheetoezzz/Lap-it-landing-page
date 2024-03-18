
import About from "./components/About";
import FAQs from "./components/Faqs";
import Features from "./components/Features";
import Hero from "./components/Hero";
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
    <Footer/>
    </>
  );
}
export default page
