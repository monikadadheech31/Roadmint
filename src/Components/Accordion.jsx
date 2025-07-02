import {  useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({data}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div key={data.id} className="w-[50rem] bg-[#262626] rounded-lg ">

      <div
        className={`${accordionOpen ? "rounded-b-none" : ""}  px-4 py-4 rounded-lg cursor-pointer  select-none flex justify-between items-center`}
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        {data.title}
        {accordionOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}

      </div>

      {/* --------------- accordion ------------ */}

      <div
        className={`${
          accordionOpen ? "block" : "hidden"
        }  rounded-b-xl`}
      >
        <div className=" text-xs px-4 pb-4 text-gray-400">
          {data.text}
        </div>  
      </div>
    </div>
    
  );
};

export default Accordion;