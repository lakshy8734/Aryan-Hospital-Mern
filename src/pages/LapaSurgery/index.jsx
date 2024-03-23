
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const LapaSurgery = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Laparoscopic Surgery"
      />

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/ls1.png" alt="" />

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          MINIMAL ACCESS SURGERY IN GURGAON
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Laparoscopy has established itself as the go-to method for addressing a variety of abdominal problems. Our medical facility is dedicated to delivering the highest standard of care by regularly performing both basic and advanced laparoscopic procedures on our patients. This method offers significant advantages, including reduced blood loss, shorter hospital stays, improved cosmetic results, quicker patient recovery, decreased post-operative discomfort, and a speedier return to work. This modern surgical approach not only enhances patient outcomes but also streamlines our hospital’s overall treatment process, ensuring that our patients receive the best possible care..
        </div>

        <div
          className="mt-1.5 text-[32px] text-indigo-900"
          size="txtYesevaOneRegular48"
        >
          OUR TECHNIQUES
        </div>

        <div className="text-gray-900" size="txtWorkSansRegular16">
        Advanced laparoscopic techniques are routinely performed at our hospital to treat a range of conditions, including:
Laparoscopy for Hiatus Hernia.
Laparoscopy for Pseudo Pancreatic Cyst.
Laparoscopy for Liver Cysts.
Common Bile Duct Stones (both laparoscopic and endoscopic).
Laparoscopy for Achalasia Cardia.
Laparoscopy for Gastric Malignancy (cancer).
Laparoscopy for Rectal Cancers.
        </div>

        <img className="w-[100%]" src="images/ls2.png" alt="" />

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

export default LapaSurgery;
