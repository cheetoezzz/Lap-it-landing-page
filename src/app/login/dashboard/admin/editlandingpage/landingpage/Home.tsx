import React from "react";
import Image from "next/image";
import Card from "./components/card";



const Home = () => { 
  const card = [ //same rani sa features// ang nakalahi ani kay naa sa constants ang pagtawag ani naa sa index.tsx
    { title: "100K+", description: "Total Customer" },
    { title: "100K+", description: "Real Time Customer" },
    { title: "100K+", description: "Customer Satisfaction" },
  ];

  return (
    <div className="select-none  bg-blue-600">
       
      <section className="max-container padding-container flex flex-col gap-7 py-5 xl:flex-row ">
        <div className="mt-24">
          <div className="ml-44">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              AFFORDABLE SMALL
            </h1>
            <h1 className="text-4xl font-extrabold text-white mb-4">
              BUSINESS {" "}
               <span className="bg-white px-1 w-6 text-blue-600 rounded-md">
                ENTERPRISE
              </span>
            </h1>
            <h1 className="text-4xl font-extrabold text-white">SOFTWARE</h1>
            <p className="text-white mt-7 text-lg ">
              Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam
              <br />
              facilisis dui consectetur. Sed nunc sed nunc ut in diam ultrices
              <br />
              blandit. Aenean varius elit sagittis praesent id leo. Turpis
              mauris
              <br />
              accumsan lobortis congue non velit diam massa.
            </p>
          </div>
          <div>
            <button className="ml-44 mt-9 border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">Get Started</button>
            <button className="ml-28 mt-9 border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">Book a demo</button>
          </div>  
          <div className="mt-6 ml-44 flex flex-row justify-between text-lg"> 
            {card.map((car, index) => ( //mao ni mag map naka
              <Card key={index} title={car.title} description={car.description} />
            ))}
          </div>
        </div>
        <div className="w-1/2 relative mt-20">
          <div className="-mt-9 pl-24 mb-24">
            <Image
              src="/Vector.svg"
              alt="Image Description"
              width={530}
              height={400}
              className="opacity-10"
            />
          </div>
          <div className="absolute -top-1 right-24">
            <Image
              src="/lap.svg"
              alt="Image Description"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
      </div>
  
  );
};

export default Home;


