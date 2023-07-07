import React, { useState } from "react";
import { useFormik } from "formik";
import Background from "../BackgroundData/Background";
const AdminForms = () => {
  const [inputValue, setInputValue] = useState(0);
  const formik = useFormik({
    initialValues: {
      receiveAmount: "",
      previousAmount: "",
      selectAmount: "",
    },
    onSubmit: (values, { resetForm }) => {
      setInputValue(values);
      setShow(true);
      setAdminShow(false);
      resetForm({ values: "" });
    },
  });
  const [senderName, setSenderName] = useState("");
  const handleSenderSelectItem = (Name) => {
    setSenderName(Name);
  };
  const [receiverName, setReceiverName] = useState("");
  const handleReceiverSelectItem = (Name) => {
    setReceiverName(Name);
  };
  const dueValue =
    inputValue.selectAmount -
    (inputValue.previousAmount + inputValue.receiveAmount);
  const [show, setShow] = useState(false);
  const [adminShow, setAdminShow] = useState(true);
  return (
    <div>
      {adminShow && (
        <div className="mx-auto container flex border-4 flex-col justify-center items-center h-full bg-gradient-to-r from-sky-100 to-indigo-100">
          <div className="border-4 p-4 shadow-2xl">
            <div className="max-md:mt-8">
              <h1 className="text-2xl font-bold text-blue-600 text-center mt-4">
                ভ্রমণের টিকিট
              </h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="max-md:my-4">
                  <label htmlFor="name">
                    প্রদানকারীর নামঃ
                    <select
                      name="senderName"
                      id="senderName"
                      className="border-4 rounded-lg p-2 w-full"
                      onChange={(e) => handleSenderSelectItem(e.target.value)}
                    >
                      <option value="" disabled="">
                        নাম পছন্দ করুন
                      </option>
                      <option value="চন্দন দাস">চন্দন দাস</option>
                      <option value="চন্দন দাসের পরিবার">
                        চন্দন দাসের পরিবার
                      </option>
                      <option value="মনোজ দাস">মনোজ দাস</option>
                      <option value="মনোজ দাসের পরিবার">
                        মনোজ দাসের পরিবার
                      </option>
                      <option value="মিলন দাস">মিলন দাস</option>
                      <option value="মিলন দাসের পরিবার">
                        মিলন দাসের পরিবার
                      </option>
                      <option value="রনোজ দাস">রনোজ দাস</option>
                      <option value="রনোজ দাসের পরিবার">
                        রনোজ দাসের পরিবার
                      </option>
                      <option value="সমীর দাস">সমীর দাস</option>
                      <option value="সমীর দাসের পরিবার">
                        সমীর দাসের পরিবার
                      </option>
                      <option value="সুজয় দাস">সুজয় দাস</option>
                      <option value="সুজয় দাসের পরিবার">
                        সুজয় দাসের পরিবার
                      </option>
                      <option value="রঞ্জন দাস">রঞ্জন দাস</option>
                      <option value="বিলাস দাস">বিলাস দাস</option>
                      <option value="গৌরঙ্গ রায়">গৌরঙ্গ রায়</option>
                      <option value="গৌরঙ্গ রায়ের পরিবার">
                        গৌরঙ্গ রায়ের পরিবার
                      </option>
                      <option value="তন্ময় দাস">তন্ময় দাস</option>
                      <option value="সিদ্ধার্থ দাস">সিদ্ধার্থ দাস</option>
                      <option value="উজ্জ্বল দাস">উজ্জ্বল দাস</option>
                      <option value="সৌরভ দাস">সৌরভ দাস</option>
                      <option value="সুব্রত দাস">সুব্রত দাস</option>
                      <option value="দীপ্ত দাস">দীপ্ত দাস</option>
                    </select>
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="namereceive">গ্রহণকারীর নামঃ</label>
                  <select
                    name="namereceive"
                    id="tkreceiver"
                    className="border-4 rounded-lg p-2 w-full"
                    onChange={(e) => handleReceiverSelectItem(e.target.value)}
                  >
                    <option value="" disabled="">
                      নাম পছন্দ করুন
                    </option>
                    <option value="সমীর দাস">সমীর দাস</option>
                    <option value="সুব্রত দাস">সুব্রত দাস</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="amountOfSendingMoney">
                    ধার্যকৃত অর্থের পরিমাণঃ{" "}
                    <input
                      className="border-4 rounded-lg p-2 w-full"
                      type="number"
                      name="selectAmount"
                      value={formik.values.selectAmount}
                      onChange={formik.handleChange}
                      id="receiveAmount"
                      placeholder="অর্থের পরিমাণ লিখুন"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="amountOfSendingMoney">
                    প্রদানকৃত অর্থের পরিমাণঃ{" "}
                    <input
                      className="border-4 rounded-lg p-2 w-full"
                      type="number"
                      name="receiveAmount"
                      value={formik.values.receiveAmount}
                      onChange={formik.handleChange}
                      id="receiveAmount"
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
                      name="previousAmount"
                      value={formik.values.previousAmount}
                      onChange={formik.handleChange}
                      id="previousAmount"
                      placeholder="অর্থের পরিমাণ লিখুন"
                    />
                  </label>
                </div>
                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="ছবি তৈরি করুন"
                    className="border-4 p-4 bg-blue-600 text-white hover:bg-orange-600 rounded-xl"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {show && (
        <div className="mt-24">
          <Background
            senderName={senderName}
            receiverName={receiverName}
            due={dueValue}
            value={inputValue}
          />
        </div>
      )}
    </div>
  );
};

export default AdminForms;
