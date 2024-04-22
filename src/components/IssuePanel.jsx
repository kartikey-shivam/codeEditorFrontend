import { useEffect, useState } from "react";
import {issueData} from "../constant/issueData"
import FlagIcon from "@/assets/svg/flagIcon";
import InfoIcon from "@/assets/svg/infoIcon";
const IssuePanel = () => {
  const [section,setSection] = useState("count_of_issues")
  const [type,setType] = useState()
  const [issues,setIssues] = useState();
  const [issue,setIssue] = useState();

  

  return (
    <div className="bg-[#0D0F11] h-full text-white p-2 3xl:p-4">
     
      {section ==="count_of_issues" ? (
        <div className="w-full h-full">
          <div className="p-2 text-sm 3xl:text-xl text-[#CCCCCC] font-[500] border-b-[1px] border-[#FFFFFF14]">
        Count of Issues
        </div>
        <div className="flex justify-between mb-2 3xl:mb-6 p-2 3xl:p-4">
          <button className="bg-blue-600 text-white px-3 py-2 3xl:px-4 3xl:py-2 rounded-md text-sm 3xl:font-medium">Current File</button>
          <button className="text-gray-300 px-4 py-2 rounded-md text-sm 3xl:font-medium bg-[#191D23]">Full Project</button>
        </div>
        <div className="space-y-2 3xl:space-y-6 px-2 3xl:px-4">
          <div onClick={()=>{setSection("type_of_issue"); setType("total_severity_issues"); setIssues(issueData['total_issues'])}}><IssueItem  onClick={()=>{setSection("type_of_issue");setType("total_issues")}} count="39" label="Total Issues Found" arrow={true} color="bg-blue-500" /></div>
          <div onClick={()=>{setSection("type_of_issue"); setType("high_severity_issues"); setIssues(issueData['high_severity_issues'])}}><IssueItem  count={issueData['high_severity_issues']?.issues.length} label="High Severity Issues" arrow={true}  color="bg-red-500" /></div>
          <div onClick={()=>{setSection("type_of_issue"); setType("medium_severity_issues"); setIssues(issueData['medium_severity_issues'])}}><IssueItem  count={issueData['medium_severity_issues'].issues.length} label="Medium Severity Issues" arrow={true} color="bg-yellow-500" /></div>
          <div onClick={()=>{setSection("type_of_issue"); setType("low_severity_issues"); setIssues(issueData['low_severity_issues'])}}><IssueItem   count={issueData['low_severity_issues'].issues.length} label="Low Severity Issues" arrow={true} color="bg-green-500" /></div>
          <div onClick={()=>{setSection("type_of_issue"); setType("informational_severity_issues"); setIssues(issueData['informational_severity_issues'])}}><IssueItem  count={issueData['informational_severity_issues'].issues.length} label="Informational Issues" arrow={true} color="bg-purple-500" /></div>
          <div onClick={()=>{setSection("type_of_issue"); setType("optimisation_severity_issues"); setIssues(issueData['optimisation_severity_issues'])}}><IssueItem  count={issueData['optimisation_severity_issues'].issues.length} label="Optimisation Issues" arrow={true} color="bg-cyan-500" /></div>
        </div>
        <div className="mt-2 3xl:mt-6 border-t-[1px] border-[#FFFFFF14] p-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox w-3 h-3 3xl:h-5 3xl:w-5 text-blue-600 rounded" />
            <span className="ml-2 text-sm 3xl:text-base text-gray-300">Exclude Dependencies</span>
          </label>
        </div>
        </div>
      ):('')}
      {section === "type_of_issue" ? (
        <div className="w-full h-full">
          <div className="p-2 flex text-sm 3xl:text-xl text-[#CCCCCC] font-[500] border-b-[1px] border-[#FFFFFF14]">
            <span className="text-[#7B8191] flex"> 
              <div className="cursor-pointer" onClick={()=>{setSection("count_of_issues")}}>Count of Issues /</div>  
            </span> 
              <div>{issues.label}</div>
          </div>
          <div className="bg-transparent text-white  rounded-lg">
            <div className="p-4">
              <IssueItem arrow={false} textClass="p-1 3xl:p-4 text-sm 3xl:text-xl text-center w-1/2" extraClass="p-2 3xl:p-4 w-1/2" countClass="text-xl 3xl:text-4xl ml-3"  count={issues?.issues.length} label={issues.label} color="bg-red-500" />  
            </div>
              <div className="px-4 3xl:p-4 ">
                <div className="text-sm 3xl:text-lg font-semibold px-4 mb-2 border-b-[1px] border-[#FFFFFF14] py-2">List of Issues</div>
                <div className=" overflow-auto flex flex-col h-[17rem]  3xl:h-[45rem] space-y-4">
                  {issues?.issues.map((issue, index) => (
                    <div onClick={()=>{setIssue(issue);setSection("issue")}} key={index} className="flex justify-between items-center py-2 px-4 3xl:px-8 3xl:py-4 bg-[#191D23] rounded cursor-pointer hover:bg-gray-500">
                      <span className="text-sm 3xl:text-normal">#{issue.id}. {issue.title}</span>
                      <span>{'>'}</span>
                    </div>
                  ))}

                </div>
              </div>
              <div className="mt-2 3xl:mt-6 border-t-[1px] border-[#FFFFFF14] p-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox w-3 h-3 3xl:h-5 3xl:w-5 text-blue-600 rounded" />
            <span className="ml-2 text-sm 3xl:text-base text-gray-300">Exclude Dependencies</span>
          </label>
        </div>
            </div>
      </div>
      ):('')}
        {section === "issue" ? (
        <div className="w-full h-full">
          <div className="p-2 text-sm 3xl:text-xl text-[#CCCCCC] font-[500] border-b-[1px] border-[#FFFFFF14] flex">
            <span className="text-[#7B8191] flex"><div className="cursor-pointer" onClick={()=>{setSection("count_of_issues")}}>Count of Issues &nbsp; </div> / <div className="cursor-pointer" onClick={()=>{setSection("type_of_issue")}}>&nbsp;{issues.label} /</div>  </span> <div>Issue # {issue.id}</div>
          </div>
          <div className="overflow-auto p-4 space-y-6 h-[30rem] 3xl:h-[90%]  3xl:overflow-hidden">
            <div className="flex text-sm items-center px-4 py-3 3xl:px-8 3xl:py-4 bg-[#191D23] rounded">
              #{issue.id}. {issue.title}
            </div>
            <div className="bg-[#191D23] p-3 3xl:p-6 flex-1">
              <div className="text-[#007AFFE5] text-sm 3xl:text-base">Description :</div>
              <div className="text-[#CCCCCC] text-sm 3xl:text-base">{issue.description}</div>
              <div className="text-[#007AFFE5] text-sm 3xl:text-base mt-2 3xl:mt-5">Remediation :</div>
              <div className="text-[#CCCCCC] text-sm 3xl:text-base border-b-[1px] border-[#FFFFFF14]">{issue.remediation}</div>
              <div className="p-2 flex justify-end space-x-4">
                  <button className="bg-blue-600 w-1/2 3xl:w-1/3 text-sm 3xl:text-base hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4">
                    Auto Fix Code
                  </button>
                  <button className="bg-transparent border-[1.2px] border-[#FF4D4D] h-[37px] 3xl:h-[42px] px-4">
                    <FlagIcon />
                  </button>

              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div><InfoIcon /></div>
              <div className="text-sm 3xl:text-base">Changes done in the code can be undone.</div>
            </div>
          </div>
         
      </div>
      ):('')}
    </div>
  );
};

const IssueItem = ({ count, label, color,extraClass,textClass,countClass,arrow }) => 
  {return (<div  className="flex items-center justify-between px-3 py-2 3xl:px-4 3xl:py-4 rounded-md bg-[#191D23] hover:bg-gray-600 cursor-pointer">
    <div className={`flex justify-start items-center w-1/3 border-r-[1px] border-[#FFFFFF14]  3xl:py-4 ${extraClass}`}>
      <span className={`h-4 w-4 rounded-full ${color} mr-4`}></span>
      <span className={`text-xl 3xl:text-3xl font-medium ${countClass}`}>{count}</span>
    </div>
      <span className={`ml-3 text-xs 3xl:text-xl text=[#AAAAAA] ${textClass}`}>{label}</span>
    {arrow ? (<span className="text-gray-400 text-lg 3xl:text-2xl">&gt;</span>):('')}
  </div>);
  }

export default IssuePanel;

