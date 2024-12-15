import Image from "next/image";
import ContactForm from "./contactForm";

const GetInTouch = () => {
  return (
    <section className="bg-white border-b border-[#F0F0F0]">
      <div className="max-w-[1280px] px-8 py-24 mx-auto grid grid-cols-2 gap-x-24">
        <div className="flex flex-col gap-y-10">
          <div className="text-left w-[90%]">
            <h3 className="text-4xl tracking-[-2%] font-bold text-[#262626] mb-4 font-onest">
              Get in Touch with Us
            </h3>
            <p className="text-lg text-[#454545] font-geist">
              We’d love to hear from you! Whether you have a question, feedback,
              or want to learn more about our services, feel free to reach out.
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <Image
              src="/assets/icon/mail.svg"
              width={32}
              height={32}
              alt="mail"
            />
            <a
              href="mailto:"
              className="text-base underline-offset-2 underline text-[#454545] font-geist font-normal "
            >
              charge@geilafrica.com
            </a>
          </div>

          <div className="flex gap-x-4 items-start">
            <Image
              src="/assets/icon/location.svg"
              width={32}
              height={32}
              alt="location"
            />
            <p className="text-base text-[#454545] font-geist font-normal">
              Suite WW16, Tafawa Balewa <br /> Square, Onikan, Lagos
            </p>
          </div>

          <div className="w-[558px] h-[390px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31748.01903324861!2d3.4011!3d6.44709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1ba598381b%3A0x7f8e53e469c011f3!2sTafawa%20Balewa%20Square!5e0!3m2!1sen!2sng!4v1234567890"
              className="w-full h-full inset-0 rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="location map"
            ></iframe>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default GetInTouch;
