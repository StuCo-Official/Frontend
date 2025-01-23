// src/components/BackgroundLayout.tsx
import React from 'react';
import StuCoSmallLogo from '../../assets/StuCoSmallLogo.png';

interface BackgroundLayoutProps {
    children: React.ReactNode;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-[#e3f2eb] flex flex-col items-center">
            {/* Logo and Title at the top-left */}
            <div className="absolute top-[15px] left-[100px] mt-4 ml-4 flex items-center">
                <img
                    className="w-10 h-10"
                    src={StuCoSmallLogo}
                    alt="StuCo Logo"
                />
                <span className="text-[#4a9b74] text-2xl font-bold ml-2 font-poppins italic">
                    StuCo
                </span>
            </div>
            {/* Page Content */}
            {children}
        </div>
    );
};

export default BackgroundLayout;