
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const Ortho = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Orthopedics"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/o1.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          REDEFINING THE WORLD WITH THE BEST ORTHOPEDIC HOSPITAL IN GURGAON
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Our dedicated team of highly skilled orthopedic surgeons commits to restoring your mobility and enabling you to live life to the fullest. As we enjoy longer lives, our joints and spine face increased demands, leading to a rise in Osteoarthritis and Osteoporosis cases. Our multi-specialty hospital provides comprehensive care for patients, even those with concurrent medical conditions. Our internationally trained orthopedic surgeons, who specialize in joint replacements, spinal operations, and arthroscopy surgeries, bring a wealth of expertise to Gurgaon. We dedicate ourselves to continually improving patient care by collaborating with renowned surgeons.
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          PIONEERING CARE FOR SPINAL HEALTH
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Our orthopedic team is at the forefront of advanced spinal surgery. We’ve pioneered a revolutionary approach and customized programs that have truly revolutionized the lives of patients who struggle with debilitating spinal issues. Our expertise covers a wide range of spinal problems, especially focusing on the elderly to address issues such as compression fractures and nerve compression.
        </div>

        <img className="w-[100%]" src="images/o2.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          PATIENT CENTERED CARE
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          
At our hospital, patient comfort and well-being are our top priorities. Our experienced team of laparoscopic surgeons ensures you receive personalized care at every step. From pre-operative consultations to post-operative follow-ups, we are committed to providing comprehensive support. We understand that each patient is unique, and we tailor our treatment plans to your specific needs, ensuring a smooth and reassuring experience throughout your laparoscopic surgery journey. Our goal is to empower you with knowledge and compassionate care, making your health our primary concern.

        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        </div>
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default Ortho;
