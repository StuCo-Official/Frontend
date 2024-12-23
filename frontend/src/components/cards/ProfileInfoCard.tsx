import React, { useState, useRef, ChangeEvent } from "react";
import { useUserContext } from "../../context/UserContext";
import useUpdateUser from "../../hooks/UserHooks/useUpdateUser";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  country: string;
  educationLevel: string;
  academicYear: string;
  major: string;
  gpa: string;
  profileImage: string;
}

const ProfileInformation: React.FC = () => {
  const { user } = useUserContext();
  const { updateUser, isPending } = useUpdateUser();
  const [formData, setFormData] = useState<FormData>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    dob: user?.dob || "",
    country: user?.country || "",
    educationLevel: user?.educationLevel || "",
    academicYear: user?.academicYear || "",
    major: user?.major || "",
    gpa: user?.gpa || "",
    profileImage: user?.profileImage || "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            profileImage: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser(formData);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 mt-[64px]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Profile Information</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-6">
        <img
          src={user.profileImage || 'src/assets/DemoProfileImage.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-gray-200 cursor-pointer"
          onClick={handleImageClick}
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        </div>

        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#7EB698] mt-4"
        />

        <div className="flex space-x-4 mt-4">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          >
            <option value="">Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div className="flex space-x-4 mt-4">
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          >
            <option value="">Education Level</option>
            <option value="Middle School">Middle School</option>
            <option value="High School">High School</option>
            <option value="University">University</option>
          </select>
          <select
            name="academicYear"
            value={formData.academicYear}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          >
            <option value="">Academic Year</option>
            {Array.from({ length: 13 }, (_, i) => i + 1).map((year) => (
              <option key={year} value={year.toString()}>
                Year {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-4 mt-4">
          <input
            type="text"
            name="major"
            placeholder="Major"
            value={formData.major}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          />
          <input
            type="text"
            name="gpa"
            placeholder="GPA"
            value={formData.gpa}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-[#7EB698]"
          />
        </div>

        <button
          type="submit"
          className="mt-8 bg-[#7EB698] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#6aa482]"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
};

export default ProfileInformation;
