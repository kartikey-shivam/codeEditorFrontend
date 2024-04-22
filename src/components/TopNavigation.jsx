import FileIcon from "@/assets/svg/fileLogo";

const TopNavigation = () => {
    return (
      <nav className="bg-transparent">
        <div className="w-full p-2 3xl:px-3 3xl:py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0 -mt-1">
              <FileIcon />
            </div>
            <div className="text-white font-medium text-lg">Sample Project</div>
          </div>
          <div className="flex items-center">
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mr-2 text-sm 3xl:text-base">Audit Now</button>
            <span className="relative ml-3">
                <button className="text-[#007AFF] border border-[#007AFF29] hover:border-blue-500 px-4 py-2 rounded-md text-sm 3xl:text-base">Options</button>
              <div className="absolute -top-[0.5px] -right-1 block h-2 w-2 rounded-full  bg-red-400"></div>
            </span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default TopNavigation;
  