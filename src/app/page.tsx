
import About from "./components/About";
import FAQs from "./components/Faqs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <FAQs/>
    <About/>
    <Feedback/>
    <Footer/>
    </>
  );
}
export default page
