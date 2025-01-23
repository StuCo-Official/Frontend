import { Link } from "react-router-dom";
import logoImage from '../../assets/StuCoAppBarLogo.png';
import SignUpForm from "../../components/auth/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <div className="bg-[#e3f2eb] flex justify-center w-full min-h-screen">
      <div className="bg-white border border-solid border-black w-full max-w-[1440px] h-full relative">
        {/* Header with logo */}

        <header className="flex items-center absolute top-0 left-0 p-5">
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="StuCoLogo"
              className="w-14 h-14 object-cover"
            />
            <div className="ml-2 text-[#4A9B74] font-bold italic text-2xl">
              StuCo
            </div>
          </div>
        </header>

        {/* Main container */}
        <div className="absolute w-[922px] top-[125px] left-1/2 transform -translate-x-1/2 bg-white rounded-[32px] shadow-lg p-8">
          {/* Title and subtitle */}
          <div className="mb-8 text-center">
            <h1 className="text-black font-bold text-[34px] leading-[48px]">
              Join StuCo Today!

            </h1>
            <p className="mt-2 text-gray-500 text-sm leading-5">
              Enter your details to proceed further
            </p>
          </div>
          <div className="flex">
            {/* Left side (form) */}

            <div className="w-3/5 pr-8">
              <SignUpForm />
              {/* "Already have an account?" divider and Sign In link */}
              <div className="mt-5">
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>

                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Already have an account?
                    </span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    to="/login"
                    className="text-[#4a9b74] underline text-sm font-bold"
                  >
                    Sign In
                  </Link>
                </div>

              </div>
            </div>

            {/* Right side (image) */}
            <div className="w-2/5 flex items-center justify-center">
              <img
                src={logoImage}
                alt="Illustration"
                className="w-[253px] h-[263px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
