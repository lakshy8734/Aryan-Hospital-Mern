import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";

const AboutUsNavbar = ({ activePage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const isPageActive = (page) => {
    return page === activePage
      ? "text-blue-100 font-semibold cursor-pointer"
      : "text-white-A700 cursor-pointer";
  };
  const handleServiceChange = (event) => {
    // Navigate to the selected service page
    navigate(`/${event.target.value}`);
  };

  return (
    <>
      <div className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[300px] items-center justify-center max-w-[100vw] md:px-10 sm:px-5 px-[187px] py-[17px] w-full">
        <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
          <Link to="/">
            <Text
              className={`text-lg w-auto ${isPageActive("home")}`}
              size="txtWorkSansRegular18"
            >
              Home
            </Text>
          </Link>
          <Link to="/aboutus">
            <Text
              style={{width:'81px'}}
              className={`text-lg w-18 ${isPageActive("aboutus")}`}
              size={
                activePage === "aboutus"
                  ? "txtWorkSansSemiBold18"
                  : "txtWorkSansRegular18"
              }
            >
              About Us
            </Text>
          </Link>
          <select
            className="text-lg w-auto text-white-A700 cursor-pointer appearance-none bg-transparent border-none outline-none"
            onChange={handleServiceChange}
            style={{ width: '125px', position: 'relative', bottom: '7px' }}
          >
          
            <option value="">Services</option>
            <option value="gynaecology">GYNAECOLOGY</option>
            <option value="ivf">IVF</option>
            <option value="pediatrics">PEDIATRICS</option>
            <option value="neurology">NEUROLOGY</option>
            <option value="lapaSurgery">LAPSURGERY</option>
            <option value="ortho">ORTHO</option>
            <option value="bSurgery">BSURGERY</option>
            <option value="sOnco">SONCO</option>
            <option value="kd">KD</option>
          </select>
          <Link to="/doctors">
            <Text
              className={`text-lg w-auto ${isPageActive("doctors")}`}
              size={
                activePage === "doctors"
                  ? "txtWorkSansSemiBold18"
                  : "txtWorkSansRegular18"
              }
            >
              Doctors
            </Text>
          </Link>
          <Link to="/news">
            <Text
              className={`text-lg w-auto ${isPageActive("news")}`}
              size={
                activePage === "news"
                  ? "txtWorkSansSemiBold18"
                  : "txtWorkSansRegular18"
              }
            >
              News
            </Text>
          </Link>
          <Link to="/contact">
            <Text
              className={`text-lg w-auto ${isPageActive("contact")}`}
              size={
                activePage === "contact"
                  ? "txtWorkSansSemiBold18"
                  : "txtWorkSansRegular18"
              }
            >
              Contact
            </Text>
          </Link>
        </div>
        <div className="flex md:flex-1 flex-row gap-[30px] items-center justify-center w-[23%] md:w-full">
          <Img className="h-5 w-5" src="images/img_rewind.svg" alt="rewind" />
          <Link to="/appointment">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[173px] rounded-[22px] text-base text-center"
              color="blue_100"
              size="sm"
              variant="fill"
            >
              Appointment
            </Button>
          </Link>
          <Link to="/doctor-login">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[173px] rounded-[22px] text-base text-center"
              color="blue_100"
              size="sm"
              variant="fill"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

{
  /* <div className={props.className}>
      <div className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[300px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full">
        <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
          <Text
            className="text-blue-100 text-lg w-auto"
            size="txtWorkSansSemiBold18"
          >
            Home
          </Text>
          <Link to="/aboutus">
            <Text
              className="common-pointer text-lg text-white-A700 w-auto"
              size="txtWorkSansRegular18"
            >
              Aboutus
            </Text>
          </Link>
          <Link to="/services">
            <Text
              className="common-pointer text-lg text-white-A700 w-auto"
              size="txtWorkSansRegular18"
            >
              Services
            </Text>
          </Link>
          <Link to="/doctors">
            <Text
              className="common-pointer text-lg text-white-A700 w-auto"
              size="txtWorkSansRegular18"
            >
              Doctors
            </Text>
          </Link>
          <Link to="/news">
            <Text
              className="common-pointer text-lg text-white-A700 w-auto"
              size="txtWorkSansRegular18"
            >
              News
            </Text>
          </Link>
          <Link to="/contact">
            <Text
              className="common-pointer text-lg text-white-A700 w-auto"
              size="txtWorkSansRegular18"
            >
              Contact
            </Text>
          </Link>
        </div>
        <div className="flex md:flex-1 flex-row gap-[30px] items-center justify-center w-[23%] md:w-full">
          <Img className="h-5 w-5" src="images/img_rewind.svg" alt="rewind" />
          <Link to="/appointment">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[173px] rounded-[22px] text-base text-center"
              color="blue_100"
              size="sm"
              variant="fill"
            >
              Appointment
            </Button>
          </Link>
        </div>
      </div> */
}

{
  /* <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
        <Link to="/">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtWorkSansRegular18"
          >
            {props?.hometext}
          </Text>
          </Link>
          <Link to="/aboutus">
          <Text
            className="text-blue-100 text-lg w-auto"
            size="txtWorkSansSemiBold18"
          >
            {props?.aboutustext}
          </Text>
          </Link>
          <Link to="/services">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtWorkSansRegular18"
          >
            {props?.servicestext}
          </Text>
          </Link>
          <Link to="/doctors">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtWorkSansRegular18"
          >
            {props?.doctorstext}
          </Text>
          </Link>
          <Link to="/news">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtWorkSansRegular18"
          >
            {props?.newstext}
          </Text>
          </Link>
          <Link to="/contact">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtWorkSansRegular18"
          >
            {props?.contacttext}
          </Text>
          </Link>
        </div>
        <div className="flex flex-row gap-[30px] items-center justify-center w-[23%] md:w-full">
          <Img className="h-5 w-5" src="images/img_rewind.svg" alt="rewind" />
          <Link to="/appointment">
          <Button
            className="cursor-pointer font-medium font-worksans leading-[normal] min-w-[173px] rounded-[22px] text-base text-center"
            color="blue_100"
            size="sm"
            variant="fill"
          >
            {props?.appointmentbutton}
          </Button>
          </Link>
        </div> */
}

AboutUsNavbar.defaultProps = {
  hometext: "Home",
  aboutustext: "Aboutus",
  servicestext: "Services",
  doctorstext: "Doctors",
  newstext: "News",
  contacttext: "Contact",
  appointmentbutton: "Appointment",
};

export default AboutUsNavbar;
