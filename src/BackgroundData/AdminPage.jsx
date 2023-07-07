import React from "react";

const AdminPage = (props) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <h3 className="text-orange-600 font-semibold">অর্থ প্রদানকারীঃ-</h3>
        <strong className="bg-purple-600 text-white py-1 px-2">
          {props.value.senderName}
        </strong>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-yellow-800 font-semibold">অর্থ গ্রহণকারীঃ-</h3>
        <strong className="bg-orange-600 text-white py-1 px-2">
          {props.value.receiverName}
        </strong>
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
  );
};

export default AdminPage;
