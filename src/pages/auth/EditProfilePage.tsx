// src/pages/EditProfilePage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import BackgroundLayout from '../../components/layout/BackgroundLayout';

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
  
    // State for form fields
    const [profileData, setProfileData] = useState({
      dob: "",
      country: "",
      educationLevel: "",
      academicYear: "",
      contact: "",
    });
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [notifications, setNotifications] = useState(false);
  
    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle checkboxes
    const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.checked);
    };
  
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      // Validation for required fields
      if (!profileData.dob || !profileData.country || !profileData.educationLevel || !profileData.academicYear || !profileData.contact) {
        alert("All fields are required. Please fill out all the fields.");
        return;
      }
    
      if (!acceptedPrivacy || !acceptedTerms) {
        alert("Please accept the privacy policy and terms of use to proceed.");
        return;
      }
    
      // Proceed with the API call
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("User is not authenticated!");
          return;
        }
    
        const response = await fetch("http://localhost:3000/api/users/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(profileData),
        });
    
        if (!response.ok) {
          throw new Error("Failed to update profile");
        }
    
        alert("Profile updated successfully");
        navigate("/home");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Error updating profile");
      }
    };
    
  
    return (
      <BackgroundLayout>
        <form onSubmit={handleSubmit} className="w-[922px] h-[610px] bg-white rounded-[32px] shadow p-[40px] mt-[80px]">
          <h1 className="text-center text-[#3a3335] text-[34px] font-bold">Profile Setup</h1>
          <h2 className="text-center text-[#8f8e8e] text-sm font-normal pt-[5px] pb-[40px]">Enter your details to proceed further</h2>
  
          <div className="flex space-x-[64px]">
            <div className="space-y-[22px] pl-[81px]">
              <div className="relative">
                <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">Date of Birth *</label>
                <input
                  type="text"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleInputChange}
                  className="w-[420px] h-[60px] pt-5 pl-3 bg-white rounded-lg border text-black text-sm font-semibold"
                  placeholder="MM-DD-YYYY"
                />
              </div>
  
              <div className="relative">
                <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">Country</label>
                <input
                  type="text"
                  name="country"
                  value={profileData.country}
                  onChange={handleInputChange}
                  className="w-[420px] h-[60px] pt-5 pl-3 bg-white rounded-lg border text-black text-sm font-semibold"
                  placeholder="Country"
                />
              </div>
  
              <div className="flex space-x-[24px]">
                <div className="relative">
                  <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">Educational Level *</label>
                  <select
                    name="educationLevel"
                    value={profileData.educationLevel}
                    onChange={handleInputChange}
                    className="w-[198px] h-[60px] pt-5 pl-2 bg-white rounded-lg border text-[#000000] text-sm font-semibold"
                  >
                    <option value="" disabled>Education Level</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="High School">High School</option>
                    <option value="Middle School">Middle School</option>
                  </select>
                </div>
  
                <div className="relative">
                  <label className="text-[#8f8e8e] text-xs absolute top-2 left-[11px]">Academic Year *</label>
                  <input
                    type="text"
                    name="academicYear"
                    value={profileData.academicYear}
                    onChange={handleInputChange}
                    className="w-[198px] h-[60px] pt-5 pl-3 bg-white rounded-lg border text-black text-sm font-semibold"
                    placeholder="Year"
                  />
                </div>
              </div>
  
              <div className="relative">
                <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">Contact Details *</label>
                <input
                  type="text"
                  name="contact"
                  value={profileData.contact}
                  onChange={handleInputChange}
                  className="w-[420px] h-[60px] pt-5 pl-3 bg-white rounded-lg border text-black text-sm font-semibold"
                  placeholder="Phone number"
                />
              </div>
            </div>
  
            <div>
              <label className="flex items-center gap-3 w-[210px] rounded-md hover:bg-slate-50 grow mb-[11px]">
                <span className="text-[#8f8e8e] text-xs font-normal underline leading-[18px]">* Privacy policy and preferences</span>
                <input
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={handleCheckboxChange(setAcceptedPrivacy)}
                  className="checked:accent-[#4a9b74] scale-125 checked:border-transparent"
                />
              </label>
  
              <label className="flex items-center gap-3 mb-[11px] mt-[40px]">
                <span className="text-[#8f8e8e] text-xs underline">* Terms of use</span>
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={handleCheckboxChange(setAcceptedTerms)}
                  className="checked:accent-[#4a9b74] scale-125"
                />
              </label>
  
              <label className="flex items-center gap-3 mb-[11px] mt-[40px]">
                <span className="text-[#8f8e8e] text-xs underline">Receive notifications?</span>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={handleCheckboxChange(setNotifications)}
                  className="checked:accent-[#4a9b74] scale-125"
                />
              </label>
            </div>
          </div>
  
          <div className="text-center pt-[35px]">
            <button
              type="submit"
              className="w-[420px] h-[50px] bg-[#4a9b74] rounded-[10px] text-white text-sm font-bold mt-5 hover:bg-[#3a7f5e] hover:shadow-lg active:scale-95 transition-all duration-200 "
            >
              Continue
            </button>
          </div>
        </form>
      </BackgroundLayout>
    );
  };
  
  export default ProfilePage;