"use client";
import Footer from "../components/home/footer";
import Header from "../components/home/header";
import { useState } from "react";
import Image from "next/image";

const InvestorForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <Header />
      <section className="grid grid-cols-2 gap-28 items-center max-w-[1600px] w-full mx-auto max-xl:max-w-[1400px] max-xl:mx-auto max-xl:gap-12 max-lg:grid-cols-1">
        <form
          action=""
          // onSubmit={handleForm}
          className="pl-28 pr-4 py-24 max-xl:pl-14 max-lg:w-full max-lg:pl-6 max-lg:py-6"
        >
          <div className="mb-20">
            <Image
              src="/assets/icon/black-logo.svg"
              width={111}
              height={34}
              alt="logo"
            />
          </div>
          <h4 className="text-xl font-bold text-[#262626] font-onest mb-4">
            Investor Interest Form
          </h4>
          <p className="mb-10 text-lg font-geist text-[#262626]">
            Join us in driving the future of clean energy and sustainable
            mobility.
          </p>

          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <div>
              <label
                htmlFor="firstname"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                First Name*
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                name="firstname"
                required
                value={form?.firstname || ""}
                className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                Last Name*
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                name="lastname"
                required
                value={form?.lastname || ""}
                className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={form?.email || ""}
                className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                Phone Number*
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                name="phoneNumber"
                value={form?.phoneNumber || ""}
                className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                Country*
              </label>
              <br />
              <select
                name="country"
                required
                value={form?.coumtry || ""}
                id="country"
                className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Nigeria">Nigeria</option>
                <option value="Braizl">Braizl</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="city"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                City*
              </label>
              <br />
              <select
                name="city"
                value={form?.city || ""}
                id="city"
                className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="">Abuja</option>
                <option value="">Lagos</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="firstname"
              className="font-geist font-medium text-sm text-[#595959]"
            >
              Company
            </label>
            <br />
            <input
              type="text"
              id="Company"
              name="Company"
              value={form?.Company || ""}
              className="rounded-lg border border-[#D1D5DB] text-white w-full px-[14px] py-[10px]"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6 mt-6">
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="font-geist font-medium text-sm text-[#595959]"
              >
                Partnership Interest
              </label>
              <br />
              <select
                name="partnership"
                value={form?.partnership || ""}
                id="partnership"
                required
                className="rounded-lg border border-[#D1D5DB] text-[#8c8c8c] w-full px-[14px] py-[10px]"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="">partner</option>
                <option value="">partnership</option>
              </select>
            </div>
          </div>

          <button className=" block w-full px-6 py-2 text-[#1F1F1F] font-bold text-sm bg-[#6BD051] rounded-[30px] font-geist">
            Submit
          </button>
        </form>
        <div>
          <Image
            src="/assets/image/Image.png"
            width={630}
            height={4}
            className="h-fit w-full"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InvestorForm;
