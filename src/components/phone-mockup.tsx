import React from "react";

const MobilePhone = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto mt-[170px] p-[10px] pb-[30px] w-[350px] h-[600px] shadow-lg rounded-[30px] relative">
        <div className="w-[150px] h-[20px] bg-white absolute left-[100px] rounded-b-[20px]">
          <span className="block w-[60px] h-[5px] bg-[#d2d2d2] mx-auto mt-[5px] rounded-[20px]"></span>
        </div>

        <div className="w-full h-full bg-[#f2f2f2] rounded-[30px] overflow-y-auto px-4 py-4 pt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobilePhone;
