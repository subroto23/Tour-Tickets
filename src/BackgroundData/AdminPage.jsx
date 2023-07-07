import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col justify-between gap-3">
      <div className="flex flex-col items-center">
        <h3 className="text-orange-600 font-semibold">ভ্রমণকারীর নামঃ</h3>
        <strong className="bg-purple-600 text-white py-1 px-2">
          সুব্রত দাস
        </strong>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-sky-600 font-semibold">প্রদানকৃত অর্থঃ</h3>
        <strong className="font-bolder text-xl bg-blue-900 text-white p-1">
          ১০০০/=
        </strong>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-green-600 font-semibold">বকেয়ার পরিমাণঃ</h3>
        <strong className="font-bolder text-xl bg-orange-900 text-white p-1">
          ৩০০/=
        </strong>
      </div>
    </div>
  );
};

export default AdminPage;
