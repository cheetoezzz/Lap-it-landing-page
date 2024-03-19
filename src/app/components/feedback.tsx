import React from "react";

const Feedback = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-blue-700 text-3xl font-bold text-center mb-36">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial cards go here */}
          <div
            className="p-2 rounded-3xl shadow-md relative"
            style={{
              backgroundImage: 'url("/rectangle.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-white transform -translate-y-20">
                <img
                  src="/arc.png" // Replace with actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="text-white font-semibold text-center">
              <p className="mb-10 transform -translate-y-12">John Doe</p>
              <p className="mb-10 transform -translate-y-12 text-balance ml-10 mr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                convallis et odio vitae congue. Sed eu risus sit amet ante
                vestibulum mattis.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-1/2 border-gray-400 mb-4 transform -translate-y-14" />
            </div>
            <div className="flex items-center justify-center">
              {/* Rating star button goes here */}
              <button className=" px-4 py-2 rounded-full text-yellow-400 font-semibold transform -translate-y-10">
                ★ ★ ★ ★ ★
              </button>
            </div>
          </div>

          <div
            className="p-2 rounded-3xl shadow-md relative"
            style={{
              backgroundImage: 'url("/rectangle.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-white transform -translate-y-20">
                <img
                  src="/arc.png" // Replace with actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="text-white font-semibold text-center">
              <p className="mb-10 transform -translate-y-12">John Doe</p>
              <p className="mb-10 transform -translate-y-12 text-balance ml-10 mr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                convallis et odio vitae congue. Sed eu risus sit amet ante
                vestibulum mattis.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-1/2 border-gray-400 mb-4 transform -translate-y-14" />
            </div>
            <div className="flex items-center justify-center">
              {/* Rating star button goes here */}
              <button className=" px-4 py-2 rounded-full text-yellow-400 font-semibold transform -translate-y-10">
                ★ ★ ★ ★ ★
              </button>
            </div>
          </div>

          <div
            className="p-2 rounded-3xl shadow-md relative"
            style={{
              backgroundImage: 'url("/rectangle.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto border-4 border-white transform -translate-y-20">
                <img
                  src="/arc.png" // Replace with actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="text-white font-semibold text-center">
              <p className="mb-10 transform -translate-y-12">John Doe</p>
              <p className="mb-10 transform -translate-y-12 text-balance ml-10 mr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                convallis et odio vitae congue. Sed eu risus sit amet ante
                vestibulum mattis.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-1/2 border-gray-400 mb-4 transform -translate-y-14" />
            </div>
            <div className="flex items-center justify-center">
              {/* Rating star button goes here */}
              <button className=" px-4 py-2 rounded-full text-yellow-400 font-semibold transform -translate-y-10">
                ★ ★ ★ ★ ★
              </button>
            </div>
          </div>
          {/* Add more testimonial cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
