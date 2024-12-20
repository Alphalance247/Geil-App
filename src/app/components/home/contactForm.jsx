"use client";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({});
  const handleForm = () => {
    alert(
      "Thanks for getting in touch, we would get to you very soon Cheers 🥂🥂🥂"
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <form
        action=""
        className="p-6 border border-[#F0F0F0] rounded-2xl h-full max-md:p-3"
        style={{ boxShadow: " 0px 6px 15px -2px #10182814" }}
        onSubmit={handleForm}
      >
        <p className="mb-10 text-xl font-bold text-[#262626] font-onest">
          Submit the form, and we'll reply soon!
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
              value={form.firstname || ""}
              required
              className="rounded-lg border border-[#D1D5DB] text-[#8c8c8c] w-full px-[14px] py-[10px] outline-none"
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
              id="lastname"
              name="lastname"
              value={form?.lastname || ""}
              required
              className="rounded-lg border border-[#D1D5DB]  w-full px-[14px] py-[10px] outline-none text-[#8c8c8c]"
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
              className="rounded-lg border border-[#D1D5DB]  w-full px-[14px] py-[10px] outline-none text-[#8c8c8c]"
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
              id="number"
              name="number"
              value={form?.number || ""}
              className="rounded-lg border border-[#D1D5DB]  w-full px-[14px] py-[10px] outline-none text-[#8c8c8c]"
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
              value={form?.country || ""}
              id="country"
              className="rounded-lg border border-[#D1D5DB]  w-full px-[14px] py-[10px] outline-none text-[#8c8c8c]"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
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
              className="rounded-lg border border-[#D1D5DB] w-full px-[14px] py-[10px] outline-none text-[#8c8c8c]"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
            </select>
          </div>
        </div>

        <div className="mb-6 mt-6">
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="font-geist font-medium text-sm text-[#595959]"
            >
              Subject
            </label>
            <br />
            <select
              name="subject"
              value={form?.subject || ""}
              id="subject"
              className="rounded-lg border border-[#D1D5DB]  w-full px-[14px] py-[10px] outline-none text-[#8c8c8c]"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="font-geist font-medium text-sm text-[#595959]"
            >
              Your message
            </label>
            <br />
            <textarea
              name="mesage"
              id="message"
              value={form?.message || ""}
              rows={5}
              className="rounded-lg border border-[#D1D5DB] w-full outline-none text-[#8c8c8c]"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button className=" block w-full px-6 py-2 text-[#1F1F1F] font-bold text-sm bg-[#6BD051] rounded-[30px] font-geist">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
