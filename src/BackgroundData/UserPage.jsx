import React from "react";
import img1 from "../images/Code-128.jpg";
const UserPage = (props) => {
  return (
    <div className="grid grid-flow-col grid-cols-4 px-5 gap-4">
      <div className="flex items-center h-full">
        <img src={img1} alt="BarCode" className="transform -rotate-90" />
      </div>
      {/* 2nd Column */}
      <div className="flex flex-col justify-around gap-6">
        <div className="flex flex-col items-center">
          <h3 className="text-orange-600 font-semibold">ভ্রমণকারীর নামঃ</h3>
          <strong className="bg-purple-600 text-white py-1 px-2">
            {props.value.senderName}
          </strong>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sky-600 font-semibold">ভ্রমণের স্থানঃ</h3>
          <strong>ড্রীম ভ্যালী</strong>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-green-600 font-semibold">সময়ঃ</h3>
          <strong>সকালঃ ৭ টা</strong>
        </div>
      </div>
      {/* 3rd Column */}
      <div className="flex flex-col justify-around gap-6">
        <div className="flex flex-col items-center">
          <h3 className="text-orange-600 font-semibold">গাড়ীর ধরণঃ</h3>
          <strong>মাইক্রোবাস</strong>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sky-600 font-semibold">সিটের বিবারণঃ</h3>
          <strong>4-A</strong>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-green-600 font-semibold">ভ্রমণের তারিখঃ</h3>
          <strong>১৮/০৮/২০২৩ ইং</strong>
        </div>
      </div>
      {/* 4th Column */}
      <div className="flex flex-col justify-around gap-6">
        <div className="flex flex-col items-center">
          <h3 className="text-orange-600 font-semibold">ধার্যকৃত অর্থ</h3>
          <strong>{props.value.value.selectAmount}</strong>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sky-600 font-semibold">প্রদানকৃত অর্থঃ</h3>
          <strong className="font-bolder text-xl bg-blue-900 text-white p-1">
            {props.value.value.receiveAmount}
          </strong>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-green-600 font-semibold">বকেয়ার পরিমাণঃ</h3>
          <strong className="font-bolder text-xl bg-orange-900 text-white p-1">
            {props.value.due}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
