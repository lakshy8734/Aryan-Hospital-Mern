
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const SOnco = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Surgical Oncology"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/so1.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          SURGICAL ONCOLOGY DEPARTMENT
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Our surgical oncology team, comprising highly skilled and experienced surgeons, offers a diverse range of procedures tailored to individual patient needs. Our commitment to comprehensive care ensures precise treatment for even the most complex cases.
Prioritizing patient well-being, we take a proactive approach to handle potential side effects, both during and after surgery. Our top notch surgeons not only remove cancerous growths but also focus on preserving and restoring normal bodily functions, ensuring a holistic approach to surgical oncology care. With cutting-edge technology and a patient-centered approach, we are dedicated to providing the highest quality surgical oncology care, giving our patients the best possible chance for a healthy future.
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          FACTORS AND THERAPIES
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Determining whether a patient is a suitable candidate for chemotherapy depends on a multitude of factors, including the tumor’s location, grade, type, size, and stage, as well as the individual’s age, physical fitness, and overall health. In many cases, surgical procedures are combined with other cancer treatments, such as hormone therapy, chemotherapy, and radiation therapy. These therapies may be administered either before or after surgery to effectively halt the progression or spread of cancer. Our multidisciplinary team of specialists works closely with each patient to create personalized treatment plans, ensuring that the most appropriate combination of therapies.
        </div>

        <img className="w-[100%]" src="images/so2.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          OUR OFFERINGS
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Our Department of Surgical Oncology offers specialized services in the surgical management of solid tumors. We focus on:
          <ul class="list-disc">
            <li>Breast Cancer</li>
            <li>Thyroid Cancer</li>
            <li>Head and Neck Cancer</li>
            <li>Gynecological Cancer</li>
            {/* <li>Cancer Care</li>
            <li>Gynaecological surgeries</li>
            <li>Gynaecological cancer surgeries</li>
            <li>Gynaecological endoscopic surgeries</li> */}
          </ul>
          Our dedicated team of surgical oncologists, medical oncologists, anesthesiologists, and other specialists collaborates to provide comprehensive care, mainly for lung cancer, breast cancer, and head & neck cancer patients in the Delhi-NCR region
        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        </div>
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default SOnco;
