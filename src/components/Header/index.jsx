import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import headerData from "../../data/headerData.json";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
      <Text
        className="md:ml-[0] ml-[186px] md:mt-0 my-[18px] text-4xl sm:text-[32px] md:text-[34px] text-indigo-900 uppercase"
        size="txtYesevaOneRegular36"
      >
        {headerData.hospitalName}
      </Text>
      <div className="flex md:flex-1 md:flex-col flex-row font-worksans md:gap-5 items-center justify-start mb-[17px] md:ml-[0] ml-[57px] mr-[239px] md:mt-0 mt-5 w-[55%] md:w-full">
    {headerData.sections.map((section, index) => (
      <div key={index} className="flex flex-col items-center justify-start gap-[5px]  md:ml-[20px] ml-[62px] w-[39%] md:w-full">
        <div className="flex flex-row gap-[5px] items-start justify-between w-full">
          <Img className="h-[38px] mt-[3px] w-[30px] " src={section.icon} alt={section.title} />
          <div className="flex flex-col items-start gap-[5px] justify-start mb-0.5 ml-9px ">
            <Text className="text-base text-indigo-900 uppercase" size="txtWorkSansMedium16">
              {section.title}
            </Text>
            {section.subtitle && (
              <Text className="mt-[3px] text-base text-blue-500" size="txtWorkSansMedium16Blue500">
                {section.subtitle} {section.content}
              </Text>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
    </header>
  </>
  );
};

Header.defaultProps = {};

export default Header;
