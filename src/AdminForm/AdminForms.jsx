import React from "react";

const AdminForms = () => {
  return (
    <div className="mx-auto container flex border-4 flex-col justify-center items-center h-screen bg-gradient-to-r from-sky-100 to-indigo-100">
      <div className="border-4 p-4 shadow-2xl">
        <div className="max-md:mt-8">
          <h1 className="text-2xl font-bold text-blue-600 text-center">
            ভ্রমণের টিকিট
          </h1>
        </div>
        <div>
          <form>
            <div className="max-md:my-4">
              <label for="name">
                প্রদানকারীর নামঃ
                <select
                  name="name"
                  id="nameText"
                  className="border-4 rounded-lg p-2 w-full"
                >
                  <option value="nameChoose" selected="" disabled="">
                    নাম পছন্দ করুন
                  </option>
                  <option value="Chandon">চন্দন দাস</option>
                  <option value="Family">চন্দন দাসের পরিবার</option>
                  <option value="Monoj">মনোজ দাস</option>
                  <option value="Family">মনোজ দাসের পরিবার</option>
                  <option value="Millon">মিলন দাস</option>
                  <option value="Family">মিলন দাসের পরিবার</option>
                  <option value="Ranoes">রনোজ দাস</option>
                  <option value="Family">রনোজ দাসের পরিবার</option>
                  <option value="Samir">সমীর দাস</option>
                  <option value="Family">সমীর দাসের পরিবার</option>
                  <option value="Sujoy">সুজয় দাস</option>
                  <option value="Family">সুজয় দাসের পরিবার</option>
                  <option value="Ranjon">রঞ্জন দাস</option>
                  <option value="Bilish">বিলাস দাস</option>
                  <option value="Gourango">গৌরঙ্গ রায়</option>
                  <option value="Family">গৌরঙ্গ রায়ের পরিবার</option>
                  <option value="Tanmoy">তন্ময় দাস</option>
                  <option value="Siddarto">সিদ্ধার্থ দাস</option>
                  <option value="Uzzal">উজ্জ্বল দাস</option>
                  <option value="Sourav">সৌরভ দাস</option>
                  <option value="Subroto">সুব্রত দাস</option>
                  <option value="Dipto">দীপ্ত দাস</option>
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label for="namereceive">গ্রহণকারীর নামঃ</label>
              <select
                name="namereceive"
                id="tkreceiver"
                className="border-4 rounded-lg p-2 w-full"
              >
                <option value="nameChoose" selected="" disabled="">
                  নাম পছন্দ করুন
                </option>
                <option value="Sourav">সমীর দাস</option>
                <option value="Subroto">সুব্রত দাস</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="amountOfSendingMoney">
                প্রদানকৃত অর্থের পরিমাণঃ{" "}
                <input
                  className="border-4 rounded-lg p-2 w-full"
                  type="number"
                  name=""
                  id="amountOfSendingMoney"
                  placeholder="অর্থের পরিমাণ লিখুন"
                />
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="amountOfSendingMoney">
                পূর্বে প্রদানকৃত অর্থের পরিমাণ যদি থাকেঃ-
                <input
                  className="border-4 rounded-lg p-2 w-full"
                  type="number"
                  name=""
                  id="amountOfSendingMoney"
                  placeholder="অর্থের পরিমাণ লিখুন"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <input
                type="button"
                value="ছবি তৈরি করুন"
                className="border-4 p-4 bg-blue-600 text-white hover:bg-orange-600 rounded-xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForms;
