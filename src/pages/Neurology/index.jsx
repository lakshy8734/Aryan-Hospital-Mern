
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const Neurology = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Neurology"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/n1.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          EXPERT NEUROLOGICAL CARE
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        We understand the intricacies of neurological health, and our Neurology Department stands as a beacon of expertise and compassion for individuals facing neurological challenges. Our unwavering commitment to patient well-being is the cornerstone of our mission, and we have assembled a team of highly specialized professionals equipped with the latest technology to ensure unparalleled care for those navigating neurological conditions. In your most challenging times, trust us to deliver exceptional expertise and support for a path towards recovery and improved neurological health.
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          UNRIVALLED PROFESSIONALISM AND COMPASSION
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Comprising board-certified neurologists, experienced nursing staff, and dedicated support personnel, our Neurology team operates around the clock, providing advanced care tailored to address a spectrum of neurological issues. From disorders affecting the brain and spine to intricate neurosurgical procedures, we leverage cutting-edge technology and vigilant monitoring to adopt a patient-centered approach. Our commitment to staying at the forefront of medical advancements ensures that you receive the highest standard of care, where expertise meets compassion to achieve the best possible outcomes.
        </div>

        <img className="w-[100%]" src="images/n2.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          YOUR JOURNEY TO NEUROLOGICAL WELLNESS
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          
Your comfort, both physically and emotionally, is our top priority. Throughout your neurological care, transparent communication with you and your family is maintained, ensuring everyone is informed at every stage. Beyond your time with us, our commitment extends to crafting comprehensive post-neurology care plans tailored to your unique needs. Trust us to provide the critical care essential for your journey towards renewed neurological health, marked by unwavering dedication and expertise.
As we strive to continuously enhance our services, we actively seek feedback from patients and their families, ensuring an even more exceptional care experience. Your trust in us is our greatest motivation, and we are honored to be part of your path to neurological wellness.

        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        </div>
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default Neurology;
