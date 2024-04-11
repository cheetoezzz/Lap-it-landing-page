import React from "react";


import Firstsection from "./components/firstsec";
import Secondsection from "./components/secondsec";
import Thirdsection from "./components/thirdsec";
import Footer from '@/app/components/constants/Footer'
import BottomOfFooter from '@/app/components/constants/BottomOfFooter'
import Navbar from "../../landingpage/components/navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Firstsection />
      <Secondsection/>
      <Thirdsection/>
      <Footer/>
      <BottomOfFooter/>
    </div>
  );
};

export default Page;
