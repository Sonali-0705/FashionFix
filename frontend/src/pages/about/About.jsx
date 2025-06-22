import React from "react";
import about from "../../assets/instagram-4.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
        <h1 className="text-4xl font-extrabold text-rose-600 mb-6 leading-tight ">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Content Section */}
          <div className="md:w-1/2 md:pr-10 flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Welcome to our e-commerce store, your ultimate destination for all
              things fashionable and beautiful! We specialize in curating a wide
              range of premium women’s accessories, elegant dresses, stunning
              jewelry, and top-quality cosmetics.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our mission is to empower women by providing products that inspire
              confidence and elevate everyday style. Every item in our
              collection is carefully selected to ensure it meets the highest
              standards of quality and design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking for a perfect dress for an occasion,
              elegant accessories to complete your look, or premium cosmetics to
              enhance your beauty, we have you covered. We believe in
              celebrating individuality and helping you express yourself through
              style.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={about}
              alt="About Us"
              className="rounded-lg shadow-lg w-full object-cover max-h-96  object-contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
