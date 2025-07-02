import React from "react";
import { CiSearch } from "react-icons/ci";

const Section = () => {
  return (
    <div className="w-full flex justify-center items-center pt-16">
      <div className="flex flex-col justify-center items-center gap-4 w-[30rem]">
        <h1 className="text-6xl font-bold">Roadmap</h1>
        <p className="text-sm text-center">
          Make sure your topic is clear, specific, and well-defined - the more
          precise it is, the better the roadmap you'll get!
        </p>
        <div className="mt-6 bg-gradient-to-br from-[#60ff1c] via-[#ff708f]  to-[#e97cff] flex justify-center items-center w-full rounded-lg p-1">
          <div className=" flex justify-center items-center px-3 py-2 rounded-lg w-full gap-4 bg-black ">
            <input
              type="text"
              placeholder="Topic Name..."
              className="outline-none w-full"
            />
            <div className=" p-2 bg-gradient-to-br from-[#60ff1c] via-[#ff708f]  to-[#e97cff] rounded-lg">
              <CiSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
