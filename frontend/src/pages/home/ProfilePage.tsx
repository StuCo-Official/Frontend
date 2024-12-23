import React from 'react';
import MyAppBar from '../../components/layout/AppBar';
import SideBar from '../../components/layout/SideBar';
import ProfileInformation from '../../components/cards/ProfileInfoCard';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page min-h-screen bg-gray-100">
      <MyAppBar />
      <div className="flex w-screen h-full pt-[56px]">
        <div className="flex sticky top-[56px] left-0 h-[calc(100vh-56px)]">
          <SideBar />
        </div>
        <div className="flex flex-grow justify-center items-center">
          <ProfileInformation />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
