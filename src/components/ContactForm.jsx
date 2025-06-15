
import React from "react";

import Swal from "sweetalert2";

const ContactForm = () => {
  const [result, setResult] = React.useState("");
const onSubmit = async (event) => {
  event.preventDefault();
  setResult("");
  const formData = new FormData(event.target);
    formData.append("access_key", "7d1e8a82-1fc7-4bf0-8c85-4d4c3dd95280");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (data.success) {
    Swal.fire({
      title: "Success!",
      text: "Mail Sent Successfully!",
      icon: "success",
    }).then(() => {
      event.target.reset();
    });
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};


  return (
    <div className="mx-auto max-w-[800px]">
      <form data-aos="fade-up" data-aos-duration="1000" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Your Name"
            name="name"
          />
          <input
            type="text"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Class"
            name="Class"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            data-aos="fade-right"
            data-aos-duration="1300"
            type="email"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Your email"
            name="email"
          />
          <input
            data-aos="fade-left"
            data-aos-duration="1400"
            type="number"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Phone Number"
            name="phone number"
          />
        </div>
        <input
            data-aos="fade-left"
            data-aos-duration="1400"
            type="Subject"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Write Your Subject  (Group)"
            name="Subject"
          />
        <textarea
          data-aos="fade-up"
          data-aos-duration="1400"
          className="w-full bg-[#110c2eb3] rounded-lg px-5 py-4  mt-4 outline-none resize-none placeholder:text-dark/80"
          placeholder="Your Message"
          name="Message"
          id=""
          rows="3"
        ></textarea>
        <div className="text-center mt-3">
          <button
            className="borde border-secondary w-full px-8 py-3 bg-[#110c2eb3] hover:bg-white hover:text-black duration-500 rounded-lg font-semibold uppercase tracking-wider text-sm sm:text-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
