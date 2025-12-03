import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 mt-10 bg-[#FFF8F1] rounded-3xl shadow-lg border border-[#EAD9C9]">
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#5B3A1A] mb-6">
        Contact WarmPaws
      </h1>

      <p className="text-center text-[#5B3A1A] text-lg sm:text-xl mb-8">
        Have questions, suggestions, or want to book a service? Reach out to us
        and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[#5B3A1A] mb-2 font-medium">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Enter your name"
            className="w-full p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
        </div>

        <div>
          <label className="block text-[#5B3A1A] mb-2 font-medium">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
            className="w-full p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
        </div>

        <div>
          <label className="block text-[#5B3A1A] mb-2 font-medium">Message</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Your message..."
            className="w-full p-3 rounded-xl border border-[#EAD9C9] focus:outline-none focus:ring-2 focus:ring-[#D4A373] h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-[#8B5E3B] hover:bg-[#6C4428] text-white py-3 rounded-xl font-semibold transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-[#A47C55]">
        <p>📧 Email: contact@warmpaws.com</p>
        <p>📞 Phone: +1 234 567 890</p>
      </div>
    </div>
  );
};

export default Contact;
