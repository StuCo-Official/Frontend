import React from "react";
import image22 from "../../assets/Image_22.png";
import image20 from "../../assets/Image_20.png";
import image21 from "../../assets/Image_21.png";

const IntroduceFeatureCard: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-8">
            <p className="font-bold text-[#171a1f] text-4xl md:text-5xl text-center mb-6 md:mb-10 leading-tight">
                What you can expect from StuCo
            </p>

            <p className="text-[#9095a0] text-base md:text-lg text-center mb-16 leading-relaxed max-w-2xl mx-auto">
                Do consectetur proident proident id eiusmod deserunt consequat pariatur
                ad ex velit do Lorem reprehenderit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Mentorship & Guidance */}
                <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        className="w-full aspect-video object-cover"
                        alt="Image"
                        src={image20}
                    />
                    <div className="p-6 flex flex-col justify-between h-full">
                        <h3 className="font-bold text-[#171a1f] text-2xl mb-4">
                            Mentorship & Guidance
                        </h3>
                        <p className="text-[#9095a0] text-base leading-relaxed mb-6">
                            Get personalized advice through direct messaging, group discussions,
                            or even request a dedicated mentor to guide you through your college
                            admissions journey.
                        </p>
                        <button className="py-2 px-4 mt-auto border border-[#4a9b74] text-[#4a9b74] rounded-md hover:bg-[#e6f4ec] transition duration-300">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Card 2: Smart AI Tools */}
                <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        className="w-full aspect-video object-cover"
                        alt="Image"
                        src={image21}
                    />
                    <div className="p-6 flex flex-col justify-between h-full">
                        <h3 className="font-bold text-[#171a1f] text-2xl mb-4">
                            Smart AI Tools
                        </h3>
                        <p className="text-[#9095a0] text-base leading-relaxed mb-6">
                            Use our AI-powered tools for essay feedback, college matchmaking,
                            and more, helping you enhance your application and make informed
                            decisions.
                        </p>
                        <button className="py-2 px-4 mt-auto border border-[#4a9b74] text-[#4a9b74] rounded-md hover:bg-[#e6f4ec] transition duration-300">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Card 3: Success Stories & Resources */}
                <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        className="w-full aspect-video object-cover"
                        alt="Image"
                        src={image22}
                    />
                    <div className="p-6 flex flex-col justify-between h-full">
                        <h3 className="font-bold text-[#171a1f] text-2xl mb-4">
                            Success Stories & Resources
                        </h3>
                        <p className="text-[#9095a0] text-base leading-relaxed mb-6">
                            Explore real success stories, watch video interviews, and attend
                            webinars to get inspired and learn tips from admitted students who
                            have navigated the process.
                        </p>
                        <button className="py-2 px-4 mt-auto border border-[#4a9b74] text-[#4a9b74] rounded-md hover:bg-[#e6f4ec] transition duration-300">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroduceFeatureCard;
