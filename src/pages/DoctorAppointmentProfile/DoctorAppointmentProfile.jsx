import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Img, Text } from "components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Header from "components/Header";

const DoctorAppiontmentProfile = () => {
  const location = useLocation();
  const { doctorId } = location.state; // Assuming you're passing the doctor's ID in the state
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      if (!doctorId) {
        console.error("Doctor ID is undefined");
        return; // Exit the function if doctorId is undefined
      }
      try {
        const response = await fetch(
          `http://localhost:5000/api/doctors/${doctorId}`
        ); // Adjust the URL based on your backend API
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]); // Depend on doctorId to refetch if it changes

  if (!doctor) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
      <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
      <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" />
      <div className="w-full mx-auto md:p-5 max-w-[992px]">
        <div className="flex flex-col gap-[77px]">
          <div className="flex md:flex-col items-start w-[76%] md:w-full gap-6">
            <Img
              src={`http://localhost:5000/${doctor.image.replace(/\\/g, "/")}`}
              alt="Doctor Image"
              className="w-[30%] md:w-full rounded-tr-[5px] rounded-tl-[5px] object-cover"
            />
            <div className="flex flex-col mt-[9px] gap-[35px] flex-1">
              <Text size="xl" as="p" className="!text-black-900">
                Doctor’s ID: {doctor.doctorId} {/* Display the doctorId */}
              </Text>
              <Text size="xl" as="p" className="!text-black-900">
                Doctor’s Name: {doctor.name}
              </Text>
              <Text size="md" as="p" className="!text-black-900">
                Experience: {doctor.experience}
              </Text>
              <Text size="md" as="p" className="!text-black-900">
                Department: {doctor.department}
              </Text>
              <Text size="md" as="p" className="!text-black-900">
                Fees: {/* Add doctor fees if available */}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col items-center gap-2.5">
            <div className="flex flex-col w-full gap-[31px]">
              <Text
                size="lg"
                as="p"
                className="flex w-[98%] md:w-full !text-black-900"
              >
                <span className="text-black-900">
                  About:
                  <br />
                  <br />
                </span>
                <span className="text-black-900 text-base">{doctor.about}</span>
                <span className="text-black-900 text-xl">
                  <br />
                  <br />
                </span>
              </Text>
              <Text size="lg" as="p" className="flex !text-black-900">
                <span className="text-black-900">
                  Education:
                  <br />
                </span>
                <span className="text-black-900 text-base">
                  {doctor.education}
                </span>
              </Text>
            </div>
          </div>
          {/* Additional doctor information can be displayed here */}
        </div>
      </div>
      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
    </div>
  );
};

export default DoctorAppiontmentProfile;
