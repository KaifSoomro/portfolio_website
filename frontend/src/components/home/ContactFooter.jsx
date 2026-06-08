import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { LogOut, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ContactFooter = () => {
  const { user } = useSelector((state) => state.user);
  const socialLinks = [
    {
      link: "https://github.com/KaifSoomro",
      img: <FaGithub className="text-2xl" />,
    },
    {
      link: "https://www.linkedin.com/in/kaif-soomro-72368b2b8/",
      img: <FaLinkedin className="text-2xl" />,
    },
    {
      link: "https://www.instagram.com/kaif__soomro/",
      img: <FaInstagram className="text-2xl" />,
    },
    {
      link: "/login",
      img: <FaUser className="text-2xl" />
    },
  ];
  return (
    <div className="w-full bg-[#1e1e1d] py-10 px-5 md:p-15 mt-20">
      <Container styles={"flex justify-center flex-col gap-3"}>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-extrabold uppercase text-2xl md:text-3xl bg-linear-to-t from-purple-800 to-pink-400 bg-clip-text text-transparent"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:w-210 mt-3 text-lg text-neutral-500"
        >
          Have a project in mind or want to work together? I'd love to hear from
          you. Feel free to send me a message through the contact form or email
          me directly. Whether it's a freelance project, full-time opportunity,
          or a simple question, I'm always happy to connect and discuss how I
          can help.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 flex items-center gap-3 font-semibold text-neutral-500"
        >
          <span>
            <Mail />
          </span>
          kaifsoomro82@gmail.com
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5 flex items-center gap-4 text-neutral-500"
        >
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              className="hover:text-pink-500 duration-200"
            >
              {social.img}
            </Link>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactFooter;
