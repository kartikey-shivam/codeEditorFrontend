import ProfilePhoto from "@/assets/svg/profile";
import QuillShieldLogo from "@/assets/svg/quillShieldLogo";
import {  ChevronDownIcon } from "@heroicons/react/solid";
// components/TopBar.js
const TopBar = () => {
    return (
      <nav className="w-full bg-transparent">
        <div className=" mx-auto px-2 sm:px-6 lg:px-4 w-full">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0 border-r-[1px] border-[#FFFFFF14]">
              <div className="flex-shrink-0 flex items-center space-x-2  px-4 h-full ">
                <QuillShieldLogo />
                <div>QuillShield</div>
              </div>
            </div>
              <div className="hidden lg:flex justify-end flex-1 lg:ml-6">
                <div className="flex space-x-4">
                  {/* Navigation links */}
                  <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium text-blue-700 flex flex-col items-center" aria-current="page">AI Audit  <button className="bg-blue-800 p-1 rounded-full text-white translate-y-1 ">
                </button></a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manual Audit</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RedTeam</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Monitor</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Incident Response</a>
                </div>
              </div>
            <div className="flex border-l-[1px] border-[#FFFFFF14]  items-center justify-end  px-2 lg:ml-6 lg:justify-end">
              <div className="flex justify-end items-center w-full">
                <button className="bg-blue-800 p-1 rounded-full text-white ">
                </button>
                <div className="ml-3 relative ">
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  ">
                      <ProfilePhoto />
                    </button>
                      <div>Johhny Doe</div>
                      <div className="w-6 h-6 ">
                         <ChevronDownIcon className="" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default TopBar;
  