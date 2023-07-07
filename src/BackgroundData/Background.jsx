import React from "react";

import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import { BsFillCarFrontFill } from "react-icons/bs";
const Background = () => {
  return (
    <div className="w-[900px] h-[336px] bg-white border rounded-3xl flex justify-between shadow-2xl">
      {/* Admin Side */}
      <div className="w-96 border-r-2 border-dashed flex flex-col justify-between">
        <div className="bg-sky-500 h-16 rounded-tl-3xl flex items-center justify-center">
          <h4 className="text-white">ভ্রমণকারীর বিবারণ</h4>
        </div>
        <div className="bg-sky-100 h-[250px] pt-5">
          <AdminPage />
        </div>
        <div className="bg-sky-500 h-6 rounded-bl-3xl w-full"></div>
      </div>
      {/* Coustomer Side */}
      <div className="w-full flex justify-between flex-col">
        <div>
          <div className="bg-sky-500 h-16 rounded-tr-3xl">
            <div className="grid grid-flow-col grid-cols-4 items-center h-16 px-5">
              <div className="text-4xl text-white flex justify-center">
                <BsFillCarFrontFill />
              </div>
              <div className="">
                <h3 className="text-white text-center">রূপসী বাংলা ক্লাব</h3>
              </div>
              <div>
                <h4 className="text-white text-center">আনন্দ ভ্রমণ</h4>
              </div>
              <div className="col-span-2">
                <h4 className="text-white text-center">টিকিট</h4>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        <div>
          <UserPage />
        </div>
        <div className="bg-sky-500 h-6 rounded-br-3xl w-full"></div>
      </div>
    </div>
  );
};

export default Background;
