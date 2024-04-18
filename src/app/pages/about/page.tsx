import React from "react";

import Navbar from "@/app/components/navbar";
import Firstsection from "./components/firstsec";
import Secondsection from "./components/secondsec";
import Thirdsection from "./components/thirdsec";
import Footer from "@/app/components/constants/Footer";
import BottomOfFooter from "@/app/components/constants/BottomOfFooter";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="text-green-500 sm:text-red-500 md:text-fuchsia-700 lg:text-black xl:text-blue-600">
        responsive
      </div>
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Footer />
    </div>
  );
};

export default Page;
