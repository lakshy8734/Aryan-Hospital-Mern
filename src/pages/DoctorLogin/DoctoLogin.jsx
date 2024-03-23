import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { REACT_APP_BACKEND_URL } = process.env;

const Login = () => {
 const navigate = useNavigate();
 const [doctorId, setDoctorId] = useState("");
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();
 
  // Check if both username and password are provided for admin login
  if (username && password) {
     try {
       const adminResponse = await fetch(`${REACT_APP_BACKEND_URL}/api/admin/login`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ username, password }),
       });
 
       if (adminResponse.ok) {
         toast.success("Admin login successful");
         // navigate("/dashboard"); // Uncomment this line to navigate to the dashboard
         return;
       }
     } catch (error) {
       console.error("Error during admin login:", error);
       toast.error("An error occurred during admin login");
     }
  }
 
  // Check if both doctorId and password are provided for doctor login
  if (doctorId && password) {
     try {
       const doctorResponse = await fetch(`${REACT_APP_BACKEND_URL}/api/doctors/login`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ doctorId, password }),
       });
 
       if (doctorResponse.ok) {
         toast.success("Doctor login successful");
         navigate("/doctor-appointment-profile",  { state: { doctorId } }); // Uncomment this line to navigate to the doctor profile
         return;
       }
     } catch (error) {
       console.error("Error during doctor login:", error);
       toast.error("An error occurred during doctor login");
     }
  }
 
  // If neither login attempt was successful, show a generic error toast
  toast.error("Invalid username/doctor ID or password");
 };

 return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-gray-500 text-white p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold pb-5 text-center">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="doctorId" className="block mb-2 text-sm font-medium">Doctor ID</label>
            <input
              type="text"
              id="doctorId"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
 );
};

export default Login;