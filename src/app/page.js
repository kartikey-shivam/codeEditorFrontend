"use client"
import React, { useState } from 'react';
import FileExplorer from '@/components/FileExplorer';
import TopBar from '@/components/TopBar';
import TopNavigation from '@/components/TopNavigation';
import IssuePanel from '@/components/IssuePanel';
import CollapseIcon from '@/assets/svg/collapseIcon';
import Editor from '@/components/Editor';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isIssuePanelOpen, setIsIssuePanelOpen] = useState(true);


  return (
    <div className='w-full h-screen flex flex-col bg-[#0D0F11] p-4'>
        <div className='bg-[#191D23] w-full '><TopBar /></div>
        <div className='text-[#7B8191] p-2 3xl:p-4 text-sm 3xl:text-base'>AI Audit  /  My Projects  / <span className='text-white'>Code Editor</span></div>
        <div className="flex flex-col flex-1 bg-[#191D23]">
            <TopNavigation />


            {/* File explorer  */}
          <div className='flex h-full relative'>
            {isSidebarOpen && (
              <div className="w-1/5 bg-[#0D0F11] text-white ml-4 relative cursor-pointer">
                      <FileExplorer />
                      <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} className='absolute bottom-16 -right-2'>
                        <CollapseIcon className="rotate-[180deg]" />
                      </div>
              </div>
             )}
              {!isSidebarOpen &&(<div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} className='absolute bottom-16 -left-2'>
                        <CollapseIcon className="" />
              </div>)}
             
             {/* code Editor   */}
             <Editor />

             {/* issue panel  */}
            {isIssuePanelOpen && (
              <div className="w-1/4 bg-gray-800 text-white relative">
                <IssuePanel />
                <div onClick={()=>setIsIssuePanelOpen(!isIssuePanelOpen)} className='absolute bottom-16 -left-2'>
                        <CollapseIcon className="" />
                </div>
              </div>
            )}
              {!isIssuePanelOpen &&(<div onClick={()=>{setIsIssuePanelOpen(!isIssuePanelOpen)}} className='absolute bottom-16 -right-2'>
                        <CollapseIcon className="rotate-[180deg]" />
              </div>)}
        
            
          </div>
        </div>

    </div>
    
  );
};

export default AppLayout;
