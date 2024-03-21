
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
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
</style>
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
