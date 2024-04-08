import React from "react";

import Navbar from "@/app/components/navbar";
import Firstsection from "./components/firstsec";
import Secondsection from "./components/secondsec";
import Thirdsection from "./components/thirdsec";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Firstsection />
      <Secondsection/>
      <Thirdsection/>
    </div>
  );
};

export default Page;
