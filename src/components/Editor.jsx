import { XIcon } from '@heroicons/react/solid';
// import MonacoEditor from 'react-monaco-editor/lib';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('react-monaco-editor'), { ssr: false });

const Tab = ({ title, onClose,extraClass }) => {
    return (
      <div className={`flex items-center text-white px-4 py-3 3xl:py-4 border-[0.5px] border-[#FFFFFF0A]  ${extraClass}`}>
        <span className='text-xs'>{title}</span>
        <button onClick={onClose} className="ml-2">
          <XIcon className="h-4 w-4" />
        </button>
      </div>
    );
  };
  
  const EditorHeader = () => {
    return (
      <div className="flex items-center bg-[#1E232B] mx-4 ">
        <Tab extraClass="bg-[#007AFF]" title="Example File 1" onClose={() => alert('Close Tab')} />
        <Tab title="Example Folder" onClose={() => alert('Close Tab')} />
        <Tab title="File 123" onClose={() => alert('Close Tab')} />
        <Tab title="Sample File" onClose={() => alert('Close Tab')} />
  
       
      </div>
    );
  };
  
export default function Editor() {
    return (
        <div className="flex-grow flex flex-col">
        <EditorHeader />
        <div className=" h-full bg-[#0D0F11] mx-4 flex-1 px-4 ">
        <MonacoEditor
          width="100%"
          height="100%"
          language="javascript"
          theme="vs-dark"
          value="Enter Your Code Here "
          className='bg-[#0D0F11] text-red-300'
          options={{
            selectOnLineNumbers: true
          }}
        />
        </div>
      </div>
    );
}