import React from "react";

import Navbar from "@/app/components/navbar";
import Firstsection from "./components/firstsec";
import Secondsection from "./components/secondsec";
import Thirdsection from "./components/thirdsec";
import Footer from "@/app/components/constants/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className=" text-gray-950 sm:text-red-600 md:text-blue-500 lg:text-orange-600 xl:text-green-600">
        BOGO
      </div>
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Footer />
    </div>
  );
};

export default Page;
