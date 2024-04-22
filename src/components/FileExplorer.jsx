"use client"
import { useState } from 'react';
import { ChevronDownIcon, FolderIcon, DocumentIcon } from '@heroicons/react/solid';

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={`flex items-center text-white cursor-pointer p-2 hover:text-[#007AFF] ${isOpen ? 'text-[#007AFF]' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronDownIcon
          className={`w-5 h-5 mr-2 transition-transform duration-200 ${!isOpen ? 'transform -rotate-90' : ''}`}
        />
        <FolderIcon className="w-5 h-5 mr-2" />
        <span className='text-sm 3xl:text-lg'>{name}</span>
      </div>
      {isOpen && <div className="pl-4 text-sm 3xl:text-lg">{children}</div>}
    </div>
  );
};

const File = ({ name }) => (
  <div className="flex items-center text-white p-2 pl-10 hover:text-blue-700 text-sm 3xl:text-lg">
    <DocumentIcon className="w-5 h-5 mr-2" />
    <span className='text-sm 3xl:text-lg'>{name}</span>
  </div>
);

const FileExplorer = () => {
  return (
    <div className="bg-transparent p-4 h-full w-full">
      <div className="text-sm 3xl:text-lg font-medium text-white mb-4 border-b-[1px] border-[#FFFFFF14]">Folders & Files</div>
      <Folder name="Example Folder">
        <Folder name="Sample Folder">
          <File name="Folder" />
          <File name="Folder 123" />
        </Folder>
        <File name="Example File 1" />
        <File name="Example File 2" />
        <File name="Example File 321" />
      </Folder>
      <Folder name="Sample Folder">
        <File name="Folder 123" />
        <File name="Example File 2" />
        <File name="Example File 321" />
      </Folder>
    </div>
  );
};

export default FileExplorer;
