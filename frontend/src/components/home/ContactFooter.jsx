import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactFooter = () => {
    const socialLinks = [
        {
            link: "https://github.com/KaifSoomro",
            img: <FaGithub className="text-2xl"/>
        },
        {
            link: "https://www.linkedin.com/in/kaif-soomro-72368b2b8/",
            img: <FaLinkedin className="text-2xl"/>
        },
        {
            link: "https://www.instagram.com/kaif__soomro/",
            img: <FaInstagram className="text-2xl"/>
        }
    ]
  return (
    <div className="w-full bg-[#1e1e1d] py-10 px-5 md:p-15 mt-20">
      <Container styles={"flex justify-center flex-col gap-3"}>

        <h1 className="text-2xl text-white font-bold">Contact</h1>

        <p className="md:w-210 mt-3 text-lg text-neutral-500">
          Have a project in mind or want to work together? I'd love to hear from
          you. Feel free to send me a message through the contact form or email
          me directly. Whether it's a freelance project, full-time opportunity,
          or a simple question, I'm always happy to connect and discuss how I
          can help.
        </p>
        <p className="mt-3 flex items-center gap-3 font-semibold text-neutral-500">
          <span>
            <Mail />
          </span>
          kaifsoomro82@gmail.com
        </p>

        <div className="mt-5 flex items-center gap-4 text-neutral-500">
           {
            socialLinks.map((social, index) => (
                <Link key={index} to={social.link}>
                    { social.img }
                </Link>
            ))
           }
        </div>
      </Container>
    </div>
  );
};

export default ContactFooter;
