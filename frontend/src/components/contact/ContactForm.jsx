import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate: sendMail, isPending } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/contact/send-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: (data) => {
      toast.success(data.message || "Message sent successfull.");
    },
    onError: () => {
      toast.error("Couldn't sent message");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      subject: name,
      message: message,
    };

    sendMail(formData);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center gap-6 px-5 md:px-0 py-10 relative">
      {/* Background glow */}
      <div className="absolute w-50 h-50 md:w-100 md:h-100 bg-pink-500/20 blur-[140px] rounded-full top-10 left-10"></div>
      <div className="absolute w-50 h-50 md:w-100 md:h-100 bg-purple-600/20 blur-[140px] rounded-full bottom-10 right-10"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-white"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-md text-center text-neutral-400"
      >
        Have an idea, project, or opportunity? Feel free to reach out and let's
        create something amazing together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-full max-w-2xl"
      >

        <div className="p-0.5 rounded-3xl bg-linear-to-r from-purple-500 via-pink-500 to-purple-500">
          <div className="bg-[#0f0f17] rounded-3xl p-8 md:p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
             
              <div>
                <label className="block mb-2 text-sm text-white/80">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10
                  outline-none transition-all duration-300
                  focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.25)]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10
                  outline-none transition-all duration-300
                  focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/80">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10
                  outline-none resize-none transition-all duration-300
                  focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.25)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white
                bg-linear-to-r from-purple-600 via-pink-500 to-purple-600
                hover:scale-[1.02] active:scale-[0.98]
                transition duration-300
                shadow-[0_0_25px_rgba(236,72,153,0.4)]"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
