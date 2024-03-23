import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const Pediatrics = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Pediatrics"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/p1.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          PEDIATRIC CARE CENTER
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          Welcome to our Pediatric Care Center, a haven where your child’s
          health and well-being take center stage. Our team of seasoned
          pediatric professionals comprehends the distinct healthcare needs of
          children, from the fragile newborns to the ever-growing adolescents.
          We are unwavering in our commitment to delivering exceptional,
          child-focused care. We’ve crafted an environment that nurtures growth
          and development, ensuring that every aspect of your child’s life
          receives the attention it deserves. In this safe and caring space,
          your child’s health and happiness are our top priorities, and we’re
          here to guide and support them at every stage of their journey.
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          COMPREHENSIVE CARE
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          Our Pediatric Care Center is your trusted partner for comprehensive
          pediatric care, prioritizing your child’s health and development. Our
          team of dedicated professionals specializes in a wide range of
          services, from newborn care and vaccinations to expertly managing
          chronic conditions and addressing developmental needs. We believe in
          the power of early intervention and preventive care, working closely
          with parents and caregivers to empower you with the knowledge and
          support needed for your child’s well-being. With a steadfast
          commitment to providing the highest quality care, we are here to
          nurture your child’s health and happiness.
        </div>

        <img className="w-[100%]" src="images/p2.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          OUR SERVICES
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
          We offer a wide range of services meticulously designed to cater to
          your child’s unique needs. Our experienced pediatricians are dedicated
          to maintaining your child’s health and well-being, conducting routine
          check-ups, administering vaccinations, and managing sick visits to
          ensure your child’s optimal health. Additionally, we provide
          specialized services such as:
          <ul class="list-disc">
            <li>Chronic Condition Managemen</li>
            <li>Behavioral Health Services</li>
            <li>Developmental Concerns</li>
            {/* <li>Contraceptive advice and family planning services</li>
            <li>Cancer Care</li>
            <li>Gynaecological surgeries</li>
            <li>Gynaecological cancer surgeries</li>
            <li>Gynaecological endoscopic surgeries</li> */}
          </ul>
          Our modern, child-centric facility is designed to foster a comforting
          atmosphere, ensuring that every visit is a positive, reassuring
          experience for your little ones. We’re committed to delivering the
          highest quality care for your child
        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
      </div>
      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
    </div>
  );
};

export default Pediatrics;
